/*
* Implement a Queue using 2 stacks s1 and s2 . A Query Q is of 2 Types 
* (i) 1 x (a queryof this type means pushing 'x' into the queue) 
* (ii) 2 (a query of this type means to popelement from queue and print the poped element)
*/

//Time Complexity = O(n)
//Space Complexity = O(n)

const Stack = require("./stack.js");

// adding element to stack
Stack.prototype.enqueue = function(element){
    this.push(element);
}

//removing element from stack as queue
Stack.prototype.dequeue = function(stack2){
    let val = this.pop();
    while(val){
        stack2.push(val);
        val = this.pop();
    }
    val = stack2.pop();
    if(val !== undefined){
        console.log(val);
        val = stack2.pop();
        while(val){
            this.push(val);
            val = stack2.pop();
        }
    }else{
        console.log('-1');
    }

}

function twoStackQueue(arr){    
    let stack1 = new Stack();
    let stack2 = new Stack();
    let index;
    for(let i = 0; i< arr.length;i++){
        if(arr[i] == 1)stack1.enqueue(arr[++i]);
        else if(arr[i] == 2)stack1.dequeue(stack2);
    }
}



const arr = [1,2,2,2,1,4,2,2];
let n = 4;
twoStackQueue(arr);

