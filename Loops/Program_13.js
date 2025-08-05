// Write a program to calculate sum of digits of a number.

let num=5555
let digit=0
while(num>=10)
{
    digit=digit+Math.floor(num%10)
    num=Math.floor(num/10)
}
console.log(digit+num);