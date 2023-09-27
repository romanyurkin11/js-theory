'use strict';


// BY USING THE FUNCTIONS
function User(name, age){
    this.name = name;
    let userAge = age;

    this.say = function(){
        console.log(`Имя пользователя: ${this.name}, возраст: ${userAge}!`)
    }

    this.getUserAge = function(){
        return userAge;
    }
}

const ivan = new User('Ivan', 27);
console.log(ivan.getUserAge());
ivan.say();




//////////////////////////////////////////////////////////////////////////////////////////
// BY USING THE CLASS
class User{

    constructor(name, age){
        this.name = name;
        this._age = age;
    }

    #surname = 'Tsoy';

    get age(){ // Getter
        return this._age;
    }

    set age(age){ // Setter
        if( typeof age === 'number' && age < 110 && age > 0){
            this._age = age;
        }else{
            console.log('Incorrect age value!');
        }
    }

    say(){ 
        console.log(`Имя пользователя: ${this.name} ${this.#surname}, возраст: ${this._age}!`)
    }

    getUserAge(){
        return this._age;
    }
}

const ivan2 = new User('Ivan', 27);
console.log(ivan2.surname); // Getter
ivan2.age = 28; // Setter

ivan2.say();

