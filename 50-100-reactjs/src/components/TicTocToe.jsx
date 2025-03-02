import { useEffect, useState } from "react";

function TicTocToe() {
  const [squares, setSquares] = useState(Array(9).fill(""));
  const [isXTurn, setIsXTurn] = useState(true);
  const [status, setStatus] = useState("");

  function getWinner(squares) {
    const winningPatterns = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
      [0, 3, 6],
      [1, 4, 7],
    ];

    for (let i = 0; i < winningPatterns.length; i++) {
      const [x, y, z] = winningPatterns[i];
      if (squares[x] &&
        squares[x] === squares[y] &&
        squares[x] === squares[z]
      ) {
        return squares[x]
      }
    }
    return null
  };

  function handleClick(getCurrentSquare) {
    const cpySquares = [...squares];
    if (getWinner(cpySquares) || cpySquares[getCurrentSquare]) return;
    cpySquares[getCurrentSquare] = isXTurn ? "X" : "O";
    setIsXTurn(!isXTurn);
    setSquares(cpySquares);
  };

  function handleReStart() {
    setIsXTurn(true);
    setSquares(Array(9).fill(""));
  };

  useEffect(() => {
    if (!getWinner(squares) && squares.every((item) => item !== '')) {
      setStatus(`This is a draw ! Please restart the game`);
    }
    else if (getWinner(squares)) {
      setStatus(`Winner is ${getWinner(squares)}. Please restart the game`);
    }
    else {
      setStatus(`Next player is ${isXTurn ? "X" : "O"}`);
    }
  }, [squares, isXTurn]);

  return (
    <div className="w-full h-screen flex justify-center items-center flex-col">
      <div className="grid grid-cols-3">
        {
          squares.map((item, index) => (
            <button key={index} className="w-[100px] h-[100px] text-3xl font-thin cursor-pointer bg-green-700 
            shadow-md rounded-md hover:bg-green-800 transition-all duration-300 text-white" onClick={() => handleClick(index)}>
              {item}
            </button>
          ))
        }
      </div>
      <h1 className="my-3">{status}</h1>
      <button onClick={handleReStart} className={`px-4 py-2 bg-blue-700 hover:bg-blue-800 
       transition-all duration-300 text-white text-xl rounded-md`}>Restart</button>
    </div>
  );
}

export default TicTocToe