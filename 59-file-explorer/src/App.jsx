import React, { useState } from 'react'
import explorer from './data';
import useTraverseTree from './hooks/useTraverseTree';
import Folder from './components/Folder';

const App = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode, deleteNode } = useTraverseTree();

  const handleDeleteNode = (nodeId) => {
    const finalTree = deleteNode(explorerData, nodeId);
    setExplorerData(finalTree);
  };

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className='md:p-2 py-2'>
      <Folder
        handleInsertNode={handleInsertNode}
        explorer={explorerData}
        handleDeleteNode={handleDeleteNode}
      />
    </div>
  )
};

export default App;