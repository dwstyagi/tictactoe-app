import React from "react";

const Box = ({ board, player, onHandleClick }) => {
  return board.map((box, boxId) => (
    <button
      id ={boxId}
      disabled={board[boxId] || !player}
      onClick={() => onHandleClick(boxId)}
      key={boxId}
      className="box"
    >
      {box}
    </button>
  ));
};

export default Box;
