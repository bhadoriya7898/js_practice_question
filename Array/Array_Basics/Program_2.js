// 2. Find the Second Largest Number
// Write a function to find the second-largest number in an array.
// Example:
// Input: [10, 20, 30, 40]
// Output: 30

arr=[20,10,30,40]
let temp
for(i=0;i<4;i++)
{
   for(j=0;j<4;j++)
   {
    if (arr[j]<arr[j+1]) {
        temp=arr[j]
        arr[j]=arr[j+1]
        arr[j+1]=temp
    }
   }
}
console.log(arr[1]);
