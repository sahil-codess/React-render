import React,{ useState} from 'react'
import { ChildA } from './ContextChildren'

export const countContext = React.createContext()
const CountProvider = countContext.Provider 

export const ContextParent = () => {
    const [count, setCount] = useState(0)

    console.log("ContextParent Render")
  return (
    <div>
        <button onClick={() => setCount(c => c + 1)}>Count {count}</button>
        <CountProvider value={count}>
            <ChildA />
        </CountProvider>
    </div>
  )
}
