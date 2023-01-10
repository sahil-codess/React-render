import React, {useState} from 'react'

export const UseState = () => {
    const [count, setCount] = useState(0)

    console.log('Usestate Render')
  return (
    <div>
        <button onClick={() => setCount((count) => count + 1)}>Count - {count}</button>
    </div>
  )
}

export default UseState