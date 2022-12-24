/*
* Next Greater ELement:- Given an array arr{} of size N having distinct elements,
* the task is to find the nextgreater element for each element of the array in order of their appearance in the array.
*/

// Time Complexity - O(n)
// Space Complexity - O(n)
const Stack = require("./stack");

const nextGreaterElement = function(arr){
    let resultArr = new Array(arr.length);
    let stackIndex = new Stack();
    if(arr.length > 0){
        stackIndex.push(0);
        for(let i = 1; i< arr.length; i++){
            if(arr[stackIndex.peek()] < arr[i]){
                while(stackIndex.peek() !== undefined && arr[stackIndex.peek()] < arr[i]){
                    let index = stackIndex.pop();
                    resultArr[index] = arr[i];
                }
            }
            stackIndex.push(i);
        }
        while(stackIndex.peek() !== undefined){
            let index = stackIndex.pop();
            resultArr[index] = -1;
        }

    }
    return resultArr;
}

let arr = [6,8,0,1,3];
console.log(nextGreaterElement(arr));
// Time complexity - O(n^2)
// Space Complexity - O(n)
// const nextGreaterElement = function(arr){
//     let resultArray = new Array(arr.length);
//     for(let i = 0; i < arr.length; i++){
//         for(let j = i+1 ; j < arr.length; j++){
//             if(arr[i] < arr[j]){
//                 resultArray[i] = arr[j];
//                 break;
//             }
//         }
//         resultArray[i] === undefined ? resultArray[i] = -1 : resultArray[i] = resultArray[i];
//     }
//     return resultArray;
// }