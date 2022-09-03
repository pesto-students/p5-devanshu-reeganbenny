// function createStack() {
//   return {
//     items:[],
//     push(item) {
//       this.items.push(item);
//     },
//     pop() {
//       return this.items.pop();
//     }
//   };
// }
// const stack = createStack();
// // stack.push(10);
// // stack.push(5);
// // stack.pop();// => 5
// // stack.items;// => [10]
// // stack.items= [10,100,1000];// Encapsulation broken!

// To make items private first we need to move items outside the scope of the return block
function createStack() {
  let items = [];     // initialize items[] outside the scope of the return block.
  return {
        push(item) {
          items.push(item); 
        },
        pop() {
          return items.pop();
        }
      };
}
const stack = createStack();
stack.push(10);
stack.push(5);
stack.pop();// => 5
console.log("Value of stack.items is " + stack.items);// => undefined

