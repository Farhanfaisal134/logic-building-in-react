import React, { useState } from 'react';

const data = [
  { title: 'First', id: 0, checked: false },
  { title: 'Second', id: 1, checked: false },
  { title: 'Third', id: 2, checked: false },
  { title: 'Fourth', id: 3, checked: false },
];

const TransferList = () => {
  const [leftItems, setLeftItems] = useState(data);
  const [rightItems, setRightItems] = useState([]);

  const checkedList = (list, id, checked) => {
    return list.map((item) => {
      if (id === item.id) {
        item.checked = !checked
      }
      return item
    })
  };

  const handleClick = (id, checked, direction) => {
    if (direction === 'LEFT') {
      const updatedList = checkedList(leftItems, id, checked);
      setLeftItems(updatedList);
    } else if (direction === 'RIGHT') {
      const updatedList = checkedList(rightItems, id, checked);
      setRightItems(updatedList);
    };
  };

  const resetItems = (list) => {
    return list.map((item) => ({
      ...item,
      checked: false,
    }));
  };

  const handleTransferBtn = (dir) => {
    if (dir === 'LEFT_TO_RIGHT') {
      const checkedItems = leftItems.filter((item) => item.checked);
      const remainingItems = leftItems.filter((item) => !item.checked);
      setRightItems(resetItems([...rightItems, ...checkedItems]));
      setLeftItems(remainingItems);
    } else if (dir === 'RIGHT_TO_LEFT') {
      const checkedItems = rightItems.filter((item) => item.checked);
      const remainingItems = rightItems.filter((item) => !item.checked);
      setLeftItems(resetItems([...leftItems, ...checkedItems]));
      setRightItems(remainingItems);
    }
  };

  return (
    <div className="p-4 md:p-8">
      <h1 className="text-center text-2xl font-bold py-4">Transfer List</h1>
      <div className="w-full max-w-2xl mx-auto flex gap-4">
        <div className="w-full flex flex-col gap-4 border-2 border-gray-800 h-60 p-4 overflow-y-auto">
          {leftItems.map(({ title, id, checked }) => (
            <div
              onClick={() => handleClick(id, checked, 'LEFT')}
              className={`w-full p-2 text-center rounded-md cursor-pointer text-white ${checked ? 'bg-blue-600' : "bg-gray-900"
                }`}
              id={id}
              key={id}
            >
              {title}
            </div>
          ))}
        </div>
        <div className="flex flex-col gap-4 justify-center items-center">
          <button
            className="p-2 rounded-md bg-gray-300"
            onClick={() => handleTransferBtn('LEFT_TO_RIGHT')}
          >
            {'>>'}
          </button>
          <button
            className="p-2 rounded-md bg-gray-300"
            onClick={() => handleTransferBtn('RIGHT_TO_LEFT')}
          >
            {'<<'}
          </button>
        </div>
        <div className="w-full flex flex-col gap-4 border-2 border-gray-800 h-60 p-4 overflow-y-auto">
          {rightItems.map(({ title, id, checked }) => (
            <div
              onClick={() => handleClick(id, checked, 'RIGHT')}
              className={`w-full text-center p-2 rounded-md text-white cursor-pointer ${checked ? 'bg-blue-600' : "bg-gray-900"
                }`}
              id={id}
              key={id}
            >
              {title}
            </div>
          ))}
        </div>
      </div>
    </div>
  )
};

export default TransferList;