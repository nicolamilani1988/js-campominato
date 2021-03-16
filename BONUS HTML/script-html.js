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
function createCell (max){
  var cella = document.getElementById("griglia");
  for(var i=0;i<max;i++){
    cella.innerHTML += '<li class="cell"><input id="cell-'+(i+1)+'" class="number" type="checkbox" name = "" data-numb="'+ (i+1) + '"><span class="cifra">'+(i+1)+'</span></li>';
}
}


createCell(100);
var bombs = getRndDifferentNumbers(1,100,16);
console.log("numeri delle mine: ",bombs);

// funzione per associare input utente a un numero preciso.
function Shoot(){
  var shots = [];
  var lis = document.getElementsByTagName("li");
  for(var i=0;i<lis.length;i++){
    var li = lis[i];

    li.addEventListener("click",function(){

      var checkedLi = this;

      var shotMade = parseInt(checkedLi.children[0].dataset.numb);
      console.log(shotMade);

      console.log("numeri delle mine: ",bombs);
      console.log("Colpi usati: ",shots);
      var shotsNumber = shots.length;
      console.log("colpi sparati ",shotsNumber);
      if(shots.includes(shotMade)){
        alert("Numero già inserito")
      } else if(!bombs.includes(shotMade)){
        shots.push(shotMade);
      } else {
        checkedLi.style.color = "red";
        alert("SEI SCOPPIATO DOPO AVER SPARATO " + (shotsNumber+1) + " BOMBE");
      }

    })


  }

}

Shoot();
