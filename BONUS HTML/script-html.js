// var cella = document.getElementById("griglia");
//
// for(var i=0;i<100;i++){
//   cella.innerHTML += '<div class="cell" id="cell-'+(i+1)+'">'+(i+1)+'</div>';
// }

var myBtn = document.getElementById("cell-1");

myBtn.addEventListener("click", function(){


  var myCells = document.getElementsByClassName("number");
  for(var i=0;i<myCells.length;i++){
    var myCell = myCells [i];
    var isChecked = myCell.checked;
    
    if (isChecked){
      var selectedBomb = parseInt(myCell.dataset.numb);
      console.log(selectedBomb);
    }
  }
})
