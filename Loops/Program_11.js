// Write a program to find first and last digit of a number.

let num=569823

console.log("Last Digit : ",num%10);
while (num>=10) {
    num=Math.floor(num/10);
}
console.log("First Digit : ",num);

