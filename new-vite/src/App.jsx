import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Inline from './Inline'
import External from './External'

import Internal from './Internal'


function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      {/* <Inline /> */}
      {/* <Internal /> */}

      {/* <External /> */}
      <div className="container mt-5">
        <h1 className="text-primary">React + Bootstrap</h1>
        <button className="btn btn-success">Click Me</button>
      </div>
    </>
  )
}

export default App
