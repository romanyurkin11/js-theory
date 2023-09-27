'use strict';

function myModule(){
    this.sayHello = function(){
        console.log('Hello World!');
    }

    this.sayBye = function(){
        console.log('Goodbye!');
    }
}

module.exports = myModule