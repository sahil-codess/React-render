import React, {useState} from 'react'

const initState = {
    fname: 'Qais',
    lname: 'Erfan'
}

export const ObjectUseState = () => {
    const [person, setPerson] = useState(initState)

    const changeName = () => {
        // person.fname = 'Sahilkhan'
        // person.lname = 'Ahmadzai'
        // setPerson(person)

        const newPerson = {...person}
        newPerson.fname = 'SahilKhan'
        newPerson.lname = 'Ahmadzai'
        setPerson(newPerson)

        console.log(newPerson)
    }
    console.log('ObjectState Render');
  return (
    <div>
        <button onClick={changeName}>{person.fname} {person.lname}</button>
    </div>
  )
}