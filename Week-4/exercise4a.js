/*
* Exercise4.1: Implement a function namedgetNumberwhich generatesa random number. 
* If randomNumberis divisible by 5 it will reject the promise else it will resolve the promise.
* Let’s also keep thepromise resolution/rejection time as a variable
*/ 


function getNumber(){
    return Math.floor(Math.random()*1000);  // returns a random number between 0 - 1000
}

// Creating a Promise polyfill function
let MyPromise = function(executor){
    let onResolve;      // Store the callback function
    let fulfilled = false;  // Whether the promise was fulfilled
    let result = undefined;

    this.then = function(callback){ 
        onResolve = callback;
        if(fulfilled){
            onResolve(result);
        }
        return this;
    };

    this.catch = function(callback){
        onResolve = callback;
        if(!fulfilled){
            onResolve(result);
        }
        return this;
     };

    function resolve(value){
        fulfilled = true;
        result = value;
    };

    function reject(err){
        fulfilled = false;
        result = err;
    };

    executor(resolve, reject);

}

let numCheck = new MyPromise((resolve, reject) => {
    let randomNumber = getNumber();
    if(!(randomNumber%5 === 0)){
        resolve(randomNumber);
    }else{
        reject(randomNumber);
    }
});

numCheck.then((num, state) =>{
    console.log(`Message from then()=> The number:${num} is not divisible by 5`);
}).catch((err) =>{
    console.log(`Message from catch()=> The number:${err} is divisible by 5`);
});

// Using Promise
// let numCheck = new Promise((resolve, reject) => {
//     let randomNumber = getNumber();
//     if(!(randomNumber%5 === 0)){
//         resolve(randomNumber);
//     }else{
//         reject(randomNumber);
//     }
// });

// numCheck.then((num, state) =>{
//     console.log(`This is in then ${num} ${state}`);
// }).catch((err) =>{
//     console.log(`Failed: ${err}`);
// });