import React from 'react'
import styles from '../../CRUD/styles.module.css'

const List = ({ employees, handleEdit, handleDelete}) => {
  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: null
});
  return (
    <div className={styles.contain_table}>
      <table className={styles.striped_table}>
  <thead>
  <tr>
                        <th>No.</th>
                        <th>First Name</th>
                        <th>Last Name</th>
                        <th>Email</th>
                        <th>Salary</th>
                        <th>Date</th>
                        <th colSpan={2} className="text-center">
                            Actions
                        </th>
                    </tr>
  </thead>
 
  <tbody>
  {employees.length > 0 ? (
                        employees.map((employee, i) => (
                            <tr key={employee.id}>
                                <td>{i + 1}</td>
                                <td>{employee.firstName}</td>
                                <td>{employee.lastName}</td>
                                <td>{employee.email}</td>
                                <td>{formatter.format(employee.salary)}</td>
                                <td>{employee.date} </td>
                                <td className={styles.text_right}>
                                    <button
                                        onClick={() => handleEdit(employee.id)}
                                        className={[styles.button,styles.muted_button]}
                                    >
                                        Edit
                                    </button>
                                </td>
                                <td className="text-left">
                                    <button
                                        onClick={() => handleDelete(employee.id)}
                                        className={[styles.button,styles.muted_button]}
                                    >
                                        Delete
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={7}>No Employees</td>
                        </tr>
                    )}
  </tbody>
</table>
    </div>
  )
}

export default List