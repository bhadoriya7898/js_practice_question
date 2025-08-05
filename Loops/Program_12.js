// Write a program to find sum of first and last digit of a number.
let num=835
let digit
digit=Math.floor(num%10)
while(num>=10)
{
    num=Math.floor(num/10)
}
console.log(digit+num);
