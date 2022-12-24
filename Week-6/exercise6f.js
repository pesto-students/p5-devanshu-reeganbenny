/*
* Given an array S of n integers, find three integers in S such that the sum is closest to a given number, target.
* Return the sum of the three integers. Assume that there will only be one solution
*/

// Time complexity - O(n^2)
//Space complexity - O(1)

function closestSum(arr, target){
    let finalSum = arr[0]+ arr[1] + arr[2];
    let finalDiff = Number.MAX_SAFE_INTEGER, currentSum;
    if(arr.length === 3) return finalSum ;

    arr.sort( (a,b) => a - b );
    for(let i=0; i<arr.length; i++){
        let start = i+1;
        let end = arr.length-1;
        currentSum = 0;
        while(end-start>0){
            currentSum = arr[i] + arr[start] + arr[end];
            if(currentSum === target) return currentSum;
            currentDiff = Math.abs(target-currentSum);
            
            if(target<currentSum){
                if(currentDiff<finalDiff){
                    finalSum = currentSum;
                    finalDiff = currentDiff;
                }
                end--;
            }
            
            if( target>currentSum){
                if(currentDiff<finalDiff){
                    finalSum = currentSum;
                    finalDiff = currentDiff;
                }
                start++;
            }
        }
    }
    return finalSum;
}

//Test cases

// console.log(closestSum([1,2,4,5],3));    // output = 7
console.log(closestSum([-1, 2, 1, -4],1));    // output = 2
// console.log(closestSum([1,2,4],3));  // output = 7
// console.log(closestSum([-1, 2, 1, -4],1));      // output = 2
// console.log(closestSum([-1, -4, 2, 1],1));   // output = 2







// Time complexity - O(n^3)
//Space complexity - O(1)

// function closestSum(arr, target){

//     let finalSum, dummySum;
//     // initialize with first 3 integers in the array;
//     finalSum = arr[0]+arr[1]+arr[2];
//     for(let i=0; i<arr.length; i++){
//         dummySum = 0;
//         for(j = i+1; j<arr.length;j++){
//             for(k = j+1; k<arr.length; k++){
//                 dummySum = arr[i] + arr[j] + arr[k];
//                 if((target-dummySum)<(target-finalSum)){
//                     finalSum = dummySum;
//                 }
//             }
//         }
//     }
//     return finalSum;
// }