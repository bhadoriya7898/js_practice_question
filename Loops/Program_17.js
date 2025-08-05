// Write a program to find frequency of each digit in a given integer.

let arr=[1,5,4,6,5,6,6,4,8,6,4,]
frqn=6
count=0
console.log(arr.length);

for(i=0;i<=arr.length;i++)
{
    if (arr[i]==frqn) {
        count++;
    }
}
console.log(count);

