/*
* Next Greater ELement:- Given an array arr{} of size N having distinct elements,
* the task is to find the nextgreater element for each element of the array in order of their appearance in the array.
*/

// Time complexity - O(n^2)
// Space Complexity - O(n)
const nextGreaterElement = function(arr){
    let resultArray = new Array(arr.length);
    for(let i = 0; i < arr.length; i++){
        for(let j = i+1 ; j < arr.length; j++){
            if(arr[i] < arr[j]){
                resultArray[i] = arr[j];
                break;
            }
        }
        resultArray[i] === undefined ? resultArray[i] = -1 : resultArray[i] = resultArray[i];
    }
    return resultArray;
}

let arr = [6,8,0,1,3];
console.log(nextGreaterElement(arr));