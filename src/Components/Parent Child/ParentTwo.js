import React, {useState} from 'react'
import { MemoizedChildTwo } from './ChildTwo'

export const ParentTwo = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Qais')
    console.log('ParentTwo Render')
  return (
    <div>
        <button onClick={() => setCount((count) => count + 1)}>Count - {count}</button>
        <button onClick={() => setName('Sahilkhan')}>Change Name</button>
        <MemoizedChildTwo name={name}/>
    </div>
  )
}

export default ParentTwo