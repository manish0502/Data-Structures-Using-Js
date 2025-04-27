// Q: Implement a simple Stack from scratch (without using Array.push() or Array.pop())

class simpleStack {

    constructor(){
        this.storage = {} // Using object instead of array
        this.count = 0;  // Top of the stack
    }

    push(ele){
       this.storage[this.count] =ele ;
       this.count ++ ;
    }

    pop(){
        if(this.count==0){
            return undefined
        }
        this.count-- ;
        const result = this.storage[this.count];
        delete this.storage[this.count]
        return result;
    }

    peek(){
        if(this.count==0){
            return undefined
        }
        return this.storage[this.count -1]
    }

    size(){
        return this.count
    }

    isEmpty(){
        return this.count==0
    }
}

//using stack
const stack = new simpleStack();
stack.push(10);
stack.push(20);
stack.push(30);

console.log(stack.peek());  // 30
console.log(stack.pop());   // 30
console.log(stack.size());  // 2

/**
 * Analysis
 * 
 1. Initial State:
   storage = {}
   count = 0
 

 2. 🔵 After push(10)
 storage = { 
  0: 10 
 }
count = 1


3. 🔵 After push(20)
 storage = { 
    0: 10, 
    1: 20 
 }
 count = 2


 4. After push(30)
 storage = { 
  0: 10, 
  1: 20, 
  2: 30 
}
count = 3



🟥 Now, peek()

Look at storage[count-1]
storage[2] = 30
Result: 30

🟥 Now, pop()

count-- (count becomes 2)
Return storage[2]
Delete storage[2]

storage = { 
  0: 10, 
  1: 20 
}
count = 2


 */