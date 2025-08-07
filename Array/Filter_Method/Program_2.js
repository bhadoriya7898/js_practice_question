// 2. Remove Empty Strings
// Given a list of strings, use filter to remove all empty strings.
// Example:
// Input: ["apple", "", "banana", "", "cherry"]
// Output: ["apple", "banana", "cherry"]

arr=["apple", "", "banana", "", "cherry"]

newarr=arr.filter((val)=>{
    if (val!="") {
        return val
     } 
})
console.log(newarr);

