import React, { useState } from 'react'
import { FaHandPointRight } from "react-icons/fa";

const UndoRedo = () => {
  const [value, setValue] = useState(0);
  const [redoList, setRedoList] = useState([]);
  const [history, setHistory] = useState([]);

  const maintainHistory = (key, prev, curr) => {
    const obj = {
      action: key,
      prev,
      curr
    };

    const copyHistory = [...history];
    copyHistory.unshift(obj);
    setHistory(copyHistory);
  };

  function handleClick(key) {
    const val = parseInt(key)
    maintainHistory(key, value, val + value);
    setValue((prev) => prev + val);
  };

  const handleUndo = () => {
    if (history.length) {
      const copyHist = [...history];
      const firstItem = copyHist.shift();
      setHistory(copyHist);
      setValue(firstItem.prev)
      const copyRedoList = [...redoList];
      copyRedoList.push(firstItem)
      setRedoList(copyRedoList)
    };
  };

  const handleRedo = () => {
    if (redoList.length) {
      const copyRedoList = [...redoList];
      const popedValue = copyRedoList.pop();
      setRedoList(copyRedoList);
      const { action, prev, curr } = popedValue;
      setValue(curr);
      maintainHistory(action, prev, curr);
    };
  };

  return (
    <div className='w-full min-h-screen bg-gray-700 text-white'>
      <h1 className='text-2xl font-bold text-center py-4'>Undoable Counter</h1>
      <div className='flex gap-4 justify-center'>
        <button onClick={handleUndo} className='px-3 py-2 text-xl font-semibold bg-blue-500 rounded-md'>Undo</button>
        <button onClick={handleRedo} className='px-3 py-2 text-xl font-semibold bg-blue-500 rounded-md'>Redo</button>
      </div>
      <div className='my-10 flex justify-center gap-1'>
        {
          [-500, -100, -10].map((btn) => {
            return (
              <button key={btn} className='p-2 bg-blue-500 rounded-md'
                onClick={() => handleClick(btn)}
              >{btn}</button>
            )
          })
        }
        <div
          className='text-3xl'
        >{value}</div>
        {
          ['+10', '+100', '+500'].map((btn) => {
            return (
              <button key={btn} className='p-2 bg-blue-500 rounded-md'
                onClick={() => handleClick(btn)}
              >{btn}</button>
            )
          })
        }
      </div>
      <div className='w-80 h-80 mx-auto border-2 border-gray-300 p-2'>
        {
          history.map((item) => {
            return <div key={item.curr} className='flex justify-between'>
              <div>{item.action}</div>
              <div className='flex justify-center items-center gap-1'>
                <p>{item.prev}</p>
                <FaHandPointRight />
                <p>{item.curr}</p>
              </div>
            </div>
          })
        }
      </div>
    </div>
  )
};

export default UndoRedo;