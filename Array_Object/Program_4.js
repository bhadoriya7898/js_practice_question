// 4. Filter Objects by Key Value
// Write a function to filter objects in an array where a specific key matches a given value.
// Example:
// Input: [{ id: 1, active: true }, { id: 2, active: false }, { id: 3, active: true }], Key: active=true
// Output: [{ id: 1, active: true }, { id: 3, active: true }]

arr=[{ id: 1, active: true }, { id: 2, active: false }, { id: 3, active: true }]

newarr=arr.filter((value)=>{return value.active===true})
console.log(newarr);
