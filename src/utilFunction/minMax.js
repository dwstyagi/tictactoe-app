// ['X', 'O', 'O', 
//  ' ', 'O', ' ', 
//  ' ', 'X', 'X']
import { isDraw } from "./draw"
import { isWinner } from "./winner"

export function MiniMax(board, player, cpu) {
  let bestScore = -Infinity;
  let bestMove;

  for (let i = 0; i < board.length; i++) {
    if (!board[i]) {
      board[i] = cpu;
      const score = MiniMaxUtil(board, false, player, cpu);
      board[i] = null;

      if (score > bestScore) {
        bestScore = score;
        bestMove = i;
      }
    }
  }
  return bestMove
}

function MiniMaxUtil(board, isMaximizing, player, cpu) {

  const result = isWinner(board);
  if (result) {
    if (result === player) return -1
    else return 1
  }

  if (isDraw(board)) return 0

  if (isMaximizing) {
    let bestScore = -Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = cpu;
        const score = MiniMaxUtil(board, false, player, cpu);
        board[i] = null;
        bestScore = Math.max(bestScore, score);
      }
    }
    return bestScore
  }
  else {
    let bestScore = Infinity;
    for (let i = 0; i < board.length; i++) {
      if (!board[i]) {
        board[i] = player;
        const score = MiniMaxUtil(board, true, player, cpu);
        board[i] = null;
        bestScore = Math.min(bestScore, score);
      }
    }
    return bestScore
  }
}