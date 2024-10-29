import React, { useState } from 'react'
import { MdDeleteForever } from "react-icons/md";
import { CiEdit } from "react-icons/ci";

const ListItem = (
  {
    todo,
    handleComplete,
    handleDelete,
    handleUpdate,
  }) => {
  const [isEditing, setIsEditing] = useState(false);
  const [udpatedValue, setUpdatedValue] = useState(todo.value)

  function handleUpdateClick() {
    handleUpdate(todo.id, udpatedValue)
    setIsEditing(false)
  };

  return (
    <div
      className='bg-slate-700 px-2 py-2 flex justify-between items-center text-xl w-full'>
      {
        todo.isCompleted ?
          (
            <p className='w-full font-bold line-through text-slate-300'>{todo.value}</p>
          ) : isEditing ? (
            <input
              value={udpatedValue}
              type="text"
              className='w-full p-2 outline-none text-black'
              onChange={(e) => setUpdatedValue(e.target.value)}
              onKeyDown={(e) => {
                if (e.key === "Enter") {
                  handleUpdateClick()
                  setIsEditing(false)
                }
              }}
            />
          ) : (
            <p className='w-full font-bold'>{todo.value}</p>
          )
      }

      <div className='flex gap-1 items-center'>
        <button
          onClick={() => handleDelete(todo.id)}
          className='w-12 h-12 rounded-md p-1 bg-slate-900 flex justify-center items-center'>
          <MdDeleteForever size={30} />
        </button>
        <button
          onClick={() => handleComplete(todo.id)}
          className='w-12 h-12 rounded-md p-1 bg-slate-900 flex justify-center items-center'>
          {todo.isCompleted ? "❌" : " ✅"}
        </button>
        <button
          onClick={() => {
            if (isEditing) {
              handleUpdateClick()
            } else {
              setIsEditing(true)
            }
          }}
          className='w-12 h-12 rounded-md p-1 bg-slate-900 flex justify-center items-center'>
          {isEditing ? "upd" : <CiEdit size={30} />}
        </button>
      </div>
    </div>
  )
}

export default ListItem