import React, { useState } from 'react'
import Swal from 'sweetalert2';
import styles from '../../CRUD/styles.module.css'
import { employeesData } from '../data';
import Header from '../components/Header'
import List from '../components/List'
import Add from '../components/Add'
import Edit from '../components/Edit'

const Dashboard = () => {
  const [employees,setEmployees]=useState(employeesData)
  const [selectedEmployee, setSelectedEmployee] = useState(null);
  const [isAdding, setIsAdding] = useState(false);
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit=()=>{

  }

  const handleDelete=()=>{

  }
  return (
    <div className={styles.container}>
 {!isAdding && !isEditing && (
                <>
                    <Header
                        setIsAdding={setIsAdding}
                    />
                    <List
                        employees={employees}
                       
                    />
                </>
            )}

{isAdding && (
                <Add
                    employees={employees}
                    setEmployees={setEmployees}
                    setIsAdding={setIsAdding}
                />
            )}

{isEditing && (
                <Edit
                    employees={employees}
                    selectedEmployee={selectedEmployee}
                    setEmployees={setEmployees}
                    setIsEditing={setIsEditing}
                />
            )}
    </div>
  )
}

export default Dashboard