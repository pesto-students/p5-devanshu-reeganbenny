/*
* Given a linked list of N nodes. The task is to check if the linked list has a loop. Linkedlist can contain self loop.
*/
// Time complexity - O(n)
// Space complexity - O(n)
const LinkedList = require("./linkedList");

// Function to create a cycle in linked List;
LinkedList.prototype.createCycle = function(pos){
    let indexNode = null;
    if(pos < 1){
        indexNode = null;
    }
    let current = this.head;
    let index = 1;
    while(current.next != null){
        if(index === pos){
            indexNode = current;
        }
        index++;
        current = current.next;
    }
    // check if it has a self loop in last index
    if(index === pos) indexNode = current;
    current.next = indexNode;
}

//Function to check if linkedList has a cycle
LinkedList.prototype.hasCycle = function(){
    let setList = new Set();
    let i = 0;
    let current = this.head;
    let prev = null;
    if(current !== null){
        while(current != null){
            i++;
            prev = current;
            setList.add(current);
            if((setList.size !== i)) return true;
            current = current.next;
        }
    }
    return false;
}

let arrList = [1,2,3,4,5,6,7];
let pos = 4;

let list;
for(let i=0; i<arrList.length; i++){
    if(i === 0) list = new LinkedList(1);
    else{
        list.append(arrList[i]);
    }
}
// create a cycle in the linked list tail.next pointing to node at index = pos
list.createCycle(pos);
// console.log(list.printList()); // infinite loop
console.log(list.hasCycle());


/*
* Solution for leetcode 
*/

// var hasCycle = function(head) {
//     let setList = new Set();
//     let i = 0;
//     let current = head;
//     let prev = null;
//     if(current !== null){
//         while(current != null){
//             i++;
//             prev = current;
//             setList.add(current);
//             if((setList.size !== i)) return true;
            
//             current = current.next;
//         }
//     }
//     return false;
// };
