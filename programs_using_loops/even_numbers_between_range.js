let startingIndex = 11;
let endingIndex = 20;

if((startingIndex % 2) != 0){
  startingIndex = startingIndex + 1;
}

while(startingIndex <= endingIndex){
  console.log(startingIndex);
  startingIndex+=2;
}

