// Write a program to find sum of all prime numbers between 1 to n.

let num=10
sum=0
for(i=2;i<=num;i++)
{
    count=0
    for(j=1;j<=i;j++)
    {
        if(i%j==0)
        {
            count++;
        }
    }
    if(count==2)
        {
            sum=sum+i; 
        } 
}
 console.log(sum);