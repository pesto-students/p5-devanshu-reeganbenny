/*
* Find the contiguous subarray within an array, A of length N which has the largest sum.
*/

//time complexity of function subArrayMaxSum - o(n)
// space complexity of function subArrayMaxSum  - o(1)

function subArrayMaxSum(arr){
    let sum = 0,finalSum = -1;
    for (let el of arr){
        sum += el;
        if(sum <= 0)sum = 0;
        if(finalSum < sum)finalSum = sum;
    }
    return finalSum;
}

// test cases

console.log(subArrayMaxSum([1, 2, 3, 4]));
// console.log(subArrayMaxSum([1, 2, 3, 4, -10]));
// console.log(subArrayMaxSum([-2, 1, -3, 4, -1, 2, 1, -5, 4]));


