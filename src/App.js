import './App.css'
import Title from './component/Title'
import Content from './component/Content'
import { createContext, useState } from 'react'

export const themeContext = createContext();

function App() {
  const [theme, setTheme] = useState("light");
  return (
    <themeContext.Provider value={{ theme, setTheme }}>
      <div>
        <Title />
        <Content />
      </div>
    </themeContext.Provider>
  );
}

export default App;
