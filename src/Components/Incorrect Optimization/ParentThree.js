import React, {useState} from 'react'
import { MemoizedChildFour } from './ChildFour'
import { MemoizedChildThree } from './ChildThree'

export const ParentThree = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Qais')
    console.log('ParentThree Render')
  return (
    <div>
        <button onClick={() => setCount((count) => count + 1)}>Count - {count}</button>
        <button onClick={() => setName('Sahilkhan')}>Change Name</button>
        <MemoizedChildFour name={name} />
        {/* <MemoizedChildThree name={name}>
            <strong>Hello</strong>
        </MemoizedChildThree> */}
    </div>
  )
}

export default ParentThree