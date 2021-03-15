
var bombs = [];

for (i=0;i<16;i++){
  var rndNum = Math.floor(Math.random()*100)+1;
  bombs.push(rndNum);
}

console.log(bombs);
