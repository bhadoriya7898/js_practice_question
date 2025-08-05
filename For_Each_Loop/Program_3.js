// 3. Modify each element in the given array to be twice its original value using forEach().
// let numbers = [2, 4, 6, 8];
// Output:
//   [4, 8, 12, 16]

let numbers = [2, 4, 6, 8];

numbers.forEach((value,i,array)=>{
    array[i]=value*2;
})
console.log(numbers);


