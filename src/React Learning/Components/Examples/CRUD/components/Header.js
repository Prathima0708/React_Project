import React from 'react'
import styles from '../../CRUD/styles.module.css'

const Header = ({setIsAdding}) => {
  return (
    <div>
      <h1>Employee Management Software</h1>
      <div  style={{ marginTop: '30px', marginBottom: '18px' }}>
        <button onClick={()=>setIsAdding(true)} className={styles.round_button}>Add Button </button>
      </div>
    </div>
  )
}

export default Header