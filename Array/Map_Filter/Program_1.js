// 1. Filter Even Numbers and Square Them
// Given a list of numbers, first filter out the even numbers, then square each remaining number.
// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [4, 16, 36]

arr=[1, 2, 3, 4, 5, 6]
newarr=arr.filter((value)=>{
    if(value%2==0)
    {
        return value;
    }
}).map((value)=>{
    return value*value
})
console.log(newarr);
