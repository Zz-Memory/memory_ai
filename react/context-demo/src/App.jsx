import { useState } from 'react'
import './App.css'
import Page from './components/Page'
import {ThemeContext} from './ThemeContext'
// import Uncle from './components/Uncle'


function App() {
  const [theme, setTheme] = useState("light");
  console.log(ThemeContext,'----------------------');

  return (
    <ThemeContext.Provider value={theme}>
    <Page></Page>
    <button onClick={() => setTheme(theme === "dark" ? "light" : "dark")}>切换主题</button>
    {/* <Uncle></Uncle> */}
      {/* <Parent>
        <Child>
          <GrandChild>
            <GreatGrandChild>
              <h1>Hello World</h1>
            </GreatGrandChild>
          </GrandChild>
        </Child>
      </Parent> */}
    </ThemeContext.Provider>
  )
}

export default App
