import React, { useEffect, useState } from 'react'

const App = () => {
  const [twoDMatrix, setTwoDMatrix] = useState([]);
  const [start, setStart] = useState([]);
  const [end, setEnd] = useState([]);

  const prepareTwoDMatrix = () => {
    const matrix = [];
    for (let i = 0; i <= 9; i++) {
      for (let j = 0; j <= 9; j++) {
        const obj = {
          pos: [i, j],
          isColor: false
        };
        matrix.push(obj);
      };
    };
    setTwoDMatrix(matrix);
  };

  const handleOnDrag = (e, pos) => {
    setStart(pos);
    prepareTwoDMatrix();
  };

  const handleOnDragOver = (e, pos) => {
    setEnd(pos);
  };

  const fillColor = (startPos, endPos) => {
    let [startRow, startCol] = startPos;
    let [endRow, endCol] = endPos;

    const rowStart = Math.min(startRow, endRow);
    const rowEnd = Math.max(startRow, endRow);
    const colStart = Math.min(startCol, endCol);
    const colEnd = Math.max(startCol, endCol);

    const selectedGrid = [];
    for (let i = rowStart; i <= rowEnd; i++) {
      for (let j = colStart; j <= colEnd; j++) {
        selectedGrid.push([i, j].join(''));
      }
    };
    let copyMat = [...twoDMatrix];
    copyMat = copyMat.map((item) => {
      const { pos } = item;
      const stringPos = pos.join('');
      if (selectedGrid.includes(stringPos)) {
        item.isColor = true;
      };
      return item;
    });
    setTwoDMatrix(copyMat);
  };

  useEffect(() => {
    prepareTwoDMatrix()
  }, []);

  useEffect(() => {
    if (start.length > 1 && end.length > 1) {
      fillColor(start, end)
    };
  }, [start, end])

  return (
    <div className='p-4 md:p-8 bg-gray-800 text-white h-screen'>
      <h1 className='text-2xl font-bold text-center py-4'>Selectable Grid</h1>
      <div className='md:max-w-[450px] max-w-3xl mx-auto'>
        <div className='grid grid-cols-10'>
          {
            twoDMatrix?.map((item, i) => (
              <div
                key={i}
                draggable
                onDragOver={(e) => handleOnDragOver(e, item.pos)}
                onDrag={(e) => handleOnDrag(e, item.pos)}
                className={`border border-gray-600 text-center ${item.isColor && "bg-blue-600"}`}
              >{item.pos}
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
};

export default App;