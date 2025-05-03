/**
155. Min Stack : Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.
   Level : Medium

Implement the MinStack class:

    MinStack() initializes the stack object.
    void push(int val) pushes the element val onto the stack.
    void pop() removes the element on the top of the stack.
    int top() gets the top element of the stack.
    int getMin() retrieves the minimum element in the stack.
    You must implement a solution with O(1) time complexity for each function.


Explanation :
   
  ❌ Solution 1 :  Naive Approach:
  We perform the following operations:
    let say i am having a stack []

   push - 12 
   push - 15
   push - 10

   Stack will be [12,15,10]
   Now i wanted to get the min of it - 10

   pop - 10 , stack will be [12,15]
   top - 15
   minEle - throughout the stack , the min is 12
   Possible Sol : to get the min array , scanning through the array but it will create the complexity of O(n) - Not a great way
  



  ✅ Solution 2: Store Element Along with Its Minimum : We can store them in a pair inside the stack (<ele_to_push>,<min_of_ele>)

   1st pair - (12,12) - [(12,12)]
   2nd pair - (15,12) - [(12,12),(15,12)] - i compared next element which is 15 with min of 1st pair which is 12 so my min i still 12
   3rd pair - (10,10) - [(12,12),(15,12),(10,10)] - i compared next element which is 10 with min of 2nd pair which is 12 so my will be changes to 10

   now if i have to find min of it - i will to the top and find the 2nd element of it - 10


 ✅ Solution 3 : Use Two Stacks
    stack[] → stores all values
    minStack[] → stores the current minimum at each step
    Operations:

    push : 5  => Stack [5] ,  minStack [5]
    push :10 => 
        now compare the the current element with the top of minStack
        if 5>10 - no so min is still 5
        Stack [5 ,10] ,  minStack [5 ,5]
    push :2 => 
        now compare the the current element with the top of minStack
        if 5>2 - yes so min is  2
        Stack [5 ,10 ,2] ,  minStack [5 ,5 ,2]

    so min will be top of MinStack , i.e - 2


  POP =>  Stack [5 ,10 ] ,  minStack [5 ,5 ]
  so min will be top of MinStack , i.e - 5



 */
  class MinStack {

    constructor(){
        this.stack = [];
        this.minStack = [];
    }

    push(val){
        if(this.stack.length==0){
            this.stack.push(val)
            this.minStack.push(val)
        }
        else {
            this.stack.push(val);
            let topOfminStack = this.minStack[this.minStack.length-1]
            this.minStack.push(Math.min(topOfminStack,val))
        }
    }

    pop(){
        if(this.stack.length ==0) return null
        this.stack.pop();
        this.minStack.pop();
    }

    top(){
        return this.stack[this.stack.length-1]
    }

    getMin(){
        return this.minStack[this.minStack.length-1]
    }
}

const minStack = new MinStack();
minStack.push(5);   // stack = [5], minStack = [5]
minStack.push(3);   // stack = [5,3], minStack = [5,3]
minStack.push(7);   // stack = [5,3,7], minStack = [5,3,3]
console.log(minStack.getMin()); // ➞ 3
minStack.pop();     // stack = [5,3], minStack = [5,3]
console.log(minStack.top());    // ➞ 3
console.log(minStack.getMin()); // ➞ 3


/**
 * | Operation  | Time | Space            |
| ---------- | ---- | ------------------- |
| `push()`   | O(1) | O(1) extra per push |
| `pop()`    | O(1) | -                   |
| `top()`    | O(1) | -                   |
| `getMin()` | O(1) | -                   |

 */