class Node{
    constructor(element){
        this.value = element;
        this.next = null;
    }
}

class LinkedList{
    constructor(element){
        this.head = new Node(element);
        this.size = 1;
    }

    append(element){
        let node = new Node(element);
        if(this.head === null) this.head = node;
        else{
            let current = this.head;
            while(current.next != null){
                current = current .next;
            }
            current.next = node;
        }
        this.size++;
    }

    printList(){
        let current = this.head;
        let array = ["head"];
        while(current != null){
            array.push(current.value);
            current = current.next;
        }
        array.push("end");
        console.log(array.join(" --> "));
    }

    length(){
        return this.size;
    }
}

module.exports = LinkedList;