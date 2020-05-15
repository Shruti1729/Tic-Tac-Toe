let board=[
 ['','',''],
 ['','',''],
 ['','','']
];

let human = 'O';
let machine = 'X';
let cur_play = human;

function setup() {
  createCanvas(400, 400);
  
  let wid = width/3;
  let hgt = height/3;
}
function equals(a,b,c){
  return (a == b && b == c && a != '');
}

function win(){
  let winner = null;
  //horizontal
  for(let i = 0; i<3; i++){
    if(equals(board[i][0],board[i][1],board[i][2])){
       winner=board[i][0];
       }
  }
  //vertical
  for(let i = 0; i<3; i++){
    if(equals(board[0][i],board[1][i],board[2][i])){
       winner=board[0][i];
       }
  }
  //left diagonal
    if(equals(board[0][0],board[1][1],board[2][2])){
       winner=board[0][0];
       }
  //right diagonal
    if(equals(board[2][0],board[1][1],board[0][2])){
       winner=board[2][0];
       }
  
 let blank = 0;
  for(let i = 0; i<3; i++){
    for(let j = 0; j<3; j++){
      if (board[i][j] == ''){
        blank++;
      }
    }
  }
  
  if(winner == null && blank == 0){
    return 'Draw';  
  }
  else{
    return winner;
  }
}

function mousePressed(){
if(cur_play == human){
  //human turn
  let i = floor(mouseX/wid);
  let j = floor(mouseY/hgt);
  //valid turn
  if(board[i][j] == ''){
  board[i][j] = human;
  cur_play = machine;
  bestMove();
  }
}
}

function draw() {
  background(255);
  
  wid=width/3;
  hgt=height/3;
  
  line(wid,0,wid,height);
  line(wid*2,0,wid*2,height);
  line(0,hgt,width,hgt);
  line(0,hgt*2,width,hgt*2);
 
  for(let j = 0; j<3; j++){
      for(let i = 0;i<3; i++){
      let x = wid * i + wid/2;
      let y = hgt * j + hgt/2;
      let fill = board[i][j];
      textSize(32);
      strokeWeight(4);
      if(fill == human){
        noFill();
        ellipse(x,y,wid/2);
      }
      else if(fill == machine){
        let rx=wid/4;
        line(x-rx,y-rx,x+rx,y+rx);
        line(x+rx,y-rx,x-rx,y+rx);
      }
  }
 }

let res=win();
if(res!=null){
  noLoop();
  let resP=createP('');
  resP.style('font-size','32pt');
  if (res == 'Draw'){
  resP.html('Draw!');
  }
  else{
   resP.html(`${res} wins!`);
  }
}
}