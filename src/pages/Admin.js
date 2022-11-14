import React from 'react'

import Signup from '../components/Signup'
import UserList from '../components/UserList'

function Admin() {
  const user = JSON.parse(localStorage.getItem('item'))

  if (!user.admin) {
    window.location.href = 'http://localhost:3000/'
  }

  return (
    <>
      <div
        style={{
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          margin: '5rem'
        }}
      >
        <div style={{ marginRight: '5rem' }}>
          <Signup />
        </div>
        <div>
          <UserList />
        </div>
      </div>
    </>
  )
}

export default Admin
