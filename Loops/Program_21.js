// Write a program to print all Prime numbers between 1 to n.

let num = 100; // You can change this value

for(i=2;i<=num;i++)
{
    count=0
    for(j=1;j<=i;j++)
    {
        if(i%j===0)
        {
            count++
        }
    }
    if(count==2){
        console.log(i);
    }
}
