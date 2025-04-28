/**
 Problem Statement (LeetCode 20 - Valid Parentheses)
 Given a string s containing just the characters '(', ')', '{', '}', '[' and ']',
 determine if the input string is valid.

A string is valid if:
  -  Open brackets must be closed by the same type of brackets.
  -  Open brackets must be closed in the correct order.

  Input     |  Output      | Explanation
s = "()"    | true         | Correctly closed.
s = "()[]{}"| true         | Multiple types, all matched.
s = "(]"    | false        | Wrong closing bracket.
s = "([)]"  | false        | Wrong order.
s = "{[]}"  | true         | Nested brackets, correct order.

 */

/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function (s) {
    let stack = [];
    if (s.length == 0) return false;

    for (let char of s) {
        if (char === "(") stack.push(")")
        else if (char === "[") stack.push("]")
        else if (char === "{") stack.push("}")
        
        else{
           let prevStack = stack.pop();
           if (prevStack !== char) return false
        }
    }

function isEmpty(){
    return stack.length == 0
}
return isEmpty();

};

/**

test 1 
 "()" - true

test 2 
"()[]{}" -true

test 3
"(]" - false

test 4
"([])" - true

 */