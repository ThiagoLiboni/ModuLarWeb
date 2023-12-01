import * as functions from "./functions.js";
import { inicializar } from "./auth.js";
import { downloadData } from "./auth.js";
// localStorage.clear();

functions.refreshBar();
downloadData();


document.addEventListener('DOMContentLoade', () => {
    functions.refreshBar()
});
window.addEventListener('resize', () => {
    functions.refreshBar()
})

document.addEventListener("DOMContentLoaded", function () {
    inicializar();
    let user = localStorage.getItem('Username')
    window.addEventListener('storage', (e) => {
        if (e.key === "Username") { window.location.reload() }
    })
    if (user) {
        let usuario = document.querySelectorAll('.user')
        usuario.forEach(element => {
            element.style.display = "initial"
            element.setAttribute('data-bs-title', user);
            const tooltip = new bootstrap.Tooltip(element);
            document.querySelector('.clock').style.top = "150px"
            console.log("funciona");
        });
        console.log(user);
        const a = document.querySelector('#login');
        const A = document.querySelector('#login2');
        a.classList.replace('bi-box-arrow-in-right', 'bi-box-arrow-left');
        A.classList.replace('bi-box-arrow-in-right', 'bi-box-arrow-left');
        const b = document.querySelectorAll('.Login');
        b.forEach(element => {
            element.style.right = "17px";
        });
        let B = document.querySelectorAll('.subtitle')
        B.forEach(element => {
            element.innerHTML = "LogOut"
        })

    }


});
window.scrollTo(0, 0);
let currentPage = window.location.pathname.split("/").pop();
console.log(currentPage)


window.addEventListener('resize', functions.refreshBar);


let navbar = document.querySelector('.burguer-v')
let navbar2 = document.querySelector('.burguer-h')

let a = document.querySelector('#menuMain');
let b = document.querySelector('.navbar');


let menuOpen = false;
let cancelClick = true;

navbar.addEventListener('click', () => {
    if (cancelClick) {
        cancelClick = false;
        if (!menuOpen) {
            functions.showBar();
            navbar.classList.add('open');
            menuOpen = true;
            console.log(menuOpen)
        }
    }
    else if (menuOpen) {
        navbar.classList.remove('open');
        functions.hidebar();
        setTimeout(() => {
            console.log(menuOpen)
            menuOpen = false;
            cancelClick = true;
        }, 1800);
    }
})

document.addEventListener('click', (event) => {
    if (!navbar.contains(event.target) &&
        !a.contains(event.target) &&
        !b.contains(event.target) &&
        menuOpen == true) {
        functions.hidebar();
        navbar.classList.remove('open');
        cancelClick = false;
        setTimeout(() => {
            console.log(menuOpen)
            menuOpen = false;
            cancelClick = true;
            if (barAlt) {
                bar.classList.remove('menuMain-alt');
                barAlt = false
            };
        }, 1800);
    }
})

let barAlt = false
let bar = document.querySelector('.menuMain-V');

navbar2.addEventListener('click', () => {
    bar.classList.add('menuMain-alt');
    barAlt = true
    if (cancelClick) {
        cancelClick = false;
        if (!menuOpen) {
            functions.showBar();
            navbar.classList.add('open');
            menuOpen = true;
            console.log(menuOpen)
        }
    }
    else if (menuOpen) {
        navbar.classList.remove('open');
        functions.hidebar();
        setTimeout(() => {
            bar.classList.remove('menuMain-alt');
            console.log(menuOpen)
            menuOpen = false;
            cancelClick = true;
        }, 1800);
    }
})


const scrollToPosition = window.innerHeight;

const mid1 = document.querySelector('.mid-1');
mid1.addEventListener('mouseenter', functions.slideBar);
const mid2 = document.querySelector('.mid-2');
mid2.addEventListener('mouseenter', functions.slideBar);
const mid3 = document.querySelector('.mid-3');
mid3.addEventListener('mouseenter', functions.slideBar);
// const mid4 = document.querySelector('.mid-4');
// mid4.addEventListener('mouseenter', functions.slideBar);



mid1.addEventListener('click', () => {
    if (currentPage == 'main.html' || currentPage == "main") {
        let bar = document.querySelector('.menuMain-V');
        navbar.classList.remove('open');
        functions.hidebar();
        setTimeout(() => {
            bar.classList.remove('menuMain-alt');
            console.log(menuOpen)
            menuOpen = false;
            cancelClick = true;
        }, 1800);
        setTimeout(() => {
            window.scrollTo(0, 0)
        }, 1200)
    }
    else {
        window.location.href = '../main.html';
    }
})
mid2.addEventListener('click', () => {
    window.location.href = '../views/plans.html';

})
mid3.addEventListener('click', () => {
    if (currentPage == 'main.html' || currentPage == "main") {
        let bar = document.querySelector('.menuMain-V');
        navbar.classList.remove('open');
        functions.hidebar();
        setTimeout(() => {
            bar.classList.remove('menuMain-alt');
            console.log(menuOpen)
            menuOpen = false;
            cancelClick = true;
        }, 1800);
        setTimeout(() => {
            window.scrollTo(0, scrollToPosition)
        }, 1200)
    } else if (currentPage != "main.html" || currentPage == "main") {
        const statusRedir = true
        window.location.href = `../main.html#company`;
    }
})

