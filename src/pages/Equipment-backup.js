import React from 'react'

import EquipmentList from '../components/EquipmentList'
import EquipmentAdd from '../components/EquipmentAdd'

function Cadastro() {
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
          <EquipmentAdd />
        </div>
        <div>
          <EquipmentList />
        </div>
      </div>
    </>
  )
}

export default Cadastro
