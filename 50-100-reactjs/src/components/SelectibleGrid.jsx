import React, { useEffect, useState } from 'react'

const App = () => {
  const [twoDmatrix, setTwoDmatrix] = useState([]);
  const [startPos, setStartPos] = useState([]);
  const [endPos, setEndPos] = useState([]);

  const prepareTwoDmatrix = () => {
    let matrix = [];
    for (let i = 0; i <= 9; i++) {
      for (let j = 0; j <= 9; j++) {
        const obj = {
          pos: [i, j],
          isColor: false
        };
        matrix.push(obj)
      }
    };
    setTwoDmatrix(matrix);
  };

  const handleDragStart = (e, startPos) => {
    setStartPos(startPos)
    prepareTwoDmatrix()
  };

  const handleDragOver = (e, endPos) => {
    setEndPos(endPos)
  };

  const filColor = (sPos, ePos) => {
    console.log(sPos, ePos);

    const [rowStart, colStart] = sPos;
    const [rowEnd, colEnd] = ePos;

    const startRow = Math.min(rowStart, rowEnd);
    const endRow = Math.max(rowStart, rowEnd);
    const startCol = Math.min(colStart, colEnd);
    const endCol = Math.max(colStart, colEnd);

    let selectedGrid = [];
    for (let i = startRow; i <= endRow; i++) {
      for (let j = startCol; j <= endCol; j++) {
        selectedGrid.push([i, j].join(''));
      }
    }

    let copyMatrix = [...twoDmatrix];
    copyMatrix = copyMatrix.map((item) => {
      let { pos } = item;
      const stringFormate = pos.join("");
      if (selectedGrid.includes(stringFormate)) {
        item.isColor = true
      }
      return item
    });
    setTwoDmatrix(copyMatrix)
  };

  useEffect(() => {
    prepareTwoDmatrix()
  }, []);

  useEffect(() => {
    if (startPos.length > 1 && endPos.length > 1) {
      filColor(startPos, endPos)
    };
  }, [startPos, endPos]);

  return (
    <div className='flex flex-col gap-4 justify-center items-center w-full h-screen bg-gray-900 text-white'>
      <h1 className='text-3xl font-bold'>Selectable Grid</h1>
      <div className='grid grid-cols-10 gap-1'>
        {
          twoDmatrix.map((item, i) => (
            <div
              key={i}
              draggable
              onDrag={(e) => handleDragStart(e, item.pos)}
              onDragOver={(e) => handleDragOver(e, item.pos)}
              className={`border border-gray-500 p-1 rounded-sm shadow-md hover:scale-105 
              ${item.isColor && "bg-blue-600 text-slate-300-400 shadow-lg"}`}>{item.pos}</div>
          ))
        }
      </div>
    </div>
  )
};

export default App;