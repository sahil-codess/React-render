import React, {useState, useMemo, useCallback} from 'react'
import { MemoizedChildFive } from './ChildFive'

export const ParentFour = () => {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('Qais')
    console.log('ParentFour Render')

    const person = {
        fname: 'Wais',
        lname: 'Ahmadzai'
    }

    const memoizedPerson = useMemo(() => person, [])

    const handlClick = () => {}

    const memoizedHandle = useCallback(handlClick, [])


  return (
    <div>
        <button onClick={() => setCount((count) => count + 1)}>Count - {count}</button>
        <button onClick={() => setName('Sahilkhan')}>Change Name</button>
        {/* <MemoizedChildFive name={name} person={memoizedPerson} /> */}
        <MemoizedChildFive name={name} handlClick={memoizedHandle} />
    </div>
  )
}

export default ParentFour