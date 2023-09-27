"use strict";

// const axios = require('axios');


// const forms = document.querySelectorAll('form');
// const message = {
//     loading: 'Загрузка',
//     success: 'Спасибо! Скоро мы с вами свяжемся', 
//     failure: 'Что-то пошло не так'
// }

// function postData(form){
//     form.addEventListener('submit', (e) => {
//         e.preventDefault(); 
        
//         const statusMessage = document.createElement('div');
//         statusMessage.classList.add('loading');
//         statusMessage.textContent = message.loading;
//         form.append(statusMessage);


//         const request = new XMLHttpRequest();
//         request.open('POST', 'server.php');

//         // request.setRequestHeader('Content-type', 'multipart/form-data')
//         const formData = new FormData(form);

//         request.send(formData);

//         request.addEventListener('load', () => {
//             if(request.status === 200){
//                 statusMessage.textContent = message.success;
//                 form.reset();
//                 setTimeout(() => {
//                     statusMessage.remove()
//                 }, 5000);
//             }else{
//                 statusMessage.textContent = message.failure;
//             }
//         });     
//     });

//     function showThanksModal(){
//         const prevModalDialog = document.querySelector('.modal__dialog');
//         prevModalDialog.classList.add('hide');
//         openModal();

//     }
// }


// forms.forEach((e) => postData(e));
const posts = document.querySelectorAll('.menu__item');
posts.forEach(item => item.style.display = 'none')

const  displayPosts = async() => { 
 await fetch('http://localhost:3000/menu')
    .then(data => data.json())
    .then((item) => {
        item.forEach((el)=>{
            new MenuCard(
                el.img, 
                el.altimg, 
                el.title, 
                el.descr, 
                el.price, 
                '.menu__field .container',
                'menu__item', 'sbig'
            ).render();
        })
    })
}

const displayPostsAxios = () => {
    axios.get('http://localhost:3000/menu')
    .then((item) => {
        item.data.forEach((el)=>{
            new MenuCard(
                el.img, 
                el.altimg, 
                el.title, 
                el.descr, 
                el.price, 
                '.menu__field .container',
                'menu__item', 'sbig'
            ).render();
        })
    })
}

displayPostsAxios();

async() => { 
    await fetch('http://localhost:3000/menu')
       .then(data => data.json())
       .then((item) => {
           item.forEach((el)=>{
               new MenuCard(
                   el.img, 
                   el.altimg, 
                   el.title, 
                   el.descr, 
                   el.price, 
                   '.menu__field .container',
                   'menu__item', 'sbig'
               ).render();
           })
       })
   }

// displayPosts();



/// SLIDER 
const slides = document.querySelectorAll('.offer__slide'),
    prev = document.querySelector('.offer__slider-prev'),
    next = document.querySelector('.offer__slider-next'),
    current = document.querySelector('#current'),
    total = document.querySelector('#total'),
    slidesWrapper = document.querySelector('.offer__slider-wrapper'),
    slidesField = document.querySelector('.offer__slider-inner'),
    width = window.getComputedStyle(slidesWrapper).width;
    let slideIndex = 1,
        offset = 0;

total.textContent = slides.length;
slidesField.style.width = 100 * slides.length + '%';
slidesField.style.display = 'flex';
slidesField.style.transition = '0.5s all';
slidesWrapper.style.overflow = 'hidden';
current.textContent='01';

next.addEventListener('click',() => {
    console.log( +width.slice(0, width.length-2) * (slides.length-1))
    if(offset == +width.slice(0, width.length-2) * (slides.length-1)){
       offset = 0; 
    }else{
        offset += +width.slice(0, width.length-2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    
    if(slideIndex == slides.length){
        slideIndex = 1;
    }else{
        slideIndex += 1;
    }
    
    if(slideIndex < 10){
        current.textContent = `0${slideIndex}`;
    }else{
        current.textContent = slideIndex;
    }
});

prev.addEventListener('click',() => {
    if(offset == 0){
        offset = +width.slice(0, width.length-2) * (slides.length-1) 
    }else{
        offset -= +width.slice(0, width.length-2);
    }
    slidesField.style.transform = `translateX(-${offset}px)`;
    
    if(slideIndex == 1){
        slideIndex = slides.length;
    }else{
        slideIndex -= 1;
    }
    
    
    if(slideIndex < 10){
        current.textContent = `0${slideIndex}`;
    }else{
        current.textContent = slideIndex;
    }
});


// slides.forEach((slide)=>{
//     slide.style.width = width;
// });


// showSlides(slideIndex);

// function showSlides(n){
//     if(n > slides.length){
//         slideIndex = 1;
//     }else if(n < 1){
//         slideIndex = slides.length;
//     }

//     slides.forEach((item) => {
//         item.style.display = 'none';
//     });

//     slides[slideIndex-1].style.display = 'block';
//     if(slideIndex < 10){
//         current.textContent = `0${slideIndex}`;
//     }else{
//         current.textContent = slideIndex;     
//     }
// }

// function plusSlides(n){
//     showSlides(slideIndex += n);
// }

// prev.addEventListener('click', function(){
//     plusSlides(-1);

// });

// next.addEventListener('click',function(){
//     console.log('next');
//     plusSlides(1);
// });



let sex = "female", ratio = 1.375, height, weight, age;

const res = document.querySelector('.calculating__result span');
    
console.log(res);

function calcTotal(){
    if(!sex || !height || !weight || !age || !ratio){
        res.textContent = '____';
        return;
    }

    if(sex === 'female'){
        res.textContent = Math.round((447.6 + (9.2 * weight) + (3.1 * height) - (4.3 * age) * ratio));
    }else if(sex === 'male'){
        res.textContent = Math.round((88.36 + (13.4 * weight) + (4.8 * height) - (5.7 * age) * ratio));
    }
}


function getStaticInfo(parentElem, activeClass){
    const childElements = document.querySelectorAll(`${parentElem} div`);

    document.querySelector(parentElem).addEventListener('click', (e) => {
        
        if(e.target.getAttribute('data-ratio')){
            ratio = +e.target.getAttribute('data-ratio');
        }else if(e.target.getAttribute('id')){
            sex = e.target.getAttribute('id');
        }

        if(e.target.getAttribute('data-ratio')){
            childElements.forEach((el)=>{
                el.classList.remove(activeClass);
            });
            e.target.classList.add('calculating__choose-item_active');

        }else if(e.target.getAttribute('id') && !e.target.getAttribute('data-ratio')){
            childElements.forEach((el)=>{
                el.classList.remove(activeClass);
            });
            e.target.classList.add(activeClass);
        }

        console.log(ratio, sex);
        calcTotal();

    });
}


function getDynamicInformation(attr){
    const input = document.querySelector(attr);

    if(input){
        input.addEventListener('input', ()=>{
            switch(input.getAttribute('id')){
                case 'height':
                    height = +input.value;
                    break;
                case 'weight':
                    weight = +input.value;
                    break;
                case 'age':
                    age = +input.value;
                    break;
            }
            calcTotal();
        });
    }
    
}

getDynamicInformation('#height');
getDynamicInformation('#weight');
getDynamicInformation('#age');


getStaticInfo('.calculating__choose_big', 'calculating__choose-item_active');
getStaticInfo('#gender', 'calculating__choose-item_active');


calcTotal();

