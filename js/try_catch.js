'use strict';

try{
    console.log('success');
}catch(e){
    console.log(`Error: ${e}`);
}


// Example of handling errors
try{
    console.log('First');
    console.log(a);
    console.log('Normal');
}catch(error){
    console.log(error);
    console.log(error.message);
    console.log(error.stack);
}finally{ 
    console.log(`Final text`);
}

if(!document.querySelector('a.newLink')){
    throw new Error(`В данных нет уникальных идентификатора`);
}

const err = new SyntaxError('My first error!');
console.log(err.name + '\n',
    err.message+ '\n',
    err.stack)

console.log('Still normal');