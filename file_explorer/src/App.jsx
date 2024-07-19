import React, { useState } from 'react'
import './App.css'
import explorer from './data/folderData'
import Folder from './component/Folder.jsx'

const App = () => {
  const [explorerData, setExplorerData] = useState(explorer)
  console.log(explorer);

  return (
    <div className='App'>
      <Folder explorer={explorerData} />
    </div>
  )
}

export default App