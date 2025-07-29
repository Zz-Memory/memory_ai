import { useState } from 'react'
import './App.css'


import NameEditComponent from './components/NameEditComponent.tsx'
function App() {
  // js 代码
  // const [name, setName] = useState('initialName')
  // typescript 代码
  const [name, setName] = useState<string>('initialName')
  // 单向数据流
  const setUsernameState = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value)
  }
  return (
    <>
      <h1>Hello {name}!</h1>
      <NameEditComponent userName={name} onChange={setUsernameState}></NameEditComponent>
    </>
  )
}

export default App
