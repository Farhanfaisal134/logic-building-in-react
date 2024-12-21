const useTraverseTree = () => {

  function insertNode(tree, folderId, item, isFolder) {
    if (tree.id === folderId && tree.isFolder) {
      tree.items.unshift({
        id: new Date().getTime(),
        name: item,
        isFolder: isFolder,
        items: [],
      });
      return tree;
    };

    let latestNode = [];

    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder);
    });

    return { ...tree, items: latestNode };
  };

  function deleteNode(tree, nodeId) {
    if (!tree.items) return tree;
    const updatedItems = tree.items.filter((item) => item.id !== nodeId);

    const newItems = updatedItems.map((item) => {
      if (item.isFolder) {
        return deleteNode(item, nodeId);
      };
      return item;
    });

    return { ...tree, items: newItems };
  };

  return { insertNode, deleteNode };
};

export default useTraverseTree;