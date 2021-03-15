function getRnd (min,max){
  var minRnd = min;
  var maxRnd = max - minRnd + 1;
  var numRnd = Math.floor(Math.random()*maxRnd)+minRnd;
  return numRnd;
}



var bombsTot = [];
var bombs = [];

while (bombs.length < 16){

  var numRnd = Math.floor(Math.random()*100)+1;
  var index = bombsTot.indexOf(numRnd);
  if (bombsTot.length < 1){
    bombsTot.push(numRnd);
  } else {
      bombsTot.push(numRnd);
      if(index == -1){
      bombs.push(numRnd);
      }
    }

}

console.log(bombsTot);
console.log (bombs);
