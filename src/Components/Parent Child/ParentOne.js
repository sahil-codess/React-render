import React, {useState} from 'react'
import { ChildOne } from './ChildOne'

export const ParentOne = () => {
    const [count, setCount] = useState(0)

    console.log('ParentOne Render')
  return (
    <div>
        <button onClick={() => setCount((count) => count + 1)}>Count - {count}</button>
        <button onClick={() => setCount(0)}>Count to 0</button>
        <button onClick={() => setCount(5)}>Count to 5</button>
        <ChildOne />
    </div>
  )
}

export default ParentOne