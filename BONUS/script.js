// funzione per comporre array di lunghezza totLength con numeri compresi tra min e max
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

  }  while(array.length < totLength);

  return array;

}



// funzione per chiedere all'utente numeri tra min e max
function askNumber(min,max){
  var res = parseInt(prompt("Dimmi un numero tra "+min+" e "+max));
  return res;
}

// Funzione confronto numeri tra min e max con numeri presenti in un myArray esterno, inserendo quelli non presenti in un array vuoto e fermandosi dopo aver trovato un doppione. Ottengo la quantità di numeri estratti prima del doppione.
function howManyShots(min,max,myArray){

  var usedNumbers = [];

  do{

    var userNumber = askNumber(min,max);

    if (Number.isNaN(userNumber) || userNumber < min || userNumber > max){
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

// esecuzione esercizio
do{
  var levelSelect = prompt("Seleziona livello tra facile, medio , difficile");
  var level = levelSelect.toLowerCase();
  console.log(level);
  if (level !== "facile" && level !== "medio" && level !== "difficile"){
    alert("seleziona livello corretto tra facile , medio , difficile");
  }
} while (level !== "facile" && level !== "medio" && level !== "difficile");



  if (level == "facile"){
  var bombs = getRndDifferentNumbers(1,100,16);
  var howManyBombs = howManyShots(1,100,bombs);
  console.log("colpi scoppiati ",howManyBombs);
} else if (level == "medio"){
  var bombs = getRndDifferentNumbers(1,80,16);
  console.log("numeri delle mine: ",bombs);
  var howManyBombs = howManyShots(1,80,bombs);
  console.log("colpi scoppiati ",howManyBombs);
} else if (levelSelect == "difficile"){
  var bombs = getRndDifferentNumbers(1,50,16);
  console.log("numeri delle mine: ",bombs);
  var howManyBombs = howManyShots(1,50,bombs);
  console.log("colpi scoppiati ",howManyBombs);
}
