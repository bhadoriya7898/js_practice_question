// 3. Length of Each String
// Given a list of words, use map to create a new list containing the length of each word.
// Example:
// Input: ["apple", "banana", "cherry"]
// Output: [5, 6, 6]

arr=["apple", "banana", "cherry"]
newarr=arr.map((val)=>{
    len=val.length
    return len
})
console.log(newarr);
