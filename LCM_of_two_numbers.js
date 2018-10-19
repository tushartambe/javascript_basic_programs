let firstNumber=6;
let secondNumber=16;
let lcm;
let multiplication = firstNumber*secondNumber;

for(let divisor=1; divisor<= multiplication; divisor++) {
  if(i % firstNumber == 0 && divisor % secondNumber == 0) {
    lcm = divisor;
    break;
  }
}

console.log("LCM of",firstNumber,"and",secondNumber,"is :",lcm);
