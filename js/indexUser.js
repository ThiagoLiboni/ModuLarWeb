let currentPage = window.location.pathname.split("/").pop();
import * as functions from "./auth.js"
refreshLogin();
window.addEventListener('resize', () => { refreshLogin(); })

//Login

let a = document.querySelectorAll('.Login')
a.forEach(element => {
    element.addEventListener('click', () => {
        let user = localStorage.getItem('Username');
        if (!user) {
            window.open("../views/login.html", 'blank');
        } else {
            functions.LogoutAndUpdate();
            setTimeout(() => {
                window.location.reload();
            }, 1000)

        }
    })
});

if (currentPage == "createAccount.html") {

    var apiUrl = "https://servicodados.ibge.gov.br/api/v1/localidades/estados";
    console.log(apiUrl)

    var lista = document.getElementById("validationDefault06");

    fetch(apiUrl)
        .then(response => response.json())
        .then(data => {
            data.forEach(function (estado) {
                var li = document.createElement("option");
                li.textContent = estado.sigla;
                lista.appendChild(li);
            });
        })
        .catch(error => {
            console.error("Erro ao obter os estados: " + error);
        });


    document.querySelector('#Nxt').addEventListener('click', function () {
        const Nome = document.querySelector('#validationDefault04').value;
        const Sobrenome = document.querySelector('#validationDefault05').value;
        const Apelido = document.querySelector('#validationDefaultUsername').value;
        const Estado = document.querySelector('#validationDefault06').value;
        const Cidade = document.querySelector('#validationDefault07').value;
        const nomeCompleto = `${Nome} ${Sobrenome}`

        const input = document.querySelectorAll('input');
        let checked = false;
        input.forEach(element => {
            let validation = element.value;
            console.log(validation)
            if (validation.trim() != "" || element.type == "checkbox" && element.checked) {
                checked = true
            }
        });
        if (checked) {

            document.querySelector('body').innerHTML = `
<div class="container log " style="background-color: rgba(250, 250, 250, 0.397);">
    <div class="registerUser">
        <div class="SignUp">
            <img src="../src/img/M__1_-removebg-preview__6_-removebg-preview.png"
                style="width: 60px;height: 60px; opacity: 80%;;">
            <div class="titleSignUp">
                <h1 style="font-size: 30px; margin: 0;">Usuário</h1>
            </div>
            <form class="row g-3">
                <div class="col-md-6 inputSignUp">
                    <label for="validationDefault08" class="form-label">Email</label>
                    <input type="text" class="form-control" value="" id="validationDefault08" required>
                </div>
                <div class="col-md-4 inputSignUp">
                    <label for="validationDefault09" class="form-label">Criar Senha</label>
                    <input type="text" class="form-control" value="" id="validationDefault09" required>
                </div>
                <div class="col-md-4 inputSignUp">
                    <label for="validationDefault10" class="form-label">Corfirmar senha</label>
                    <input type="text" class="form-control" value="" id="validationDefault10" required>
                </div>
                <div class="col-12">
                    <button class="btn btn-primary bg-secondary border border-secondary border-opacity-50"
                        type="submit" id="Confirm">Confirm</button>
                </div>
            </form>


        </div>
    </div>
</div>
`}

        document.querySelector('#Confirm').addEventListener('click', () => {

            const input = document.querySelectorAll('input');
            let checked = false;
            input.forEach(element => {
                let validation = element.value;
                console.log(validation)
                if (validation.trim() != "") {
                    checked = true
                }
            });
            if (checked) {

                const email = document.querySelector('#validationDefault08').value;
                const Password = document.querySelector('#validationDefault09').value;
                const PasswordConfirm = document.querySelector('#validationDefault09').value;
                if (Password === PasswordConfirm) {

                    functions.createLogin(nomeCompleto, email, Password, Estado, Cidade)
                    event.preventDefault();
                }
            }
        })
    });
}
if (currentPage == 'login.html') {
    document.querySelector('#createAccount').addEventListener('click', function () {
        window.location.href = 'createAccount.html'
    });

    document.querySelector('#enter').addEventListener('click', (e) => {
        e.preventDefault();

        let email = document.querySelector('#validationDefault01').value;
        let password = document.querySelector('#validationDefault02').value;
        functions.SignIn(email, password);

    })


}



