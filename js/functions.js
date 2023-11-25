let currentPage = window.location.pathname.split("/").pop();
export function refreshBar() {

    const LCDWid = window.innerWidth;
    const LCDHei = window.innerHeight;
    const contBarV = document.querySelector('#barV');
    const contBarH = document.querySelector('#barH');
    const welcome = document.querySelector('.welcome');
    const pictures = document.querySelector('.picturesHome');
    const slogan = document.querySelector('.slogan');
    const sloganH1 = document.querySelector('.slogan h1');
    const sloganH2 = document.querySelector('.slogan h2');
    const btnPlan = document.querySelector('.productMain');
    const btnPlanfont = document.querySelector('.product');
    const footerFix = document.querySelector('.footerFix');
    const Footer = document.querySelector('.footer');
    const menu = document.querySelector('.menuMain-V');
    const main = document.querySelector('.main');

    const login = document.querySelector('.Login');
    const user = document.querySelector('.bi-user');

    const whoWe = document.querySelector('.whoWe');
    const map = document.querySelector('#map');
    const contato = document.querySelector('.contato');

    const wallSvg = document.querySelector('.wallpaper');
    const wallBg = document.querySelector('.wall-background');

    const selectplan = document.querySelector('.selectPlan');
    const boxPlans = document.querySelector('.containerBox');
    const Plan = document.querySelectorAll('.containerRow');
    const Plans = document.querySelector('.produtos');
    const compare = document.querySelector('#compare');

    const pl1 = document.querySelector('.p-mp');
    const pl1Logo = document.querySelector('.p-mp-Log');
    const pl1logo = document.querySelector('.p-mp-logo');
    const pl1Title = document.querySelector('.hed-T');
    const mpTitle = document.querySelector('.p-mp-Title');
    const movie = document.querySelector('.movieModular');
    const moviePlay = document.querySelector('.movie-play');
    const skpText = document.querySelector('.skp-text #text');
    const btnGetSkp = document.querySelector('.skp-text ');
    const price = document.querySelector('.price');
    const Price = document.querySelector('.Price');
    const btnBuyNow = document.querySelector('#buynow');

    const Userlogin = document.querySelector('.userlog');


    if (LCDWid < 992 && LCDWid > 693) {
        contBarH.style.display = "flex";
        contBarV.style.display = "none";
        login.style.left = "120px";
        login.style.top = "15px";
        login.style.width = "50px";
        login.style.height = "50px";
        user.style.position = "absolute";
        user.style.right = "120px";
        footerFix.style.fontSize = "1.7ch";
        footerFix.style.left = "30%";
        
        
        if (currentPage == "main.html" || currentPage=="") {
            main.style.height= "100vh"
            pictures.style.display = "initial"
            welcome.style.top = "110px";
            slogan.style.position = "absolute ";
            slogan.style.left = "40px ";
            slogan.style.top = "30%";
            slogan.style.margin = "0px ";
            slogan.style.alignItems = "inherit";
            sloganH1.style.fontSize = "70px";
            sloganH2.style.fontSize = "18px";
            sloganH2.style.marginRight = "inherit";
            sloganH2.style.marginLeft = "150px";
            btnPlan.style.left = "100px";
            btnPlan.style.width = "auto";
            btnPlan.style.bottom = "20%";
            whoWe.style.marginRight = "0px";
            Footer.style.flexDirection = "initial";
            map.style.width = "50%";
            map.style.marginLeft = "5px";
            contato.style.width = "50%";
            contato.style.alignItems = "center";
            contato.style.marginLeft = "10px";
            contato.style.paddingLeft = "0px";
            Footer.style.marginRight = "0px";
            wallSvg.style.display = "none"
            wallBg.style.backgroundImage = "url(../src/img/texture4.png)";
            wallBg.style.filter = "blur(0px)";


        } else if (currentPage == "plans.html") {
            // nextPlan.style.right = "0px";
            // prevPlan.style.left = "0px";
            compare.style.top = "170px"
            selectplan.style.marginTop = "80px";
            selectplan.style.width = "100vw";
            selectplan.style.fontSize = "40px";
            boxPlans.style.margin = "20px 20px 0px 20px";
            Plan.forEach(element => {
                element.style.maxWidth = "25.5vw";
            });
            Plans.style.width = "100%";

        } else if (currentPage == "modularpro.html" || currentPage == "modularpremium.html" || currentPage == "modularreckons.html") {
            pl1.style.margin = "80px auto";
            pl1logo.style.width = "100px";
            pl1logo.style.borderRadius = "23%";
            pl1Logo.style.height = "90%";
            pl1Logo.style.borderRadius = "25%";
            pl1.style.padding = "10px";
            pl1Title.style.marginLeft = "50px";
            pl1Title.style.paddingLeft = "50px";
            mpTitle.style.fontSize = "5.3vw";
            movie.style.display = "flex";
            movie.style.flexDirection = "initial";
            movie.style.alignItems = "start";
            moviePlay.style.width = "100%"
            skpText.style.fontSize = "20px";
            price.style.top = "190px";
            price.style.right = "inherit";
            price.style.left = "55%";
            price.style.scale = ".8";
            btnBuyNow.style.top = "40px";

        } else if (currentPage == "compare.html") {
            boxPlans.style.margin = "20px 20px 0px 20px";
            Plan.forEach(element => {
                element.style.maxWidth = "24.5vw";
            });
            Plans.style.width = "1200px";
            Price.style.marginLeft = "0px";
            selectplan.style.marginTop = "80px";
            selectplan.style.width = "100vw";
            selectplan.style.fontSize = "40px";

        }


    } else if (LCDWid > 992) {
        
        contBarH.style.display = "none"
        contBarV.style.display = "flex"
        login.style.position = "absolute"
        footerFix.style.fontSize = "1.7ch";
        footerFix.style.left = "30%";
        login.style.left = "inherit";
        login.style.left = "23px";
        login.style.top = "inherit";
        login.style.bottom = "110px";
        login.style.width = "auto";
        login.style.height = "auto";

        if (currentPage == "main.html" || currentPage =="") {
            main.style.height= "100vh"
            pictures.style.display = "initial"
            welcome.style.top = "5px";
            slogan.style.position = "absolute ";
            slogan.style.left = "40px ";
            slogan.style.margin = "0px ";
            slogan.style.alignItems = "inherit";
            sloganH1.style.fontSize = "70px";
            sloganH2.style.fontSize = "18px";
            sloganH2.style.marginRight = "inherit";
            sloganH2.style.marginLeft = "150px";
            btnPlan.style.left = "140px";
            btnPlan.style.width = "auto";
            btnPlan.style.bottom = "20%";
            whoWe.style.marginRight = "70px";
            Footer.style.marginRight = "70px";
            Footer.style.flexDirection = "initial";
            map.style.width = "50%";
            map.style.marginLeft = "5px";
            contato.style.width = "50%";
            contato.style.alignItems = "flex-start";
            contato.style.paddingLeft = "40px";
            contato.style.marginLeft = "10px";
            Footer.style.marginRight = "70px";
            wallSvg.style.display = "initial"
            wallBg.style.backgroundImage = "url(../src/img/plano-de-fundo.png)";
            wallBg.style.filter = "blur(3px)";

        } else if (currentPage == 'plans.html') {
            // nextPlan.style.right = "5%";
            // prevPlan.style.left = "5%";
            compare.style.top = "90px"
            selectplan.style.width = "94.5vw";
            selectplan.style.marginTop = "0px";
            selectplan.style.fontSize = "40px";
            boxPlans.style.margin = "20px 95px 0px 15px";
            Plan.forEach(element => {
                element.style.maxWidth = "25.5vw";
            });
            Plans.style.width = "100%";

        } else if (currentPage == "modularpro.html" || currentPage == "modularpremium.html" || currentPage == "modularreckons.html") {
            pl1.style.margin = "50px 220px 50px auto";
            pl1.style.width = "70vw";
            pl1logo.style.width = "100px";
            pl1logo.style.borderRadius = "23%";
            pl1Logo.style.height = "90%";
            pl1Logo.style.borderRadius = "25%";
            mpTitle.style.fontSize = "60px";
            movie.style.display = "flex";
            movie.style.flexDirection = "initial";
            movie.style.alignItems = "start";
            moviePlay.style.width = "100%"
            price.style.top = "150px";
            price.style.right = "23%";
            price.style.left = "inherit";
            price.style.scale = ".9";
            btnBuyNow.style.top = "40px";
            
        } else if (currentPage == "compare.html") {
            boxPlans.style.margin = "20px 95px 0px 15px";
            Plan.forEach(element => {
                element.style.maxWidth = "24.5vw";
            });
            Plans.style.width = "1200px";
            Price.style.marginLeft = "0px";
            selectplan.style.width = "94.5vw";
            selectplan.style.marginTop = "0px";
            selectplan.style.fontSize = "40px";
        }


    }
    
    if (LCDWid < 693 && LCDWid > 462) {
        contBarV.style.display = "none"
        contBarH.style.display = "flex"
        footerFix.style.fontSize = "12px";
        footerFix.style.left = "30%";
        login.style.left = "120px";
        login.style.top = "15px";
        login.style.width = "50px";
        login.style.height = "50px";
        
        if (currentPage == "main.html" || currentPage == "") {
            main.style.height= "100vh"
            pictures.style.display = "none";
            slogan.style.position = "relative";
            slogan.style.width = "auto";
            slogan.style.top = "30%";
            slogan.style.margin = "inherit";
            slogan.style.left = "inherit";
            slogan.style.display = "flex";
            slogan.style.flexDirection = "column";
            slogan.style.alignItems = "center";
            sloganH1.style.fontSize = "12vw";
            sloganH2.style.fontSize = "20px";
            sloganH2.style.marginRight = "0px";
            sloganH2.style.marginLeft = "60px";
            btnPlan.style.left = "20%";
            btnPlan.style.width = "320px";
            btnPlan.style.bottom = "20%";
            btnPlanfont.style.fontSize = "28px";
            whoWe.style.marginRight = "0px";
            Footer.style.flexDirection = "column";
            Footer.style.marginRight = "0px";
            map.style.width = "100%";
            map.style.marginLeft = "0px";
            contato.style.width = "100%";
            contato.style.alignItems = "center";
            contato.style.paddingLeft = "0px";
            contato.style.marginLeft = "0px";
            wallSvg.style.display = "none"
            wallBg.style.backgroundImage = "url(../src/img/texture4.png)";
            wallBg.style.filter = "blur(0px)";
        }
        if (currentPage == "plans.html") {
            // nextPlan.style.right = "-70px";
            // prevPlan.style.left = "-70px";
            compare.style.top = "170px"
            selectplan.style.marginTop = "80px";
            selectplan.style.width = "100vw";
            selectplan.style.fontSize = "5.5vw";
            boxPlans.style.margin = "20px auto 0px auto";
            Plan.forEach(element => {
                element.style.maxWidth = "79vw";
            });
            Plans.style.width = "90%";

            if (LCDHei < 446) {
                btnPlan.style.bottom = "10%";
                btnPlan.style.left = "150px";
                btnPlanfont.style.fontSize = "18px";
                slogan.style.margin = "50px";
                sloganH1.style.fontSize = "70px";
                sloganH2.style.fontSize = "12px";                
            }

        } else if (currentPage == "compare.html") {
            boxPlans.style.margin = "20px auto 0px auto";
            Plan.forEach(element => {
                element.style.maxWidth = "79vw";
            });
            Plans.style.width = "90%";
            Price.style.marginLeft = "10%";
            selectplan.style.marginTop = "80px";
            selectplan.style.width = "100vw";
            selectplan.style.fontSize = "5.5vw";
            
        } else if (currentPage == "modularpro.html" || currentPage == "modularpremium.html" || currentPage == "modularreckons.html") {
            pl1.style.width = "100%";
            pl1.style.padding = "10px";
            pl1.style.margin = "80px auto";
            pl1logo.style.width = "100px";
            pl1logo.style.borderRadius = "23%";
            pl1Logo.style.height = "90%";
            pl1Logo.style.borderRadius = "25%";
            pl1Title.style.marginLeft = "10px";
            pl1Title.style.paddingLeft = "30px";
            mpTitle.style.fontSize = "6.6vw";
            movie.style.display = "flex";
            movie.style.flexDirection = "column";
            movie.style.alignItems = "center";
            moviePlay.style.width = "100%"
            skpText.style.fontSize = "100%";
            price.style.width = "210px";
            price.style.left = "50%";
            price.style.top = "190px";
            price.style.scale = ".8";
            btnBuyNow.style.top = "40px";


        }

    }



    if (LCDWid < 462 || /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)) {
        contBarV.style.display = "none";
        contBarH.style.display = "flex";
        login.style.left = "120px";
        login.style.top = "15px";
        login.style.width = "50px";
        login.style.height = "50px";
        footerFix.style.fontSize = "3vw";
        footerFix.style.left = "15%";

        if (LCDHei < 446) {
            footerFix.style.fontSize = "12px";
            footerFix.style.left = "30%";
        }
        
        if (currentPage == "main.html" || currentPage=="") {
            main.style.height= "92.5vh"
            pictures.style.display = "none";
            welcome.style.top = "90px";
            slogan.style.position = "relative";
            slogan.style.top = "20%";
            slogan.style.margin = "50px 0px 0px 0px";
            slogan.style.left = "-10px";
            slogan.style.display = "flex";
            slogan.style.flexDirection = "column";
            slogan.style.alignItems = "center";
            slogan.style.justifyContent = "center";
            slogan.style.alignItems = "center";
            sloganH1.style.fontSize = "12vw";
            sloganH2.style.fontSize = "3.5vw";
            btnPlan.style.left = "20%";
            btnPlan.style.bottom = "28%";
            btnPlan.style.width = "60%";
            btnPlanfont.style.fontSize = "5vw";
            whoWe.style.paddingLeft = "20px";
            whoWe.style.paddingRight = "20px";
            whoWe.style.marginRight = "0px";
            Footer.style.flexDirection = "column";
            Footer.style.marginRight = "10px";
            map.style.width = "100%";
            contato.style.width = "100%";
            contato.style.marginLeft = "5px";
            contato.style.paddingLeft = "20px";
            wallSvg.style.display = "none"
            wallBg.style.backgroundImage = "url(../src/img/texture4.png)";
            wallBg.style.filter = "blur(0px)";
            if (LCDHei < 446) {
                btnPlanfont.style.fontSize = "16px";
                btnPlan.style.left = "35%";
                btnPlan.style.bottom = "10%";
                sloganH1.style.fontSize = "12vw";
                sloganH2.style.fontSize = "2vw";
                menu.style.justifyContent = "normal";
            } 

        } else if (currentPage == "plans.html") {
            // nextPlan.style.display = "none";
            // prevPlan.style.display = "none";
            compare.style.top = "170px"
            selectplan.style.marginTop = "80px";
            selectplan.style.width = "100vw";
            selectplan.style.fontSize = "5.5vw";
            boxPlans.style.margin = "20px auto 0px auto";
            Plan.forEach(element => {
                element.style.maxWidth = "79vw";
            });
            Plans.style.width = "90%";
            if (LCDHei < 446) {
                footerFix.style.fontSize = "12px";
                footerFix.style.left = "30%";
            }

        } else if (currentPage == "modularpro.html" || currentPage == "modularpremium.html" || currentPage == "modularreckons.html") {
            pl1.style.width = "100%";
            pl1.style.padding = "7px";
            pl1.style.margin = "80px auto";
            pl1logo.style.width = "80px";
            pl1logo.style.borderRadius = "20%";
            pl1Logo.style.height = "90px";
            pl1Logo.style.borderRadius = "28%";
            pl1Title.style.marginLeft = "10px";
            pl1Title.style.paddingLeft = "30px";
            mpTitle.style.fontSize = "30px";
            movie.style.display = "flex";
            movie.style.flexDirection = "column";
            movie.style.alignItems = "center";
            moviePlay.style.width = "100%"
            btnGetSkp.style.fontSize = "100%";
            skpText.style.margin = "4px auto 4px -3px";

            price.style.width = "210px";
            price.style.left = "40%";
            price.style.top = "190px";
            price.style.scale = ".8";
            btnBuyNow.style.top = "40px";
            


        } else if (currentPage == "compare.html") {
            boxPlans.style.margin = "20px auto 0px auto";
            Plan.forEach(element => {
                element.style.maxWidth = "79vw";
            });
            Plans.style.width = "90%";
            Price.style.marginLeft = "10%";
            selectplan.style.marginTop = "80px";
            selectplan.style.width = "100vw";
            selectplan.style.fontSize = "5.5vw";
        }

    } else if (currentPage == 'plans.html') {
        // nextPlan.style.display = "initial";
        // prevPlan.style.display = "initial";
    }
   
}




