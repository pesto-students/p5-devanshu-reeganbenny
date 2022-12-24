class Stack{
    constructor(){
        this.st = [];
    }

    push(element){
        this.st.push(element);
    }

    pop(){
        return this.st.pop();
    }

    peek(){
        return this.st[this.st.length-1];
    }

    printList(){
        for(let el of this.st){
            console.log(el);
        }
    }
}

module.exports = Stack;