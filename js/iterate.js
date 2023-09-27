'use strict';



// FILTER FUNCTION
const names = ['RomanTYk', 'Ann', 'Ivan', 'Ksenia'];
const shortNames = names.filter((name) => {
    return name.length < 5;
});
console.log(shortNames);



// MAP FUNCTION
const answers = ['rOMANtyk', 'aNN', 'iVaN', 'KSeniA'];
const formatAnswers = answers.map((item) => item.toLowerCase());
console.log(formatAnswers);


// EVERY/SOME FUNCTIONS
// SOME - Должен соответствовать условиям хотя бы один элемент из списка (Тогда вернёт true)
// EVERY - Должны соответствовать условиям все элементы из списка (Тогда вернёт true)
const some = ['qq' , 4, 'eew' ];
console.log(some.some((item) => {
    return typeof(item) === 'number'
}));




// REDUCE FUNCTION 
const arr = [4, 5, 1, 3, 2, 6];
const result = arr.reduce((sum, current) => {
    return sum += current;
});
console.log(result);

const fruits = ['apple', 'grapes', 'plum'];
const bazar = fruits.reduce((sum, current) => {
    current = current.toUpperCase()
    return sum += ` ${current}` ;
}, '')
console.log(bazar);


const obj = {
    ivan: 'persone', 
    ann: 'persone',
    dog: 'animal',
    cat: 'animal'
}


const newObj = Object.entries(obj) // Convert object to array
                .filter(item => item[1] === 'persone')
                .map((item) => {
                    return item[0]
                });
console.log(newObj);







///////////////////////////////////////////////////////
// PRACTICE TASKS 1


const films = [
    {
        name: 'Titanic',
        rating: 9
    },
    {
        name: 'Die hard 5',
        rating: 5
    },
    {
        name: 'Matrix',
        rating: 8
    },
    {
        name: 'Some bad film',
        rating: 4
    }
];

function showGoodFilms(arr) {
    return arr.filter((item) => {
        return item.rating > 8
    })
}


function showListOfFilms(arr) { 
    return arr.reduce((sum, current, index) => {
        if(index === 0){
            return sum += `${current.name}`; 
        }else{
            return sum += `, ${current.name}`; 
        }
    }, '');
}

function setFilmsIds(arr) {
    return arr.map((item, index) => {
        item.id = index
        return item;
    });
}


const tranformedArray = setFilmsIds(films);
console.log(tranformedArray);
function checkFilms(arr) {
    return arr.every((item) => {
        return item.id >= 0
    })
}

console.log(checkFilms(tranformedArray));
// console.log(setFilmsIds(films));





///////////////////////////////////////////////////////
// PRACTICE TASKS 2

const funds = [
    {amount: -1400},
    {amount: 2400},
    {amount: -1000},
    {amount: 500},
    {amount: 10400},
    {amount: -11400}
];

const getPositiveIncomeAmount = (data) => {
    const newArr = data.filter((item) => {
        return item.amount > 0;
    }, 0);
    newArr.reduce((sum, curr) => {
        return sum += curr.amount
    }, 0);
};
console.log(getPositiveIncomeAmount(funds));


const getTotalIncomeAmount = (data) => {
    return data.some(item => item.amount < 0) ? 
        data.reduce((sum, current ) => {
            return sum += current.amount
        }, 0) : getPositiveIncomeAmount(data);
};

console.log(getTotalIncomeAmount(funds));


