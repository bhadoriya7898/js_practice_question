// 2. Merge Two Objects
// Write a function to merge two objects. If a key exists in both, the value from the second object should overwrite the first.
// Example:
// Input: { a: 1, b: 2 } and { b: 3, c: 4 }
// Output: { a: 1, b: 3, c: 4 }

const obj1={ a: 1, b: 2 }
const obj2 = { b: 3, c: 4 }

const obj4= Object.assign({},obj1,obj2) //object.assign.[] is a target object which will to the obj4...
const obj3={...obj1,...obj2} ///spread operator
console.log(obj3);
