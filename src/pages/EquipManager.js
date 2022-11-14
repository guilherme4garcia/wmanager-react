import React from 'react'
import AllEquips from '../components/AllEquips'

function EquipManager() {
  const user = JSON.parse(localStorage.getItem('item'))

  if (!user.admin) {
    window.location.href = 'http://localhost:3000/'
  }

  return <AllEquips />
}

export default EquipManager
