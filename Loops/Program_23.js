// Write a program to check whether a number is Strong number or not.

let num=40585;

function factorial(n)
{
    let fact=1
    for(i=1;i<=n;i++)
    {
        fact=fact*i;
    }
    return fact;
}
temp=num
sum=0
while(temp!==0)
{
    digit=temp%10
    sum=sum+factorial(digit)
    temp=Math.floor(temp/10)
}

if (sum===num) {    
    console.log("Strong Number");
    }
else
    {
      console.log("Not Strong Number");
    }