import React, { useState } from 'react'

const State = () => {
  const [name, setName] = useState('blessed')
  return (
    <div>
      <h1>{name}</h1>
      <button onClick={() => setName('Greatness')}>Set Name to Blessing</button>
    </div>
  )
}

export default State;