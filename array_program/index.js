let arr=[];

function calc()
{
    const num=Number(document.getElementById('num').value);

    arr.push(num);
    
    document.getElementById('num').value="";

    const sum=arr.reduce((prev,curr)=>
    {
        return prev+curr;
    },0);

    document.getElementById('elements').innerHTML=arr.join("->");
    document.getElementById('sum').innerHTML=sum;
    document.getElementById('total').innerHTML=arr.     length;
    document.getElementById('avg').innerHTML=(sum/arr.length).toFixed(2);
    document.getElementById('min').innerHTML=Math.min(...arr);
    document.getElementById('max').innerHTML=Math.max(...arr);
}

