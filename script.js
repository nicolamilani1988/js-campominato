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

var bombs = getRndDifferentNumbers(1,10,5);
console.log(bombs);

  var usedNumbers = [];

  do{

    var userNumber = parseInt(prompt("dammi un numero"));

    if (Number.isNaN(userNumber) || userNumber <= 0 || userNumber > 100){
      alert ("numero non valido, dimmene un altro");
    } else if (usedNumbers.indexOf(userNumber) >= 0){
      alert ("numero già usato, dimmene un altro");
    } else {
      usedNumbers.push(userNumber);
      console.log(userNumber);
    }
  } while (bombs.indexOf(userNumber) < 0)


  console.log(usedNumbers, usedNumbers.length);
  console.log("Hai perso e sei esploso dopo aver scoppiato la bomba numero " , usedNumbers.length);
