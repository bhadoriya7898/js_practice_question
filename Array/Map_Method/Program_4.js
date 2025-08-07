// 4. Convert Strings to Integers
// Given a list of strings representing numbers, use map to convert them to integers.
// Example:
// Input: ["1", "2", "3"]
// Output: [1, 2, 3]

arr=["1", "2", "3"]
newarr=arr.map((val)=>{
    return Number(val)
})
console.log(typeof(newarr[0]));
