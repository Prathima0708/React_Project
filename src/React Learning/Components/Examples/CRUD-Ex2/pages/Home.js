import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Home = () => {
  const [users,setUsers]=useState([])
  useEffect(()=>{
    getUserData()
  },[])
  const getUserData = async () => {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    const jsonData = await response.json();
    setUsers(jsonData);
  };

  return (
    <div className="App">
    <h2>User Data</h2>

    <p>
      <strong>Name:</strong> {users.name}
    </p>
    <p>
      <strong>Website:</strong> {users.website}
    </p>
    <p>
      <strong>Email:</strong> {users.email}
    </p>
    <p>
      <strong>Phone:</strong> {users.phone}
    </p>
  </div>
  )
}

export default Home