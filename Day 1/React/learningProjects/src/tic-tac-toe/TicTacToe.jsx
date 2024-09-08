import "./styles.css";
import { useState, useEffect } from "react";
const TicTacToe = () => {
  //   const [X, setX] = useState('')

  /* const handleClick = (index) => {
    // let a = document.getElementsByClassName('box')[index].innerHTML
    //My first method to solve with dom , but it is not ideal for react 
     if (document.getElementsByClassName("box")[index].innerHTML == "") {
      setX(X === "X" ? "O" : "X");
      document.getElementsByClassName("box")[index].innerHTML = X;
    } else if (document.getElementsByClassName("box")[index].innerHTML !== "") {
      setX(X === "X" ? "X" : "");
      document.getElementsByClassName("box")[index].innerHTML;
    } 
  }*/
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  const handleClick = (index) => {
    // Don't allow changes to a square that's already filled
    if (squares[index]) return;

    // Copy the current squares array
    const newSquares = [...squares];

    // Set the current square to "X" or "O" depending on whose turn it is
    newSquares[index] = isXTurn ? "X" : "O";

    // Update state
    setSquares(newSquares);

    // Switch turns
    setIsXTurn(!isXTurn);
  };

  const getWinner = (squares) => {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];

    for (let [a, b, c] of winningPatterns) {
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }

    return squares.every((square) => square) ? "Draw" : null;
  };

  useEffect(() => {
    const winner = getWinner(squares);
    if (winner) {
      setStatus(winner === "Draw" ? "It's a draw!" : `Winner is ${winner}!`);
    } else {
      setStatus(`Next player: ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  const handleRestart = () => {
    setSquares(Array(9).fill(""));
    setIsXTurn(true);
    setStatus("");
  };

  return (
    <div className="main">
      {squares.map((item, index) => (
        <div className="box" key={index} onClick={() => handleClick(index)}>
          {item}
        </div>
      ))}
      <div className="status">{status}</div>
      <button onClick={handleRestart}>Restart Game</button>
    </div>
  );
};

export default TicTacToe;
