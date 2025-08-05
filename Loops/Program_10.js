// Write a program to count number of digits in a number.

let num=100
let count=0,temp;
while (num!==0) {
    num=Math.floor(num/10);
    count++;
}
console.log(count);
