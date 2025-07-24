import { useState } from 'react'
import './App.css'

function App() {

  return (
    <>
      <div style={{width: '2.6667rem',height: '5rem',backgroundColor: 'red'}}>
        盒子模型1
      </div>
      <div style={{width: '3.4667rem',height: '5rem',backgroundColor: 'yellow'}}>
        盒子模型2
      </div>

      <div className="box"></div>
    </>
  )
}

export default App
