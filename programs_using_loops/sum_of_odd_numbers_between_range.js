let startingIndex = 2;
let endingIndex = 6;
let sum = 0;

if((startingIndex % 2) == 0){
  startingIndex = startingIndex + 1;
}

while(startingIndex <= endingIndex){
  sum = sum + startingIndex;
  startingIndex+=2;
}

console.log("SUM = ",sum);

