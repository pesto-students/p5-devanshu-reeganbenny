/*
* Given the root of a binary tree, return its maximum depth.
*/
//Time complexity = O(n)
//Space complexity = O(n)
const createTree = require("./tree.js");


var maxDepth = function(root) {
    let queue = [];
    let count = 1;
    if(!root) return 0;
    queue.push(root);
    while(queue.length !== 0){
        let child = [];
        for(let q of queue){
            if(q.left)child.push(q.left);
            if(q.right)child.push(q.right);
        }
        if(child.length)count++;
        queue = child;
    }
    return count;
};

let arr = [1,null,2];
root = createTree(arr);
console.log(maxDepth(root));