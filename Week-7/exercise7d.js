/*
* Given an expression string x. Examine whether the pairs and the orders of“{“,”}”,”(“,”)”,”[“,”]” are correct in exp.
*/
// Time complexity - O(n)
// Space complexity - O(n)
 
function isValid(s){
    let arr = [];
    let j = 0;
    for(let i = 0; i < s.length; i++){
        if(s[i] == '{'||s[i] == '('||s[i] == '[') arr.push(s[i]);
        else{
            if(s[i] == '}'){
                if(arr.pop() !== '{') return false;
            }
            if(s[i] == ']'){
                if(arr.pop() !== '[') return false;
            }
            if(s[i] == ')'){
                if(arr.pop() !== '(') return false;
            }
        }
    }
    return arr.length === 0?true:false;
}

let par = "{([])}";
console.log(isValid(par));