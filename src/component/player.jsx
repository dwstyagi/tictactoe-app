import React from "react";
import Input from "./input";

const Player = ({ onHandleSelectPlayer }) => {
  return (
    <form onSubmit={onHandleSelectPlayer}>
      <Input _id="opt1" name="player" value="X" type="radio" label="Player X" />
      <Input _id="opt2" name="player" value="O" type="radio" label="Player O" />
      <button className="btn btn-secondary btn-sm m-2">Start</button>
    </form>
  );
};

export default Player;
