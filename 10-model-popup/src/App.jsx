import React from 'react'
import { useState } from 'react'
import Model from './components/Model'

const App = () => {
  const [showModal, setShowModel] = useState(false)
  console.log(showModal);


  function handleToggleModalPopup() {
    setShowModel(!showModal)
  };

  function onClose() {
    setShowModel(false)
  };

  return (
    <>
      <div className='w-full h-screen flex justify-center items-center bg-gray-100'>
        <button
          onClick={handleToggleModalPopup}
          className='px-4 py-2 text-white bg-gray-600 rounded-lg shadow-md hover:bg-gray-700 transition-colors duration-300'
        >
          Open Modal Popup
        </button>
      </div>
      {
        showModal && (
          <Model
            id={"custom-id"}
            header={<h1 className="text-lg font-bold">Customized Header</h1>}
            footer={<h1 className="text-lg">Customized Footer</h1>}
            onClose={onClose}
            body={<div className="text-gray-700">Customized body content goes here</div>}
          />
        )
      }
    </>
  )
}

export default App