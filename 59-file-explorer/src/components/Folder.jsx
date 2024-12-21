import React, { useState } from "react";

const Folder = ({
  handleInsertNode,
  explorer,
  handleDeleteNode,
}) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    visible: false,
    isFolder: false,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true);
    setShowInput({
      visible: true,
      isFolder,
    });
  };

  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder);
      setShowInput({ ...showInput, visible: false });
    };
  };

  if (explorer.isFolder) {
    return (
      <>
        <div onClick={() => setExpand(!expand)} className="max-w-[400px] flex justify-between items-center 
        cursor-pointer p-1 bg-gray-300 md:rounded-md mb-1">
          <span>📁 {explorer.name}</span>

          <div className="flex gap-1">
            <button className="px-1 border border-black bg-white text-nowrap" onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button className="px-1 border border-black bg-white text-nowrap" onClick={(e) => handleNewFolder(e, false)}>File +</button>
            <button className="px-1 border border-black bg-white" onClick={() => handleDeleteNode(explorer.id)}>Delete</button>
          </div>
        </div>
        <div className={`${expand ? "block" : "hidden"} pl-2 space-y-1`}>
          {showInput.visible && (
            <div>
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                className="border border-gray-500 px-1 outline-none"
                autoFocus
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, visible: false })}
              />
            </div>
          )}
          {/* Rename Input */}
          {explorer.items.map((exp) => {
            return (
              <Folder
                key={exp.id}
                explorer={exp}
                handleInsertNode={handleInsertNode}
                handleDeleteNode={handleDeleteNode}
              />
            );
          })}
        </div>
      </>
    )
  } else {
    return (
      <div className="flex flex-col gap-1">
        <div className="flex gap-1">
          📄 {explorer.name}
          <button className="px-1 bg-gray-300" onClick={() => handleDeleteNode(explorer.id)}>Delete</button>
        </div>
      </div>
    )
  };
};

export default Folder;
