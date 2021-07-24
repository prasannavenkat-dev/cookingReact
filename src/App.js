import React,{useState} from "react"
import Counter from "./components/Counter"
import CounterHooks from "./components/CounterHooks"

export const ThemeContext = React.createContext()

function App() {

  const [theme,setTheme] = useState('yellow')

  return (
    <ThemeContext.Provider value={{backgroundColor:theme}}>
    <p>COUNTER</p>
    <Counter count={0} />
    <p>counterHOOKS</p>
    <CounterHooks initialCount={0} />
 {console.log('app')}
    <button onClick={ () => { 
      setTheme( theme==="red"? "blue" :"red")
    }} >
      Toggle Button
    </button>
    </ThemeContext.Provider>
  );
}

export default App;
