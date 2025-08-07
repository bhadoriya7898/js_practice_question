// 1. Sort an Array of Objects
// Write a function to sort an array of objects by a specific key.
// Example:
// Input: [{ name: "John", age: 25 }, { name: "Alice", age: 22 }], Key: age
// Output: [{ name: "Alice", age: 22 }, { name: "John", age: 25 }]

arr=[{ name: "John", age: 25 }, { name: "Alice", age: 22 },{age:20}]

arr.sort((a,b)=>{a.age-b.age})
console.log(arr);


