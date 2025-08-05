// Write a program to print all Strong numbers between 1 to n.

function factorial(num) {
    let fact = 1;
    for (let i = 1; i <= num; i++) {
        fact =fact*i;
    }
    return fact;
}
let n = 1000;
printStrongNumbers(n);

function printStrongNumbers(n) {
    console.log("Strong numbers between 1 and", n, "are:");
    
    for (let i = 1; i <= n; i++) {
        let temp = i;
        let sum = 0;

        while (temp !== 0) {
            let digit = temp % 10;
            sum =sum+factorial(digit);
            temp = Math.floor(temp / 10);
        }

        if (sum === i) {
            console.log(i);
        }
    }
}

