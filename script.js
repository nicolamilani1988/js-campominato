function getRnd (min,max){
  var minRnd = min;
  var maxRnd = max - minRnd + 1;
  var numRnd = Math.floor(Math.random()*maxRnd)+minRnd;
  return numRnd;
}


function getDifferentNumbers (totLength){
  var arrayTot = [];
  var array = [];
  var index = arrayTot.indexOf(getRnd(1,20));

  while (array.length < totLength){
    if(arrayTot.length<1){
      arrayTot.push(getRnd(1,20));
    } else {
      arrayTot.push(getRnd(1,20));
      if (index == -1){
        array.push(getRnd(1,20))
      }
    }
  }
  return array;
}


var bombs = getDifferentNumbers(16);
console.log(bombs);
