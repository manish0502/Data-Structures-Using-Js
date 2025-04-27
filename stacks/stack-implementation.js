/* 
  1. Stack : a collection of elements that follow a specific order for adding and removing items. 
  2. it works on  “Last In, First Out”
  3. In JavaScript, a stack is usually made using an array.  
  4. Remember, it’s all about adding to the top and taking from the top — just like a stack of plates!
**/

class Stack {
  constructor() {
    this.items = [];
  }

  // Add a number to the stack
  push(ele) {
    this.items.push(ele);
  }

  // Take the top number off the stack
  pop(ele) {
    if (this.size()) {
      return "Oops, the stack is empty!";
    }
    return this.items.pop();
  }

  // See what the top number is
  peek() {
    return this.items[this.items.length - 1];
  }

  // Check if the stack is empty
  isEmpty() {
    return this.items.length == 0;
  }

  // Find out how many items are in the stack
  size() {
    return this.items.length;
  }
}

// using stack

let myStack = new Stack();
myStack.push(10);
myStack.push(20);

console.log(myStack); // items: [ 10, 20 ]
console.log("Stack length", myStack.size()); //Stack length 2
console.log("Printing Top of stack", myStack.peek()); //Printing Top of stack 20

// return false if stack is not empty
console.log("isEmpty ===", myStack.isEmpty()); //isEmpty === false

myStack.pop();
console.log(myStack); //items: [ 10 ]
