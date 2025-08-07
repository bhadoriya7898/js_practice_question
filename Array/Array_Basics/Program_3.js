// 3. Remove Duplicates
// Write a function to remove duplicate elements from an array.
// Example:
// Input: [1, 2, 2, 3, 4, 4, 5]
// Output: [1, 2, 3, 4, 5]

let arr=[5,5,4,3,3]
unique=[]
let k = 0;
for(i=0;i<5;i++)
{
    let isduplicate = false
    for(j=0;j<5;j++)
    {
        if (arr[i]===unique[j]) {
            isduplicate=true
            break;
        }
    }
    if(!isduplicate)
    {
        unique[k]=arr[i]
        k++;
    }
}
console.log(unique);



