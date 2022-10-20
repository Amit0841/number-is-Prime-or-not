//If a is prime prine "Yes", else "No".

let a=13;
let count=0;
for(let i=2;i<=a;i++)
{
   if(a%i==0)
{    
     count=i;
    break;
}
}
if(count==a)
{  
console.log("Yes");
}
else
{
console.log("No")
}
