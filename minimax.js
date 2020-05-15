function bestMove() {
  // AI's turn
  let best_score = -Infinity;
  let best_move;
  
  for (let i = 0; i < 3; i++) {
    for (let j = 0; j < 3; j++) {
      // Checking for empty spot 
      if (board[i][j] == '') {
        board[i][j] = machine;
        let score = minimax(board, 0, false);
        board[i][j] = '';
        if (score > best_score) {
          best_score = score;
          best_move = { i, j };
        }
      }
    }
  }
  board[best_move.i][best_move.j] = machine;
  cur_play = human;
}
let scores = {
  X : 1,
  O : -1,
  tie : 0
}

function minimax(board, depth, isMaximizing){
  let result = win();
  if (result !== null){
    let score = scores[result];
    return score;
  }
  if (isMaximizing){
    let best_score = -Infinity;
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        // Checking for empty spot 
        if(board[i][j] == ''){
          board[i][j]=machine;
          let score = minimax(board, depth+1,false);
          board[i][j] = '';
          best_score = max(score,best_score);
        }
      }
    }
      return best_score;
    } else{
      let best_score = Infinity;
      for (let i = 0; i < 3; i++) {
        for (let j = 0; j < 3; j++) {
          // Checking for empty spot
          if(board[i][j] == ''){
            board[i][j]=human;
            let score = minimax(board, depth+1,true);
            board[i][j] = '';
            if(score < best_score){
            best_score = score;}
          }
        }
      }  
      return best_score;
    }
}