function refreshLogin() {
    const LCDWid = window.innerWidth;
    const LCDHei = window.innerHeight;
    const Userlogin = document.querySelector('.userlog');
    const welcomeUser = document.querySelector('.logoLogin');
    const inputUser = document.querySelector('.logIn');
    const formUser = document.querySelector('form');
    const siteL = document.querySelector('.siteLink');
    const titleL = document.querySelector('.titleLog');
    const Enter = document.querySelector('#enter');
    const forminput = document.querySelectorAll('.logBox');


    if (currentPage == "login.html") {
        if (LCDWid < 992 && LCDWid > 693) {
            Userlogin.style.flexDirection = "initial";
            Userlogin.style.height = "70vh";
            Userlogin.style.minWidth = "600px";
            Userlogin.style.width = "50vw";
            Userlogin.style.margin = "70px auto";
            welcomeUser.style.width = "55%";
            welcomeUser.style.height = "100%";
            inputUser.style.width = "45%";
            formUser.style.scale = "1";
            formUser.style.top = "89px";
            formUser.style.left = "0px";
            formUser.style.height = "70%";
            siteL.style.left = "32%";
            titleL.style.marginTop = "10px";
            titleL.style.marginLeft = "15px";
            Enter.style.left = "24%";
            Enter.style.width = "55%";
            forminput.forEach(element => {
                element.style.width = "90%";
            });


        } else if (LCDWid > 992) {
            Userlogin.style.flexDirection = "initial";
            Userlogin.style.height = "70vh";
            Userlogin.style.width = "50vw";
            Userlogin.style.minWidth = "600px";
            Userlogin.style.margin = "70px auto";
            welcomeUser.style.width = "55%";
            welcomeUser.style.height = "100%";
            inputUser.style.width = "45%";
            formUser.style.scale = "1";
            formUser.style.top = "89px";
            formUser.style.left = "0px";
            formUser.style.height = "70%";
            siteL.style.left = "32%";
            titleL.style.marginTop = "10px";
            titleL.style.marginLeft = "15px";
            Enter.style.left = "24%";
            Enter.style.width = "55%";
            forminput.forEach(element => {
                element.style.width = "90%";
            });

        }
        if (LCDWid < 693 && LCDWid > 462) {
            if (currentPage == "login.html") {
                Userlogin.style.flexDirection = "column";
                Userlogin.style.margin = "10px auto";
                Userlogin.style.width = "90%";
                Userlogin.style.minWidth = "90%";
                Userlogin.style.height = "100vh";
                welcomeUser.style.width = "100%";
                welcomeUser.style.height = "23%";
                inputUser.style.width = "100%";
                formUser.style.scale = "1.4";
                formUser.style.width = "100%";
                formUser.style.top = "140px";
                formUser.style.left = "25%";
                formUser.style.height = "53%";
                siteL.style.left = "3%";
                titleL.style.marginTop = "40px";
                titleL.style.width = "85%";
                titleL.style.marginLeft = "30px";
                Enter.style.left = "12%";
                Enter.style.width = "40%";
                forminput.forEach(element => {
                    element.style.width = "60%";
                });

            }
        }


        if (LCDWid < 462) {
            if (currentPage == "login.html") {
                Userlogin.style.flexDirection = "column";
                Userlogin.style.height = "100vh";
                welcomeUser.style.width = "100%";
                welcomeUser.style.height = "23%";
                inputUser.style.width = "100%";
                formUser.style.scale = "1.4";
                formUser.style.top = "140px";
                forminput.forEach(element => {
                    element.style.width = "60%";
                });
                formUser.style.left = "25%";
                formUser.style.height = "53%";
                siteL.style.left = "3%";
                titleL.style.marginTop = "40px";
                titleL.style.width = "85%";
                titleL.style.marginLeft = "30px";
                Enter.style.left = "12%";
                Enter.style.width = "40%";
            }

        }
    }
}