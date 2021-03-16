// creazione celle campo minato
function createCell (){
  var cella = document.getElementById("griglia");
  for(var i=0;i<100;i++){
    cella.innerHTML += '<li class="cell"><input id="cell-'+(i+1)+'" class="number" type="checkbox" name="" data-numb='+ (i+1) + '><span class="cifra">'+(i+1)+'</span></li>';
}
}

// function selectBomb (cellNum){
//   myBtn.addEventListener("click", function getBomb(){
//       var myBtn = selectBomb(i+1);
//        console.log(myBtn.dataset.numb);
//   })
//   var cellNum = myBtn.checked;
//   return cellNum;
//   }
//
//   var myCell = document.getElementById("cell-"+cellNum);
//   return myCell;
// }

createCell();

var myBtn = document.getElementById("cell-"+ 8);
myBtn.addEventListener("click", function getBomb(){

     console.log(myBtn.dataset.numb);
})
