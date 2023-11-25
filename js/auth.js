const verificarPagina = window.location.pathname.split("/").pop();

// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.3.1/firebase-app.js";
import {
    getDatabase,
    set,
    ref,
    update,
    get,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-database.js";
import {ref as storageRef,getStorage, getDownloadURL}from "https://www.gstatic.com/firebasejs/10.3.1/firebase-storage.js";
import {
    getAuth,
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    signOut,
} from "https://www.gstatic.com/firebasejs/10.3.1/firebase-auth.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyC4iQ76GUf9G5-cZ9ojnI8RqTR1fsJ3SxA",
    authDomain: "modularplugin.firebaseapp.com",
    databaseURL: "https://modularplugin-default-rtdb.firebaseio.com",
    projectId: "modularplugin",
    storageBucket: "modularplugin.appspot.com",
    messagingSenderId: "459181592799",
    appId: "1:459181592799:web:b5a3d3a6bad34cbb63996a",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const database = getDatabase(app);
const storage = getStorage(app);
const auth = getAuth();
let Status = "";


export function inicializar() {
    const CurrentID = localStorage.getItem("userID");
    if (CurrentID) {
        //console.log(CurrentID);

        let Ref = ref(database, `/user/${CurrentID}/`);

        get(Ref)
            .then(function (snapshot) {
                Status = snapshot.child("/status").val();
                console.log("User Status : " + Status);
                let CurrentUser = snapshot.child("/info/username").val();


            })

            .catch((error) => console.log("Status não indetificado", error));
    } else { return };
}




export function SignIn(Email, Password) {

    return new Promise((resolve, reject) => {
        signInWithEmailAndPassword(auth, Email, Password)
            .then((userCredential) => {
                // Signed in
                const user = userCredential.user;
                const uid = user.uid;
                localStorage.setItem("userID", uid)


                update(ref(database, `/user/${uid}/`), { status: "online" })


                    .then(() => {
                        const CurrentID = localStorage.getItem("userID");
                        get(ref(database, `/user/${CurrentID}/`))
                            .then(function (snapshot) {
                                Status = snapshot.child("/status").val();
                                console.log("User Status : " + Status);
                                let CurrentUser = snapshot.child("/info/username").val();
                                localStorage.setItem('Username', CurrentUser)
                                if (CurrentUser !== null) {
                                    console.log(CurrentUser)
                                }
                                alert('login com sucesso')
                                setTimeout(() => { window.close(); }, 3000)
                            })


                    });
            })

            .catch((error) => {
                reject(error);
                const errorCode = error.code;
                const errorMessage = error.message;
                // ..
                handleSignError(errorCode, errorMessage);

            });
    })
}

export function handleSignError(errorCode) {
    if (errorCode === "auth/wrong-password") {
        const a = document.querySelector('#validationDefault02');
        a.classList.add('is-invalid');
    } else if (errorCode === "auth/user-not-found") {
        let a = document.querySelector('#validationDefault01');
        a.classList.add('is-invalid');

    }
}


export function LogoutAndUpdate() {
    const user = auth.currentUser;
    const uid = user.uid;

    if (user) {
        const updates = {};
        updates["/user/" + uid + "/status"] = "offline";
        localStorage.removeItem('Username');
        localStorage.removeItem('userID');

        auth.signOut();

        update(ref(database), updates)

            .catch(() => {
                console.log("Erro ao atualizar o status para offline:", error);
            });
    }
}





export function createLogin(name, email, password, state, city) {


    createUserWithEmailAndPassword(auth, email, password)

        .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            const uid = user.uid;

            const userRef = ref(database, "/user/" + uid);
            set(userRef, {
                info: {
                    username: name,
                    email: email,
                    Location: {
                        estado: state,
                        cidade: city,
                    }
                },
                status: "offline"
            })
                .then(() => {
                    alert('Usuário cadastrado com sucesso!');
                    window.location.href = 'login.html';

                });

        }).catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            alert(errorMessage, errorCode);
        });


}

export function downloadData() {

    getDownloadURL(storageRef(storage,'movieModucad.mp4'))
        .then((url) => {
            // `url` is the download URL for 'images/stars.jpg'
            if(url){
            const videoElement = document.getElementById('video-source');
            videoElement. src = `${url}`;
            console.log('baixado')}
            // console.log(url)
         
        })
        .catch((error) => {
            // A full list of error codes is available at
            // https://firebase.google.com/docs/storage/web/handle-errors
            switch (error.code) {
              case 'storage/object-not-found':
                // File doesn't exist
                break;
              case 'storage/unauthorized':
                // User doesn't have permission to access the object
                break;
              case 'storage/canceled':
                // User canceled the upload
                break;
        
              // ...
        
              case 'storage/unknown':
                // Unknown error occurred, inspect the server response
                break;
            }
            // Handle any errors
        });

}