let firstNumber=8;
let secondNumber=4;
let thirdNumber=71;
let greatestNumber;

if(firstNumber > secondNumber && firstNumber > thirdNumber) {
  greatestNumber=firstNumber;
} else if( secondNumber > firstNumber && secondNumber > thirdNumber) {
  greatestNumber=secondNumber;
} else {
  greatestNumber=thirdNumber;
}

console.log("Greatest  number :",greatestNumber);

