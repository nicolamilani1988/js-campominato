function getRnd (min,max){
  var minRnd = min;
  var maxRnd = max - minRnd + 1;
  var numRnd = Math.floor(Math.random()*maxRnd)+minRnd;
  return numRnd;
}


function getDifferentNumbers (arrayTot,array,tot){
  var arrayTot = [];
  var array = [];
  while (array.length < tot){
    var index = arrayTot.indexOf(getRnd(1,100));
    if(arrayTot.length<1){
      arrayTot.push(getRnd(1,100));
    } else {
      arrayTot.push(getRnd(1,100));
      if (index == -1){
        array.push(getRnd(1,100))
      }
    }
  }
  return array;
}

// var randomNumber = getRnd(1,100);
// console.log(randomNumber);
var bombsTot = [];
var bombs = [];
var bombsOk = getDifferentNumbers(bombsTot,bombs,16);
console.log(bombsOk);
