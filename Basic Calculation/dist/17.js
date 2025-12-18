"use strict";
var principal_amt = 50000;
var rate_of_int = 5;
var duration = 2;
let amount = principal_amt * Math.pow(1 + rate_of_int / 100, duration);
let CI = amount - principal_amt;
console.log("Compound Interest: ", CI);
console.log("Total Amount: ", amount);
