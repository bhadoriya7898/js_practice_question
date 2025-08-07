// 1. Square Each Number
// Given a list of numbers, use map to create a new list containing the squares of each number.
// Example:
// Input: [1, 2, 3, 4, 5]
// Output: [1, 4, 9, 16, 25]

arr=[1, 2, 3, 4, 5]
newarr=arr.map((value)=>{return value*value})
console.log(newarr);
