// creazione celle campo minato
function createCell (){
  var cella = document.getElementById("griglia");
  for(var i=0;i<100;i++){
    cella.innerHTML += '<li class="cell"><input id="cell-'+(i+1)+'" class="number" type="checkbox" name = "" data-numb="'+ (i+1) + '"><span class="cifra">'+(i+1)+'</span></li>';
}
}


createCell();

// funzione per associare input utente a un numero preciso.
function getBomb(){
  var lis = document.getElementsByTagName("li");
  for(var i=0;i<lis.length;i++){
    var li = lis[i];


    li.addEventListener("click",function(){

      var selectedBomb = parseInt(this.children[0].dataset.numb);
      console.log(selectedBomb);

    })

  }
}

getBomb();
