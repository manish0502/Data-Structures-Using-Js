/**
 
344. Reverse String

Write a function that reverses a string. The input string is given as an array of characters s.
You must do this by modifying the input array in-place with O(1) extra memory.
Example 1:

Input: s = ["h","e","l","l","o"]
Output: ["o","l","l","e","h"]
Example 2:

Input: s = ["H","a","n","n","a","h"]
Output: ["h","a","n","n","a","H"]

 */

var reverseString = function(s) {
    const stack = [...s]; // clone input into a stack

    for (let i = 0; i < s.length; i++) {
        s[i] = stack.pop(); 
    }
};
let s = ["h", "e", "l", "l", "o"];
reverseString(s);
console.log(s);  // Output: ['o', 'l', 'l', 'e', 'h']