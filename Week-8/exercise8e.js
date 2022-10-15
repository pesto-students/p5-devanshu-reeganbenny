/*
* Find the Town Judge
*/

var findJudge = function(n, trust) {
    let townMap = new Map();
    for(let i=1; i<=n; i++)townMap.set(i,0); 
    for(let el of trust)townMap.delete(el[0]);
    // every one trust someone
    if(townMap.size === 0)return -1; 
    let judge = townMap.keys().next().value;
    let count = 0;
    for(let el of trust){
        // finding no. persons trust judge 
        if(el[1] == judge)count++; 
    }
    if(count !== n-1)return -1;
    return judge;
    
};

console.log(findJudge(2,[[1,2]]));