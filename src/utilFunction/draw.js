export function isDraw(board) {
  return board.filter((box) => box === null).length === 0 ? true : false;
}
