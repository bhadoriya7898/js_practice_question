// 1. Reverse an Array
// Write a function to reverse an array without using built-in methods.
// Example:
// Input: [1, 2, 3, 4, 5]
// Output: [5, 4, 3, 2, 1]

let arr=[1,2,3,4,5]
last=4
for(i=0;i<5/2;i++)
{
    temp=arr[i]
    arr[i]=arr[last]
    arr[last]=temp
    last--
}
console.log(arr);
