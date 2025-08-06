// 3. Object to Array Conversion
// Write a function to convert an object into an array of [key, value] pairs.
// Example:
// Input: { a: 1, b: 2, c: 3 }
// Output: [["a", 1], ["b", 2], ["c", 3]]

const obj1={ a: 1, b: 2, c: 3 }

obj2=Object.entries(obj1)
console.log(obj2);
