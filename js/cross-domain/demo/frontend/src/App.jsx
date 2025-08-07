import { 
  useState,
  useEffect 
} from 'react'
import './App.css'

function App() {
  useEffect(() => {
    // (async() => {
    //   // 前后端联调
    //   const res = await fetch('http://localhost:8080/api/hello');
    //   const data = await res.json();
    //   console.log(data);
    // })()
    
  }, [])

  return (
    <>
      <h1>Hello World!</h1>
    </>
  )
}

export default App
