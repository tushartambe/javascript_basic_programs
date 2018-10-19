let startingIndex = 12;
let endingIndex = 19;

if((startingIndex % 2) == 0){
  startingIndex = startingIndex + 1;
}

while(startingIndex <= endingIndex){
  console.log(startingIndex);
  startingIndex+=2;
}

