
// 5. Find Missing Numbers in a Range
// Given an array of unique numbers within a range, find all missing numbers.
// Example:
// Input: [1, 3, 4, 7], Range: 1-7
// Output: [2, 5, 6]

let arr=[1,5,4,4,9,8]


for(i=1;i<=10;i++)
{ 
    let flag=true;
    for(j=0;j<arr.length;j++)
    {
       
        if (i===arr[j]) {
            flag=false;
            break;
        }
    }
    if (flag) {
        console.log(i);
    }
}
