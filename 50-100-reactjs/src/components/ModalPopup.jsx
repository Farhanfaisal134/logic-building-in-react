import React, { useEffect, useRef } from 'react'

const ModalPopup = () => {
  const [showModal, setShowModel] = useState(false)

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

const Model = ({ id, header, body, footer, onClose }) => {
  const modalRef = useRef();

  useEffect(() => {
    function handleClickOutside(event) {
      if (modalRef.current && !modalRef.current.contains(event.target)) {
        onClose();
      };
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <div
      id={id || "Modal"}
      className="fixed left-0 top-0 w-full h-full z-50 overflow-auto bg-black 
      bg-opacity-50 flex items-center justify-center">
      <div ref={modalRef}
        className="bg-white w-[90%] max-w-[600px] border rounded-lg shadow-lg relative p-4">
        <div className="bg-green-500 text-white px-4 py-2 rounded-t-lg flex justify-between items-center">

          <div></div>
          <h2 className="text-center text-xl">{header ? header : "Header"}</h2>
          <span onClick={onClose}
            className="cursor-pointer text-xl font-bold">
            &times;
          </span>
        </div>

        <div className="p-6 text-center">{body ? body : <p>This is our Modal Body</p>}</div>

        <div className="bg-gray-500 text-white text-center font-bold py-4 rounded-b-lg">{footer ? footer : "Footer"}</div>
      </div>
    </div >
  );
}
export default ModalPopup