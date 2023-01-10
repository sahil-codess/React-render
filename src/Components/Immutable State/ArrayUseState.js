import React, {useState} from 'react'

const initState = ['Qais', 'Erfan']

export const ArrayUseState = () => {
    const [person, setPerson] = useState(initState)

    const handleClick = () => {
      // person.push('Sahilkhan')
      // person.push('Ahmadzai')
      // setPerson(person)

      const newPersons = [...person]
      newPersons.push('Sahilkhan')
      newPersons.push('Ahmadzai')
      setPerson(newPersons)
    }

    console.log('ArrayUseState Render')
  return (
    <div>
      <button onClick={handleClick}>click</button>
      {
        person.map(person => (
          <div key={person}>{person}</div>
        ))
      }
    </div>
  )
}
