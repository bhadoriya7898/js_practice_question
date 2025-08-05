// Write a program to check whether a number is palindrome or not.

let reverse=0
let num=1331
let check=num
while (num!==0) {
    reverse=reverse*10+num%10
    num=Math.floor(num/10)
}
console.log(reverse);

if (check==reverse) {
    console.log("Pallindrome Number");
    
} else {
    console.log("Not Pallindrome Number");
}