//Creating a function with iterables
const fib = function(n){
    let i = 0;
    let cur = 0, prev = 0;
    return{
        next(){     // next function for iterables
            if(i < n){
                [cur, prev] = [prev, prev+cur||1];
                i++;
                return{value: cur, done:false};
            }else{
                return{done:true};
            }
        },
    };
}

const fibanoci = fib(7); // passing the limit as parameter
console.log("The fibonacci series is:");
result = fibanoci.next();   
do{
    console.log(result.value); 
    result = fibanoci.next();  
}while(!result.done);