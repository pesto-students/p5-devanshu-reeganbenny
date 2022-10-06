/*
* Given a singly linked list of size N. 
* The task is to left-shift the linked list by k nodes,
* where k is a given positive integer smaller than or equal to length of the linked list.
*/

// Time Complexity = O(n)
// Space Complexity = O(1)


const LinkedList = require("./linkedList.js");


LinkedList.prototype.rotate = function(leftShift){
    if(leftShift > this.size || leftShift < 0)console.log("Please enter a valid left shift indicator");
    else{
        let current = this.head;
        while(current.next !== null){
            current = current.next;
        }
        let tail = current;
        current = this.head;
        while(leftShift > 0){
            tail.next = current;
            tail = current;
            this.head = current.next;
            tail.next = null;
            current = this.head;
            leftShift--;
        }
    }
}

let arrList = [1,2,3,4,5,6,7];
let rotate = 3;

let list;
for(let i=0; i<arrList.length; i++){
    if(i === 0) list = new LinkedList(1);
    else{
        list.append(arrList[i]);
    }
}

console.log("Initial List");
list.printList();
list.rotate(rotate);
console.log("Rotate list to left by "+rotate+" positions");
list.printList();
