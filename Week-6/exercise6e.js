/*
* Pair With Given Difference
* Return 1 if any such pair exists else return 0.
*/

// Time complexity - O(n) => n for loop 
// Space complexity - O(n)

function pairDiff(arr, B){
    let dummySet = new Set(arr);
    for(let i = 0; i<arr.length; i++){
        if(dummySet.has(arr[i]+B)) return 1;
    }
    return 0;
}

//test Cases
// console.log(pairDiff([5, 10, 3, 2, 50, 80],78));
// console.log(pairDiff([-10, 20] ,10));
console.log(pairDiff([-10, 20] ,30));