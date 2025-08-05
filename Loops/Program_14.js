// Write a program to calculate product of digits of a number.

let num=555
let digit=1
while(num>=10)
{
    digit=digit*Math.floor(num%10)
    num=Math.floor(num/10)
}
console.log(digit*num);
