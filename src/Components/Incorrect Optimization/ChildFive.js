import React from 'react'

const ChildFive = ({name, person}) => {

    console.log('ChildFive Render')
  return (
    <div>
        Hello {name} 
    </div>
  )
}

export const MemoizedChildFive = React.memo(ChildFive)