import React, {useState} from 'react'

const initState = {
    fname: 'Qais',
    lname: 'Erfan'
}

export const ObjectUseState = () => {

    const [person, setPerson] = useState(initState)

    const changeName = () => {
        person.fname = 'Sahilkhan'
        person.lname = 'Ahmadzai'

        setPerson(person)

    }

    console.log('ObjectState Render');

  return (
    <div>
        <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}
