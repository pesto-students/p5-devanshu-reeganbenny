/*
* Given the root of a binary tree, determine if it is a valid binary search tree (BST).
*/

const createTree = require("./tree.js");

var isValidBST = function(root) {
    if (!root) return false;
    
    const  isValid  = isValidBSTSubTree(root.left, true, -Infinity, root.value) && isValidBSTSubTree(root.right, true, root.value, Infinity);
 
    return isValid;
};

const isValidBSTSubTree = (root, isValid, lower, upper) =>{
    if (!isValid) return isValid;
    if (!root) return true;
    if (root.value >= upper || root.value <= lower) return false;
    
   if (root.left) {
       isValid = isValidBSTSubTree(root.left, isValid, lower, root.value);
   }
    
    if (isValid && root.right) {
       isValid = isValidBSTSubTree(root.right, isValid, root.value, upper);
    }
    
    return isValid;
}

let arr = [2,1,3];
root = createTree(arr);
console.log(isValidBST(root));