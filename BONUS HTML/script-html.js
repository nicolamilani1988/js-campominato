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

  }  while (array.length < totLength)

  return array;

}

// creazione celle campo minato
function createCell (){
  var cella = document.getElementById("griglia");
  for(var i=0;i<100;i++){
    cella.innerHTML += '<li class="cell"><input id="cell-'+(i+1)+'" class="number" type="checkbox" name = "" data-numb="'+ (i+1) + '"><span class="cifra">'+(i+1)+'</span></li>';
}
}


createCell();
var bombs = getRndDifferentNumbers(1,100,16);
console.log("numeri delle mine: ",bombs);

// funzione per associare input utente a un numero preciso.
function Shoot(){
  var shots = [];
  var lis = document.getElementsByTagName("li");
  for(var i=0;i<lis.length;i++){
    var li = lis[i];

    li.addEventListener("click",function(){

      var shotMade = parseInt(this.children[0].dataset.numb);
      console.log(shotMade);
      shots.push(shotMade);
      console.log("numeri delle mine: ",bombs);
      console.log("Colpi usati: ",shots);

    })


  }

}

Shoot();
