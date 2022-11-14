import React from 'react'

import LandingUser from '../components/LandingUser'

function User() {
  const user = JSON.parse(localStorage.getItem('item'))

  if (user.admin) {
    window.location.href = 'http://localhost:3000/'
  }

  return (
    <>
      <LandingUser />
    </>
  )
}

export default User
