import React, { Component } from "react";
import Box from "./component/box";
import SelectPlayer from "./component/selectPlayer";
import Restart from "./component/restart";
import { isWinner } from "./utilFunction/winner";
import { isDraw } from "./utilFunction/draw";
import "./App.css";
import { MiniMax } from "./utilFunction/minMax";

class App extends Component {
  state = {
    board: [],
    player: null,
    cpu: null,
    winner: null,
    draw: false,
  };

  componentDidMount() {
    const board = Array(9).fill(null);
    this.setState({ board });
  }

  nextMove = (board) => {
    const { player, cpu } = this.state;
    let draw = false;

    const newBoard = [...board];
    const index = MiniMax(newBoard, player, cpu);

    newBoard[index] = cpu;

    const winner = isWinner(newBoard);
    if (!winner) {
      draw = isDraw(newBoard);
    }

    this.setState({ board: newBoard, winner, draw });
  };

  handleClick = (index) => {
    const { board, player } = this.state;
    let draw = false;

    const newBoard = [...board];

    newBoard[index] = player;
    const winner = isWinner(newBoard);

    if (!winner) {
      draw = isDraw(newBoard);
    }
    this.setState({ board: newBoard, winner, draw });

    if (!winner || !draw) this.nextMove(newBoard);
  };

  handleSelectPlayer = (e) => {
    e.preventDefault();
    const player = e.currentTarget.player.value;
    const cpu = player === "X" ? "O" : "X";
    this.setState({ player, cpu });
  };

  handleRestart = () => {
    const board = Array(9).fill(null);
    const player = null;
    const cpu = null;
    const winner = null;
    const draw = null;

    this.setState({ board, player, cpu, winner, draw });
  };

  render() {
    const { board, player, winner, draw } = this.state;
    return (
      <div className="container">
        <h1>Tic Tac Toe</h1>
        <h5>Artifical Intelligence</h5>

        <SelectPlayer
          player={player}
          winner={winner}
          onHandleSelectPlayer={this.handleSelectPlayer}
        />

        <div className="board">
          <Box player={player} board={board} onHandleClick={this.handleClick} />
        </div>

        <Restart
          winner={winner}
          player={player}
          draw={draw}
          onHandleRestart={this.handleRestart}
        />
      </div>
    );
  }
}

export default App;