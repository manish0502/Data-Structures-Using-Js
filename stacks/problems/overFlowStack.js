/**
 1. In pure JavaScript, arrays are dynamic — but conceptually in DSA, stacks are fixed size.
 2. When you push items onto a stack without any size limit check, it can eventually overflow — meaning:
   a.It runs out of space.
   b.The program can crash or throw an error (in low-level languages).
   c.In JavaScript (and many high-level languages), you may hit memory limits and get weird behaviors.

 */



class overFlowStack {

    constructor(maxSize){
        this.stack= [];
        this.maxSize =maxSize ;
    }

    push(ele){
       if(this.size()>=this.maxSize){
        throw new Error("Opps , Stack Overflow")
       }
       this.stack.push(ele)
    }

    pop(){
        if(this.size()==0){
            throw new Error("Oops , Stack underflow")
        }
    }

    size(){
        return this.stack.length;
    }
       
}

// setting up the size of stack to 3 element
let myStack = new  overFlowStack(3)
myStack.push(10);
myStack.push(20);
myStack.push(30);
console.log(myStack) //overFlowStack { stack: [ 10, 20, 30 ], maxSize: 3 }
myStack.push(40);// Error: Opps , Stack Overflow at overFlowStack.push 

/**
 * 
 * Here, after 3 pushes, the stack is full.
   Pushing 40 causes a Stack Overflow error.
 */