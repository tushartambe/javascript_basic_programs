let principalAmout = 5000;
let rateOfInterest = 8;
let numberOfYears = 4;
let calculationValue = Math.pow((1+(rateOfInterest/100)),numberOfYears);
let compoundInterest = (principalAmout*(calculationValue))-principalAmout;

console.log("Compound interest :",compoundInterest);
