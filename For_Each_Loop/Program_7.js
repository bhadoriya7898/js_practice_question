// 7. Write a program that calculates the sum of all elements in an array using forEach().
// let numbers = [10, 20, 30, 40];
// Output:
//   Sum: 100

  let numbers = [10, 20, 30, 40];
  sum=0;
  numbers.forEach((value)=>{
    sum=sum+value;
  })
  console.log(sum);
  