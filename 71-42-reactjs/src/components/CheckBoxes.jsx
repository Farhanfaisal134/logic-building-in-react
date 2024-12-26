import React, { useState } from 'react'

const CheckBoxes = () => {
  const [arr, setArr] = useState([
    { name: "Pakistan", checked: false },
    { name: "India", checked: false },
    { name: "Malisiya", checked: false }
  ]);

  function handleClick(idx) {
    const updatedArr = arr.map((item, index) =>
      index === idx ? { ...item, checked: !item.checked } : item
    );
    setArr(updatedArr);
  };

  function handleDel(idx) {
    setArr((prev) => prev.filter((_, index) => index !== idx))
  };

  return (
    <div className='p-4 md:p-8'>
      {
        arr.map((item, index) => (
          <div key={item.name} className='flex gap-2'>
            <input type="checkbox" checked={item.checked} onChange={() => handleClick(index)} />
            <p>{item.name}</p>
            {item.checked && <button onClick={() => handleDel(index)}>X</button>}
          </div>
        ))
      }
    </div>
  )
}

export default CheckBoxes