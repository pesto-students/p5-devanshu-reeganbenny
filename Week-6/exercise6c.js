/*
* Given an array of size N containing only 0s, 1s, and 2s; sort the array in ascending order.
*/

function sort(arr){
    start = 0
    end= arr.length-1;
    for (i = 0; i <= end ; i++){
        //swap 0's to start of the array
        if(arr[i] === 0){
            [arr[i], arr[start]] = [arr[start], arr[i]];
            start++;
        }
        //swap 1's to end of the array
        if(arr[i] === 2){
            [arr[i], arr[end]] = [arr[end], arr[i]];
            end--;
        }
    }
    return arr;
}

console.log(sort([0,2,1,0,2,1]));
console.log(sort([1,1,1,0,0,0,2,2,2]));
// console.log(sort([]));
// console.log(sort([0,1,0,1]));
// console.log(sort([2,2,1,1]));
// console.log(sort([2,0,2,0]));