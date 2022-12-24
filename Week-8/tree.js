// Implementation of tree

class TreeNode{
    constructor(value, left = null, right = null){
        this.value = value;
        this.left = left;
        this.right = right;
    }
}

function createTree(arr){
    let root = null;
    if(arr.length === 0 ) return root;
    root = new TreeNode(arr[0]);
    let current = root, i = 0;
    let queue = [];
    queue.push(root);
    while(queue.length !== 0){
        current = queue.shift();
        if(arr[2*i+1] !== undefined){
            if(arr[2*i+1] !== null){
                current.left = new TreeNode(arr[2*i+1]);
                queue.push(current.left);
            }else{
                current.left = null;
            }
        }
        if(arr[2*i+2] !== undefined){
            if(arr[2*i+2] !== null){
                current.right = new TreeNode(arr[2*i+2]);
                queue.push(current.right);
            }else{
                current.right = null;
            }
        }
        i++;
    }
    return root;
}

module.exports = createTree;