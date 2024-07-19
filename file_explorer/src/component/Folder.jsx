import React, { useState } from "react";

// Folder component to display and manage a folder structure
const Folder = ({ explorer, handleInsertNode }) => {
  // State to manage folder expansion
  const [expand, setExpand] = useState(false);

  // State to manage visibility and type of the input field
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: null,
  });

  // Function to handle the creation of a new folder or file
  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation(); // Prevent event from bubbling up
    setExpand(true); // Expand the folder to show the input field
    setShowInput({
      isVisible: true,
      isFolder, // Determine if the new item is a folder or file
    });
  };

  // Function to handle the addition of a new folder or file
  const onAddFolder = (e) => {
    if (e.keyCode === 13 && e.target.value) {
      // Check if Enter key is pressed and input is not empty
      handleInsertNode(explorer.id, e.target.value, showInput.isFolder); // Insert the new node
      setShowInput({ ...showInput, isVisible: false }); // Hide the input field
    }
  };

  // Render folder structure if the current explorer item is a folder
  if (explorer.isFolder) {
    return (
      <div style={{ marginTop: 5 }}>
        <div className="folder" onClick={() => setExpand(!expand)}>
          <span>📁{explorer.name}</span>
          <div>
            <button onClick={(e) => handleNewFolder(e, true)}>Folder +</button>
            <button onClick={(e) => handleNewFolder(e, false)}>File +</button>
          </div>
        </div>

        <div style={{ display: expand ? "block" : "none", paddingLeft: 25 }}>
          {showInput.isVisible && (
            <div className="inputContainer">
              <span>{showInput.isFolder ? "📁" : "📄"}</span>
              <input
                type="text"
                onKeyDown={onAddFolder}
                onBlur={() => setShowInput({ ...showInput, isVisible: false })} // Hide input on blur
                className="inputContainer_input"
                autoFocus // Automatically focus the input field
              />
            </div>
          )}

          {explorer.items.map((item) => {
            return (
              <Folder
                handleInsertNode={handleInsertNode}
                explorer={item}
                key={item.id}
              />
            ); // Recursively render child folders/files
          })}
        </div>
      </div>
    );
  } else {
    // Render file item
    return <span className="file">📄{explorer.name}</span>;
  }
};

export default Folder;