mostraHora()

setInterval(
    mostraHora,
    1000
)
function mostraHora() {
    let dataAtual = new Date()


    let hora = dataAtual.getHours().toString().padStart(2, '0')
    let minuto = dataAtual.getMinutes().toString().padStart(2, '0')
    let segundo = dataAtual.getSeconds().toString().padStart(2, '0')

    document.querySelector('.hours').innerHTML = `${hora}`
    document.querySelector('.minut').innerHTML = `${minuto}`
    document.querySelector('.second').innerHTML = `${segundo}`

}



if (currentPage == "main.html" || currentPage == "main" || currentPage == "") {

    document.addEventListener('DOMContentLoaded', () => {
        const bloc = document.querySelector('.bloc');
        bloc.classList.add('slidePictureHome');
    })

    window.addEventListener('scroll', functions.slideShowHome)


    document.querySelector('.productMain').addEventListener('click', () => {
        window.location.href = 'views/plans.html'
    })

    let images = [
        "../src/img/70604536_1246163172211909_1735211858970804224_n.jpg",
        "../src/img/89833876_1413550798806478_8971013459487490048_n.jpg",
        "../src/img/93109234_1440978229397068_1263121105472716800_n.jpg",
        "../src/img/plantaBaixa.PNG",
        "../src/img/modular01.PNG",
        "../src/img/partner.png",

    ];

    let s1 = document.querySelector("#show1");

    functions.Slides(s1, images, 1);

}

if (currentPage == "plans.html") {
    // let currentPosition = 1;
    // const next = document.querySelector('#rightNext');
    // const previous = document.querySelector('#Previous');
    // const element = document.querySelector('.produtos');
    // document.querySelector('#rightNext').addEventListener('click', () => {
    //     if (currentPosition === 1) {
    //         currentPosition = 2;
    //         element.style.transform = 'translateX(-33.33%)';
    //         next.style.display = 'none';
    //         previous.style.display = 'initial';
    //     } else if (currentPosition != 2) {
    //         currentPosition = 1;
    //         previous.style.display = 'initial';
    //         next.style.display = 'initial';
    //         element.style.transform = 'translateX(0%)';
    //     }
    // })

    // document.querySelector('#Previous').addEventListener('click', () => {
    //     if (currentPosition === 1) {
    //         currentPosition = 0;
    //         element.style.transform = 'translateX(33.33%)';
    //         previous.style.display = 'none';
    //         next.style.display = 'initial';
    //     } else if (currentPosition != 0) {
    //         currentPosition = 1;
    //         previous.style.display = 'initial';
    //         next.style.display = 'initial';
    //         element.style.transform = 'translateX(0%)';
    //     }
    // })

    // document.querySelector('.planos').addEventListener('mouseover', () => {
    //     next.style.background = "rgb(255,255,255,0.4)";
    //     previous.style.background = "rgb(255,255,255,0.4)";
    // })
    // document.querySelector('.planos').addEventListener('mouseout', () => {
    //     next.style.background = "unset";
    //     previous.style.background = "unset";

    // })
    document.querySelector("#buyPro").addEventListener('click',()=>{
        window.location.href="modularpro.html";
    })
    document.querySelector("#buyPremium").addEventListener('click',()=>{
        window.location.href="modularpremium.html";
    })
    document.querySelector("#buyReckons").addEventListener('click',()=>{
        window.location.href="modularreckons.html";
    })
}



if (currentPage == "modularpro.html"||currentPage == "modularpremium.html"||currentPage == "modularreckons.html") {
    let a = document.getElementById('buynow');
    a.addEventListener('mouseover', () => {

        a.style.borderColor = "cadetblue";
        a.style.scale = "1.06"
        let b = document.querySelector('.btn-buy')
        b.style.backgroundColor = "cadetblue";
        // console.log('funciona')
    })
    a.addEventListener('mouseout', () => {

        a.style.borderColor = "rgb(129, 129, 129)";
        a.style.scale = "1"
        let b = document.querySelector('.btn-buy')
        b.style.backgroundColor = "rgb(129, 129, 129)";
        // console.log('funciona')
    })


    document.querySelector('.getSketch').addEventListener('click', () => {
        window.open('https://www.sketchup.com/pt-BR/plans-and-pricing?utm_source=google&utm_medium=paid_search&utm_campaign=SU_Brand_Search_BR&gclid=CjwKCAiAxreqBhAxEiwAfGfndGm_Yjja0GNjvyYXhgg53GySH1wmh8g4Udj3rxf2yyOwr0wVju0YyhoC4k8QAvD_BwE&gclsrc=aw.ds#commercial','blank');
    })

    document.querySelector('#buynow').addEventListener('click',()=>{
        
        functions.buyNow()
    })
}






