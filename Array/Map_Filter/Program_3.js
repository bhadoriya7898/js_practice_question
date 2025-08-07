// 3. Filter Words of Specific Length and Convert to Uppercase
// Given a list of words and a specific length, use filter to keep only words of that length, then convert each to uppercase.
// Example:
// Input: ["apple", "fig", "banana", "kiwi"], Length: 5
// Output: ["APPLE", "BANANA"]

arr=["apple", "fig", "banana", "kiwi"]
newarr=arr.filter((val)=>{if (val.length>=5) {return val}}).map((val)=>{ return val.toUpperCase()})
    console.log(newarr);
    