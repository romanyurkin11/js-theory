'use strict';

// Anonymous self-calling function;


const number = 1;
( // Function expression
    function(){
        let number = 2;
        console.log(number);
        console.log(number+3);
    }()
)

console.log(number);


const user = (
    function(){
        const private = function(){
            console.log("I'm private function");
        }
        return {
            sayHello: private
        }
    }()
)

user.sayHello();