"use strict";

console.log('Запрос данных с сервера...');

const req = new Promise(function(resolve, reject){
    setTimeout(()=>{
        console.log('Подготовка данных с сервера...');
    
        const product = {
            name: 'TV',
            price: 2000
        }
        resolve(product);
    }, 2000)
});

req.then((product)=>{
    return new Promise((resolve, reject) => {
        setTimeout(()=>{
            product.status = 'order';
            resolve(product);
        }, 2000);
    }).then((data)=>{
        data.modify = true;
        return data
    }).then((data) => {
        console.log(data);
    }).catch(() => {
        console.error('Произошла ошибка!');
    }).finally(()=>{
        console.log('Finally');
    });
});

//////////////////////////////////////////////////////////////////////////////////////////



const test1 = (time) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve();
        }, time)
    })
}

test1(1000).then(() => {
    console.log('1s done')
});
test1(2000).then(()=> {
    console.log('2s done')
});



//////////////////////////////////////////////////////////////////////////////////////////




const test = (time) => {
    return new Promise(resolve => {
        setTimeout(()=>{
            resolve();
        }, time)
    })
}

// Если все промисы отработали, то выполняется следующий код
Promise.all([test(1000), test(2000)]).then(() => {
    console.log('All')
})





//////////////////////////////////////////////////////////////////////////////////////////
// Promise.race()
// Как только завершится один из промисов, будет вызвана та функция, которая находится в Promise.race

const promise1 = new Promise((resolve, reject) => {
    setTimeout(resolve, 100, 'Первый Promise');
  });
  
const promise2 = new Promise((resolve, reject) => {
setTimeout(resolve, 200, 'Второй Promise');
});

Promise.race([promise1, promise2]).then((result) => {
    console.log(result); // Выведет "Первый Promise", так как он завершился быстрее
});


const myRequest = async (url) => {
    const res = await fetch(url)
    if(!res.ok){
        throw new Error(`Couldn't fetch the url - ${url}, status - ${res.status}`);
    }
    return await res.json();
};