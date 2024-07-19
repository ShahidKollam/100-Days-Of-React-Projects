const useTraverseTree = () => {

  // Function to insert a new node (folder or file) into the tree
  function insertNode(tree, folderId, item, isFolder) {

    // Check if the current node matches the folderId and is a folder
    if (tree.id === folderId && tree.isFolder) {

      // Insert the new item at the beginning of the items array
      tree.items.unshift({
        id: new Date().getTime(), // Generate a unique id based on the current timestamp
        name: item, // Set the name of the new item
        isFolder, // Set whether the new item is a folder or file
        items: [], // Initialize an empty items array for the new folder
      });
      return tree; 
    }

    // If the current node is not the target folder, recursively traverse its children
    let latestNode = [];
    latestNode = tree.items.map((ob) => {
      return insertNode(ob, folderId, item, isFolder); // Recursively call insertNode for each child
    });

    // Return the current node with its updated children
    return { ...tree, items: latestNode };
  }

  // Return the insertNode function to be used by other components
  return { insertNode };
};

export default useTraverseTree;
