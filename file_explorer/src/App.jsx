import React, { useState } from "react";
import "./App.css";
import explorer from "./data/folderData";
import Folder from "./component/Folder.jsx";
import useTraverseTree from "./hooks/useTraverseTree.js";

const App = () => {
  const [explorerData, setExplorerData] = useState(explorer);
  const { insertNode } = useTraverseTree();
  console.log(explorer);

  const handleInsertNode = (folderId, item, isFolder) => {
    const finalTree = insertNode(explorerData, folderId, item, isFolder);
    setExplorerData(finalTree);
  };

  return (
    <div className="App">
      <Folder handleInsertNode={handleInsertNode} explorer={explorerData} />
    </div>
  );
};

export default App;
