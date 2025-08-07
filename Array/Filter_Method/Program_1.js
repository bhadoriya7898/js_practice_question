// 1. Filter Even Numbers
// Given a list of numbers, use filter to create a new list that contains only the even numbers.
// Example:
// Input: [1, 2, 3, 4, 5, 6]
// Output: [2, 4, 6]

arr=[1, 2, 3, 4, 5, 6]
newarr=arr.filter((val)=>{
    if (val%2==0) {
        return val
    }
})
console.log(newarr);
