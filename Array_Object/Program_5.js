// 5. Calculate the Total of a Property
// Write a function to calculate the sum of a specific property in an array of objects.
// Example:
// Input: [{ price: 10 }, { price: 20 }, { price: 30 }], Key: price
// Output: 60


let arr=[{ price: 10 }, { price: 20 }, { price: 30 }]
sum=0
arr.forEach(val => {
    sum=sum+val.price
});
console.log(sum);

