
import React,{useContext, useState} from "react";

import {ThemeContext} from "../App"

export default function CounterHooks({initialCount}){
  
     const [count,setCount] = useState(initialCount);
     const style = useContext(ThemeContext)
      return(
        <div>
        <button  style={style} onClick={() => setCount(count-1)}>-</button>
        {console.log('counterhooks')}
          <span>{count}</span>
        <button style={style} onClick={() => setCount(count+1)}>+</button>
        </div>
      )


}