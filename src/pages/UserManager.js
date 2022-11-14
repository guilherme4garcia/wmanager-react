import React from 'react'
import EquipmentList from '../components/EquipmentList'

function Equipment() {
  const user = JSON.parse(localStorage.getItem('item'))

  if (!user.admin) {
    window.location.href = 'http://localhost:3000/'
  }
  return <EquipmentList />
}

export default Equipment
