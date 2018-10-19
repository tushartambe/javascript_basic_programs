let startingIndex = 10;
let endingIndex = 21;

if((endingIndex % 2) != 0){
  endingIndex = endingIndex - 1;
}

while(endingIndex >= startingIndex){
  console.log(endingIndex);
  endingIndex-=2;
}

