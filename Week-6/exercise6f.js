/*
* Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.
* Return the sum of the three integers. Assume that there will only be one solution
*/

// Time complexity - O(n^3)
//Space complexity - O(1)

function closestSum(arr, target){

    let finalSum, dummySum;
    // initialize with first 3 integers in the array;
    finalSum = arr[0]+arr[1]+arr[2];
    for(let i=0; i<arr.length; i++){
        dummySum = 0;
        for(j = i+1; j<arr.length;j++){
            for(k = j+1; k<arr.length; k++){
                dummySum = arr[i] + arr[j] + arr[k];
                if((target-dummySum)<(target-finalSum)){
                    finalSum = dummySum;
                }
            }
        }
    }
    return finalSum;
}

//Test cases

console.log(closestSum([1,2,4,5],3));
// console.log(closestSum([1,2,4],3));
// console.log(closestSum([-1, 2, 1, -4],1));
// console.log(closestSum([-1, -4, 2, 1],1));
