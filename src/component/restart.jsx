import React from "react";

const Restart = ({ player, winner, draw, onHandleRestart }) => {
  const extraClass = winner || draw ? " show" : "";
  return (
    <div className={"winning-message" + extraClass}>
      <div>
        {draw
          ? "Draw !!"
          : player === winner
          ? "Player Wins !!"
          : "Player Loses !!"}
      </div>
      <button onClick={onHandleRestart} className="winning-message-button">
        Restart
      </button>
    </div>
  );
};

export default Restart;
