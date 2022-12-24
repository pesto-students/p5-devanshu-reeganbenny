/*
* Write a function called hasDuplicate which accepts an array and
* returns true or false if that array contains a duplicate
*/

// Function to find if the array has duplicates
// retrun true - if array does not contain any duplicates
// returns false - if array does contain any duplicates
const hasDuplicate = function (arr){
    let setArray = new Set(arr);
    return setArray.size === arr.length;
}


console.log(hasDuplicate([1,2,3,5]));
console.log(hasDuplicate([1,1,5,5]));
console.log(hasDuplicate([]));