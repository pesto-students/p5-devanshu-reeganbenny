/*
*  Best time to buy and sell stock
*/

// Time complexity - O(n)
// Space complexity - O(1)

function findProfit(arr){
    let lowPrice = 105, highPrice = -1;
    let lowIndex =-1, highIndex= -1;
    for(let i = 0; i < arr.length; i++) {
        if(arr[i] < lowPrice)[lowPrice, lowIndex, highPrice] = [arr[i], i, -1];
        if(arr[i] > highPrice)[highPrice, highIndex] = [arr[i], i];
    }
    // check whether highPrice occur after lowPrice
    if(lowIndex< highIndex)return highPrice - lowPrice;
    else return 0;
}

//Test cases
console.log(findProfit([7,1,5,3,6,4]));
console.log(findProfit([7,6,4,3,1]));