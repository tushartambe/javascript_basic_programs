let numberOfTerms = 5;
let firstTerm = 0;
let secondTerm = 1;
let nextTerm;

console.log(firstTerm);
console.log(secondTerm);

for(let termIndex=1; termIndex<=numberOfTerms-2; termIndex++){
  nextTerm = firstTerm + secondTerm;
  console.log(nextTerm);
  firstTerm = secondTerm;
  secondTerm = nextTerm;
}

