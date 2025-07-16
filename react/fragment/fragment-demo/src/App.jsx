import { useState } from 'react'
import './App.css'
import Demo from './components/Demo'

function App() {
  const items = [
    {
      id: 1,
      title: '标题1',
      content: '内容1',
    },
    {
      id: 2,
      title: '标题2',
      content: '内容2',
    },
  ]

  return (
    <>
      <Demo items={items} />
    </>
  )
}

export default App
