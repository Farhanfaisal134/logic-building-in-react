const Chessboard = () => {
  const board = [];

  for (let row = 0; row < 8; row++) {
    for (let col = 0; col < 8; col++) {
      const isBlack = (row + col) % 2 === 0;
      board.push(
        <div key={`${row}-${col}`}
          className={`w-16 h-16 ${isBlack ? "bg-black" : "bg-white"} `}></div>
      );
    }
  };

  return (
    <div className="flex items-center justify-center h-screen">
      <div className="grid grid-cols-8 border-4 border-gray-800">{board}</div>
    </div>
  );
};

export default Chessboard;
