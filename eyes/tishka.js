

 window.onload = function () {
    let preloader = document.getElementById('preloader');
    setTimeout(() => {
        preloader.style.display = 'none';
    }, 1000);
}



let imgTwo1 = document.querySelector('.image_text1');
        let textImg1 = document.querySelector('.text1')

        imgTwo1.onmouseenter = function () {
            textImg1.style.zIndex = 2
            textImg1.style.opacity = 1
        }
        textImg1.onmouseleave = () => {
            textImg1.style.zIndex = -1
            textImg1.style.opacity = 0
        }


        let imgTwo2 = document.querySelector('.image_text2');
        let textImg2 = document.querySelector('.text2')

        imgTwo2.onmouseenter = function () {
            textImg2.style.zIndex = 2
            textImg2.style.opacity = 1
        }
        textImg2.onmouseleave = () => {
            textImg2.style.zIndex = -1
            textImg2.style.opacity = 0
        }




        let imgTwo3 = document.querySelector('.image_text3');
        let textImg3 = document.querySelector('.text3')

        imgTwo3.onmouseenter = function () {
            textImg3.style.zIndex = 2
            textImg3.style.opacity = 1
        }
        textImg3.onmouseleave = () => {
            textImg3.style.zIndex = -1
            textImg3.style.opacity = 0
        }











// функція виклику анімації 
let animElemets1 = document.querySelectorAll('.my-anim-left');
if (animElemets1.length > 0) {
    for (let i = 0; i < animElemets1.length; i++) {
        let item = animElemets1[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-left')
        })
        myAnimScroll(item, 'activ-anim-left');
    }
}



let animElemets2 = document.querySelectorAll('.my-anim-right');

if (animElemets2.length > 0) {
    for (let i = 0; i < animElemets2.length; i++) {
        let item = animElemets2[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-right')
        })
        myAnimScroll(item, 'activ-anim-right');
    }
}


let animElemets3 = document.querySelectorAll('.my-anim-top');


if (animElemets3.length > 0) {
    for (let i = 0; i < animElemets3.length; i++) {
        let item = animElemets3[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-top')
        })
        myAnimScroll(item, 'activ-anim-top');
    }
}

let animElemets4 = document.querySelectorAll('.my-anim-bottom');
if (animElemets4.length > 0) {
    for (let i = 0; i < animElemets4.length; i++) {
        let item = animElemets4[i];
        window.addEventListener('scroll', () => {
            myAnimScroll(item, 'activ-anim-bottom')
        })
        myAnimScroll(item, 'activ-anim-bottom');
    }
}


// робочі функціїї
function myAnimScroll(elem, className) {
    let elemHeight = elem.offsetHeight; //висота об'єкту
    let elemPosition = positionTop(elem); //позиція елементу відносно верху
    let koef = 4; //запускатимемо анімацію на 1/4 блоку
    let startAnim = window.innerHeight - elemHeight / koef; // віднімаємо від висоти вікна 1/4 висоти елементу
    if (elemHeight > window.innerHeight) { //якщо елемент вищий ніж вікно
        startAnim = window.innerHeight - window.innerHeight / koef; // віднімаємо від висоти вікна 1/4 висоти елементу
    }
    // pageYOffset - скільки пікселів прокручено - вбудован змінна в js
    if ((pageYOffset > elemPosition - startAnim) && pageYOffset < (elemPosition + elemHeight)) {
        elem.classList.add(className);
    } else {
        if (!elem.classList.contains('no-anim-again')) {
            elem.classList.remove(className);
        }
    }
}
function positionTop(param) {
    let rect = param.getBoundingClientRect();
    console.log(rect);
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;
    return rect.top + scrollTop

}
// кінець робочих функцій









startdate = new Date();
        clockStart = startdate.getTime();
        function initStopwatch() {
            let thisTime = new Date();
            return (thisTime.getTime() - clockStart) / 1000;
        }
        function getSecs() {
            let tSecs = Math.round(initStopwatch());
            let iSecs = tSecs % 60;
            let iMins = Math.round((tSecs - 30) / 60);
            let sSecs = "" + ((iSecs > 9) ? iSecs : "0" + iSecs);
            let sMins = "" + ((iMins > 9) ? iMins : "0" + iMins);
            document.getElementById("timer-counter").innerHTML = sMins + ":" + sSecs;
            setTimeout('getSecs()', 1000);
        }
        getSecs();



