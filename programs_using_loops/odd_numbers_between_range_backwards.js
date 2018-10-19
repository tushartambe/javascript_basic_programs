let startingIndex = 11;
let endingIndex = 20;

if((endingIndex % 2) == 0){
  endingIndex = endingIndex - 1;
}

while(endingIndex >= startingIndex){
  console.log(endingIndex);
  endingIndex-=2;
}

