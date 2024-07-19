import React, { useState } from "react";

const Folder = ({ explorer }) => {
  const [expand, setExpand] = useState(false);
  const [showInput, setShowInput] = useState({
    isVisible: false,
    isFolder: null,
  });

  const handleNewFolder = (e, isFolder) => {
    e.stopPropagation();
    setExpand(true)
    setShowInput({
      isVisible: true,
      isFolder,
    });
  };

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
                onBlur={() => setShowInput({ ...showInput, isVisible: false })}
                className="inputContainer_input"
                autoFocus
              />
            </div>
          )}

          {explorer.items.map((item) => {
            return <Folder explorer={item} key={item.id} />;
          })}
        </div>
      </div>
    );
  } else {
    return <span className="file">📄{explorer.name}</span>;
  }
};

export default Folder;
