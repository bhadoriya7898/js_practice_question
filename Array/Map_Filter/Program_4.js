// 4. Filter Odd Numbers and Convert to Their Square Roots
// Given a list of numbers, filter out odd numbers and then calculate the square root of each remaining number.
// Example:
// Input: [1, 4, 9, 16, 25]
// Output: [2.0, 4.0]

arr=[1, 4, 9, 16, 25]
newarr=arr.filter((value)=>{
    if(value%2!==0)
    {
        return value;
    }
}).map((value)=>{
    return Math.sqrt(value)
})
console.log(newarr);