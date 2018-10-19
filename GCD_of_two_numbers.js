let firstNumber = 8;
let secondNumber = 4;
let gcd;
let smallNumber = secondNumber;

if(firstNumber > secondNumber){
  smallNumber = firstNumber;
}

for(let isFactor=1;isFactor<=smallNumber;isFactor++) {
  if(firstNumber % isFactor == 0 && secondNumber % isFactor == 0){
    gcd = isFactor;
  }
}

console.log("GCD of",firstNumber,"and",secondNumber,"is :",gcd);
