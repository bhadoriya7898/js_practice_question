// if (a>b) {
//     console.log(a,"A is greater than b");
    
// } else {
//     console.log(b,"B is greater than a");
// }
// without using third variable
// let a=5;
// let b=3;
// a=a+b;
// b=a-b;
// a=a-b;
// console.log(a,b);
// //Using of third variable
// c=a;
// a=b;
// b=c;
// console.log(a,b);

// 1. Write a program to check if a number is positive, negative, or zero.

// let num = 0;
// if (num>0) {
//     console.log("Number is Positive");
// }
// else if(num<0)
// {
//     console.log("Number is Negative");
    
// }
// else{
//     console.log("Number is Zero");
    
// }

// 2.Let us write our first program based on conditions. Write a program to input user age and check if he is eligible to vote in India or not. A person in India is eligible to vote if he is 18+.

// let personAge=  prompt("Enter Your Age");

// if (personAge>18) {
//     console.log("Eligible For Voting");
// }
// else{
//     onsole.log("Not Eligible For Voting");
// }

// 3. Write a program to find the largest of three numbers.

// let num1=400;
// let num2=600;
// let num3=300;

// if (num1>num2) {
//     if (num1>num3) {
//         console.log("num1 is greater than all");
//     }
// } else if(num2>num3) {
//     console.log("num2 is greater than all");
// }
// else{
//     console.log("num3 is greater than all");
// }

// 4. Write a program to check if a number is even or odd.

// let num=25;

// if (num%2==0) {
//     console.log("Number is Even");
    
// } else {
//     console.log("Number is Odd");
    
// }

// 5. Write a program to check if a year is a leap year.

// let year =2022;

// if (year % 400==0) {
//     console.log("Leap Year");
// } else {
//     console.log(" Not a Leap Year");
// }

// 6. Write a program to check if a number is divisible by both 3 and 5.

// let num = 30;

// if ((num%3==0)&&(num%5==0)) {
//     console.log("Yes It is Divisible by 3 and 5");
    
// } else {
//     console.log("No It is not Divisible by 3 and 5");
// }

// 7. Write a program to check if a number is a palindrome


// let arr=[1,2,1];

// if (arr[0]==arr[2]) {
//     console.log("Number is Pallindrome");
    
// } else {
//      console.log("Number is not Pallindrome");
// }

// 8. Write a program that checks whether a character is a vowel or consonant.

// let str="a";

// if (str =="a"||str =="e"||str =="i"||str =="o"||str =="u") {
//     console.log("Vowel");
    
// } else {
//     console.log("Consonant");
    
// }

// 9. Write a program that checks whether a number is prime.


// let num = 17;

// if (num%2==0||num%3==0||num%5==0) {
//     console.log("prime number");
    
// } else {
//     console.log("not a prime");
    
// }

// 10. Write a program that finds the smallest of three numbers.

// let num1=400;
// let num2=600;
// let num3=300;

// if (num1<num2) {
//     if (num1<num3) {
//         console.log("num1 is smaller than all");
//     }
//     else
//     {
//         console.log("num3 is smaller than all");
//     }
// } else if(num2<num3) {
//     console.log("num2 is smaller than all");
// }

// 11. Write a program that assigns a grade based on marks:
// A: 90-100
// B: 70-89
// C: 50-69
// D: 40-49
// F: Below 40

// let num =39;

// if (num<=100 && num>=90) {
//     console.log(" A : Grade");
// }
// else if(num<=89 && num >=70)
// {
//     console.log("B : Grade");
// }
// else if(num<=69 && num >=50)
// {
//     console.log("C : Grade");
// }
// else if(num<=49 && num >=40)
// {
//     console.log("D : Grade");
// }
// else if(num<40)
// {
//     console.log("F : Grade");
// }

// 12. Write a program to check if a number is a perfect number (sum of divisors equals the number).

// 13. Write a program that checks if a character is uppercase or lowercase.

// let char = "a"
// if (char>='A'&& char<='Z') {
//     console.log("Uppercase");
    
// } else if(char>='a'&&char<='z'){
//     console.log("LowerCase");
// }

// if (rmdr!=0 && rmdr>=500) {
//     temp=rmdr/ 500;
//     rmdr=rmdr% 500;
//     console.log("Two Hundred note",temp);
// }
// if (rmdr!=0 && rmdr>=200) {
//     temp=rmdr/200;
//     rmdr=rmdr%200;
//     console.log("Two Hundred note",temp);

