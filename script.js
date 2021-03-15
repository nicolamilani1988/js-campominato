function getRndDifferentNumbers (min,max, totLength){

  var arrayTot = [];
  var array = [];
  while (array.length < totLength){

    var minRnd = min;
    var maxRnd = max - minRnd + 1;
    var numRnd = Math.floor(Math.random()*maxRnd)+minRnd;
    var index = arrayTot.indexOf(numRnd);

    if(arrayTot.length<1){
      arrayTot.push(numRnd);
    } else {
      arrayTot.push(numRnd);
      if (index == -1){
        array.push(numRnd)
      }
    }
  }
  return array;

}


var bombs = getRndDifferentNumbers(1,100,16);
console.log(bombs);
