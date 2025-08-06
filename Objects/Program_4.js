// 4. Filter Object Keys
// Write a function to create a new object that only includes specific keys from the original object.
// Example:
// Input: { a: 1, b: 2, c: 3 }, Keys: ["a", "c"]
// Output: { a: 1, c: 3 }

const obj={ a: 1, b: 2, c: 3 }

obj1=Object.entries(obj)

const filtered=obj1.filter(([key,value])=>{
    return value%2!=0;
})

console.log(filtered);
// console.log(obj1[0]);

