function getRndDifferentNumbers (min,max, totLength){

  var arrayTot = [];
  var array = [];

  do{

    var minRnd = min;
    var maxRnd = max - minRnd + 1;
    var numRnd = Math.floor(Math.random()*maxRnd)+minRnd;
    var index = arrayTot.indexOf(numRnd);
    arrayTot.push(numRnd);

    if (index == -1){
        array.push(numRnd)
      }

  }  while (array.length < totLength)

  return array;

}


function howManyShots(min,max,myArray){

  var usedNumbers = [];

  do{

    var userNumber = parseInt(prompt("dammi un numero"));

    if (Number.isNaN(userNumber) || userNumber <= min || userNumber > max){
      alert ("numero non valido, dimmene un altro");
    } else if (usedNumbers.indexOf(userNumber) >= 0){
      alert ("numero già usato, dimmene un altro");
    } else {
      usedNumbers.push(userNumber);
      // console.log(userNumber);
    }
  } while (myArray.indexOf(userNumber) < 0)

  return (usedNumbers.length);

}

var bombs = getRndDifferentNumbers(1,10,5);
console.log("numeri delle mine: ",bombs);
var howManyBombs = howManyShots(0,10,bombs);
console.log("colpi scoppiati ",howManyBombs);