// } else if(rmdr!=0 && rmdr>=100) {
//     temp=rmdr/100;
//     rmdr=rmdr%100;
//     count=count+temp;
// }
// else if(rmdr!=0 && rmdr>=50) {
//     temp=rmdr/50;
//     rmdr=rmdr%50;
//     count=count+temp;
// }
// else if(rmdr!=0 && rmdr>=20) {
//     temp=rmdr/20;
//     rmdr=rmdr%20;
//     count=count+temp;
// }
// else if(rmdr!=0 && rmdr>=10) {
//     temp=rmdr/10;
//     rmdr=rmdr%10;
//     count=count+temp;
// }
// console.log(count);
// let amount=1660;
// five=parseInt(amount/500);
// rmd=amount%500;

// if (rmd!=0 && rmd>=200) {
//    var two= parseInt(rmd/200);
//     rmd=rmd%200;
// }
// if(rmd!=0 && rmd>=100)
// {
//     var one=parseInt(rmd/100);
//     rmd=rmd%100; 
// }
// if(rmd!=0 && rmd>=50)
// {
//     var fifty= parseInt(rmd/50);
//     rmd=rmd%50; 
// }
// if(rmd!=0 && rmd>=20)
// {
//    var twenty= parseInt(rmd/20);
//     rmd=rmd%20; 
// }
// if(rmd!=0 && rmd>=10)
// {
//     var ten= parseInt(rmd/10);
//     rmd=rmd%10; 
// }
// console.log("Five Hundred Notes",five);
// console.log("two Hundred Notes",two);
// console.log("Hundred Notes",one);
// console.log("fifty Notes",fifty);
// console.log("twenty Notes",twenty);
// console.log("ten Notes",ten);

// Pooja would like to withdraw X $US from an ATM. The cash machine will only accept the transaction if X is a multiple of 5, and Pooja's account balance has enough cash to perform the withdrawal transaction (including bank charges). For each successful withdrawal the bank charges 0.50 $US.
// let balance=100;
// let x=72;

// if (x<balance) {
//     if(x%5==0){
//         console.log("she Can withdraw",x);
//         remaining=balance-(x+0.50);
//         console.log("Remaining Balance are",remaining);
//     }
//     else{
//         console.log("Please input amount in multiple of 5");
//     }
// }
// else
// {
//     console.log("Low Balance");
// }

// "Write a program to input electricity unit charges and calculate total electricity bill according to the given condition:
// For first 50 units Rs. 0.50/unit
// For next 100 units Rs. 0.75/unit
// For next 100 units Rs. 1.20/unit
// An additional surcharge of 20% is added to the bill"

// let unit=50;
// let Amt=0;
//     if (unit>=50) {
//         Amt=50*0.50;
//         unit=unit-50;
//     }
//     if (unit>=100) {
//         Amt=Amt+(100*0.75);
//         unit=unit-100;
//     }
//         Amt=Amt+(unit*1.20);
//         unit=unit-100;
//         Amt=Amt+(Amt*20)/100;
//     console.log(Amt);
    
// Write a program to input angles of a triangle and check whether triangle is valid or not.    
    
    // let hyp=30;
    // let perp=120;
    // let base=20;
    // sum=hyp+perp+base;

    // if (sum>=180) {
    //     console.log("Triangle is Valid");
        
    // } else {
    //     console.log("Triangle is Not valid");
        
    // }
   
// Write a program to input all sides of a triangle and check whether triangle is valid or not.   

    // let hyp=5;
    // let perp=3;
    // let base=4;

    // if ((hyp*hyp)==(perp*perp)+(base*base)) {
    //     console.log("Triangle is Valid");
        
    // } else {
    //     console.log("Triangle Is not Valid");
    // }

// Write a program to check whether the triangle is equilateral, isosceles or scalene triangle.

    // let hyp=45;
    // let perp=35;
    // let base=20;

    // if(hyp==perp && hyp ==base)
    // {
    //     console.log("equilateral");
    // }
    // else if(hyp==perp || perp==base)
    // {
    //     console.log("isosceles");
    // }
    // else
    // {
    //     console.log("Scalene");
        
    // }

