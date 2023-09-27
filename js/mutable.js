const box = document.querySelector('.box');


//                 ResizeObserver()
let observer = new MutationObserver((mutationReserve) => {
    console.log(mutationReserve);
});

observer.observe(box, {childList: true});
observer.disconnect();



function sum(a, b, ...other){
    let sum = a+b;
    if(other.length != 0){
        other.forEach((e) => {
            sum+=e;
        });
    }
    return sum;
}

console.log(sum(2, 3, 4, 5, 6));