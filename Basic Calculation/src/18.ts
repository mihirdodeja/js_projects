let P=10000; //Loan Amount
let annualRate= 10 //10%
let N=60 //Number of Months(5 Years)

let R=annualRate/12/100;
let EMI= (P*R*Math.pow(1+R,N))/(Math.pow(1+R,N)-1);

console.log("Monthly EMI: ", EMI.toFixed(2));