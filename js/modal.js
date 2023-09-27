const modal = document.querySelector('.modal'),
    openModalBtn = document.querySelectorAll('[data-modal]'),
    closeModalBtn = document.querySelector('[data-close]')


function openModal(){
    modal.classList.add('show');
    modal.classList.remove('hide');
    document.body.style.overflow = 'hidden';
    clearInterval(ModalTimerId);
}

function closeModal(){
    modal.classList.add('hide');
    modal.classList.remove('show');
    document.body.style.overflow = '';
}

openModalBtn.forEach(element => {
    element.addEventListener('click', () => {
        openModal();
    })    
})

modal.addEventListener('click', (e) => {
    if(e.target === modal){
       closeModal();
    }
})
closeModalBtn.addEventListener('click', closeModal);


document.addEventListener('keydown', (e) => {
    if(e.code === 'Escape' && modal.classList.contains('show')){
        closeModal();
    }
});


// const ModalTimerId = setTimeout(openModal, 3000);

function showModalByScroll(){
    if(window.pageYOffset + document.documentElement.clientHeight >= document.documentElement.scrollHeight-1){
        openModal();
        window.removeEventListener('scroll');
    }
}

window.addEventListener('scroll', showModalByScroll())






class MenuCard{
    constructor(src, alt, title, desc, price, parentSelector, ...classes){
        this.src = src;
        this.alt = alt;
        this.title = title; 
        this.desc = desc;
        this.parent = document.querySelector(parentSelector);
        this.classes = classes;
        this.price = price;
        this.transfer = 27;
        this.changeToUAH();
    }

    changeToUAH(){
        this.price = this.price * this.transfer;
        return this.price; 
    }

    render(){
        const element = document.createElement('div');
        if(this.classes.length === 0){
            element.classList.add('menu__item')
        }else{
            this.classes.forEach((e) => {
                element.classList.add(e);
            });
        }
        element.innerHTML = `
            <img src="${this.src}" alt="vegy">
            <h3 class="menu__item-subtitle">${this.title}</h3>
            <div class="menu__item-descr">${this.desc}</div>
            <div class="menu__item-divider"></div>
            <div class="menu__item-price">
                <div class="menu__item-cost">Цена:</div>
                <div class="menu__item-total"><span>${this.price}</span> грн/день</div>
            </div>
        `
        this.parent.append(element);
        console.log(this.classes);
    }
}

new MenuCard(
    "img/tabs/vegy.jpg", 
    "vegy", 
    'Меню "Фитнес"', 
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 
    100, 
    '.menu__field .container',
    'menu__item', 'big'
).render();

new MenuCard(
    "img/tabs/vegy.jpg", 
    "vegy", 
    'Меню "Фитнес"', 
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 
    100, 
    '.menu__field .container'
).render();


new MenuCard(
    "img/tabs/vegy.jpg", 
    "vegy", 
    'Меню "Фитнес"', 
    'Меню "Фитнес" - это новый подход к приготовлению блюд: больше свежих овощей и фруктов. Продукт активных и здоровых людей. Это абсолютно новый продукт с оптимальной ценой и высоким качеством!', 
    100, 
    '.menu__field .container',
    'menu__item', 'big'
).render();




const urlObj = {
    protocol: 'https',
    domain: 'mysite.com',
    showCurrentURL: function() {
        const extractCurrDomain = function () {
            return this.domain;
        }
        const extractCurrProtocol = function() {
            return this.protocol;
        }
 
        console.log(`${extractCurrProtocol()}://${extractCurrDomain()}`)
    }
}
 
urlObj.showCurrentURL() 


// window.addEventListener('keydown', (e) => {
//     console.log(e.code)
//     console.log(e.key)
// })
