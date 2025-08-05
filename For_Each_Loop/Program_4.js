// 4. Write a program that counts the even and odd numbers in an array using forEach().
// let numbers = [1, 2, 3, 4, 5, 6];
// Output:
//   Even Numbers: 3
//   Odd Numbers: 3
evcount=0
oddcount=0
let numbers = [1, 2, 3, 4, 5, 6];
numbers.forEach((i)=>{
    if (i%2==0) {
        evcount++
    }
    else
    {
        oddcount++
    }
})
console.log("Even Numbers: ",evcount,"Odd Numbers: ",oddcount);
