/*
* Given the root of a binary tree, 
* return the level order traversal of its nodes' values. (i.e.,from left to right, level by level).
*/
const createTree = require("./tree.js");

var levelOrder = function(root) {
    if(!root) return [];
    let queue = [root];
    let traversal = [];
    while(queue.length){
        let level = [];
        let size = queue.length;
        for(let i =0; i < size; i++){
            let node = queue.shift();
            if(node.left)queue.push(node.left);
            if(node.right)queue.push(node.right);
            level.push(node.value);
        }
        traversal.push(level);
    }
    return traversal;
}
let arr = [3,9,20,null,null,15,7];
root = createTree(arr);
console.log(levelOrder(root));