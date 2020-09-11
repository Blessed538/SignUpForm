import React, {useEffect, useState} from 'react'

const Effect = ()  => {
  const [user, setName] = useState(null),
  const [searchQuery, setSearchQuery] = useState('beans') 

  return (
    <div>
      <input type='search' value={searchQuery}
      onChange={event => setSearchQuery(event.target.value)} />
      {
        user ? (
          <div>
            <h3>{user.name}</h3>
            <h3>{user.username}</h3>
            <h3>{user.email}</h3>
          </div>
        ): (
          <p>No user found</p>
        )
      }
    </div>
  )
}

export default Effect;