export function showBar() {
    document.querySelector('#menuMain').classList.add('transitionMenu');
    let a = document.querySelector('.listMain');
    let b = document.querySelector('.listTransition');
    let c = document.querySelector('.roundedX');




    setTimeout(() => { c.style.display = "block"; }, 300)
    setTimeout(() => {
        a.style.display = "flex";
        b.style.display = "flex";
    }, 1000)


}
function hideA() {
    return new Promise((result, reject) => {
        let a = document.querySelector('.listTransition');
        let b = document.querySelector('.listMain');
        let c = document.querySelector('.roundedX');
        a.classList.add('listTransitionOut');
        c.style.display = "none";
        setTimeout(() => {
            b.style.display = "none";
            a.classList.remove('listTransitionOut');
            result();
        }, 500);
    })
}

export function hidebar() {
    hideA().then(() => {
        let b = document.querySelector('.menuMain-V');
        setTimeout(() => {
            b.classList.add('hideMenu')
        }, 100);

        setTimeout(() => {
            b.classList.remove('hideMenu', 'transitionMenu')
            b.style.display = "none;"
        }, 1000);
    })
}

export function slideBar(event) {
    const a = event.target;
    const parentElement = a.closest('.mid');
    let b;
    if (parentElement) {

        const parentClasses = parentElement.className;

        const classesArray = parentClasses.split(" ");

        const midClasses = classesArray.filter(className =>
            className.startsWith("mid-1") ||
            className.startsWith("mid-2") ||
            className.startsWith("mid-3") ||
            className.startsWith("mid-4"));

        if (midClasses.length > 0) {
            b = midClasses[0];

            console.log(b);
        }
    }
    const line1 = document.querySelector(`.${b} .midline1`);
    if (line1) {
        line1.classList.add('midline-Transition');
        line1.style.display = "flex";
    }
    const line2 = document.querySelector(`.${b} .midline2`);
    if (line2) {
        setTimeout(() => {
            line2.classList.add('midline2-Transition')
            line2.style.display = "flex";
        }, 200);
    }

    const c = document.querySelector(`.${b}`).addEventListener('mouseleave', () => {
        line2.classList.replace('midline2-Transition', 'midline2-TransitionOut');
        line1.classList.replace('midline-Transition', 'midline-TransitionOut');
        // setTimeout(()=>{
        // },400);
        setTimeout(() => {
            line1.style.display = "none"
            line2.style.display = "none"
            line1.classList.remove('midline-TransitionOut');
            line2.classList.remove('midline2-TransitionOut');
        }, 865)

    })
}
export function slideShowHome() {
    const scrollY = window.scrollY;
    const scrollX = window.scrollX; // Scroll horizontal (se necessário)
    const elemento = document.querySelector('.bloc');
    const limiteY = -230;
    const limiteX = -110;

    // Calcula a proporção para o movimento vertical
    const proporcaoY = (scrollY <= (-(limiteY))) ? 0 : (-(scrollY) - limiteY);

    // Calcula a proporção para o movimento horizontal (se necessário)
    const proporcaoX = (scrollX <= (-(limiteX))) ? 0 : (-(scrollX) - limiteX);

    // Aplica a nova posição ao elemento
    const novaPosicao = `translateY(${proporcaoY}px) translateX(${proporcaoX}px)`;
    elemento.style.transform = novaPosicao;
}

export function Slides(element, images, startIndex) {
    let currentIndex = startIndex;


    function updateSlide() {
        element.src = images[currentIndex];
        currentIndex = (currentIndex + 1) % images.length;
        setTimeout(updateSlide, 5000);
    }
    updateSlide(); // Inicia a atualização do slide

}

export function buyNow() {
    let user = localStorage.getItem('userID');
    let a = document.querySelector('#textBuyNow');
    if (user) {
        if (a.textContent !== "Download") {
            alert('Parabéns pela compra!');
            alert('Download Liberado!');
            a.innerHTML = "Download";
        } else { };
    } else { window.location.href = "login.html" }

}