import React from "react";
import Player from "./player";

const SelectPlayer = ({ player, winner, onHandleSelectPlayer }) => {
  return !player ? (
    <Player onHandleSelectPlayer={onHandleSelectPlayer} />
  ) : !winner ? (
    <h4>Player = {player}</h4>
  ) : (
    <h4>Game End</h4>
  );
};

export default SelectPlayer;
