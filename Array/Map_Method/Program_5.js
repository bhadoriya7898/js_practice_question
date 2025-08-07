// 5. Uppercase Each Word
// Given a list of words, use map to create a new list where each word is in uppercase.
// Example:
// Input: ["hello", "world"]
// Output: ["HELLO", "WORLD"]

arr=["hello", "world"]
newarr=arr.map((val)=>{
    return val.toUpperCase()
})
console.log(newarr);
