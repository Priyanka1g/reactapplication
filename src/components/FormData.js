import React, { useState } from 'react'
import { useEffect } from 'react';
import './FormData.css'
import { Link } from 'react-router-dom';
import { Table, Button, Modal, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useDispatch } from 'react-redux';
import { addUser } from '../store/userSlice';
export default function FormData({onAddItem}) {
  // intially the object is empty for all the field 
  // const [users, setUsers] = useState([]);
  const [data, setData] = useState({ name: '', age: '', company: '', feedback:'', id:'' })

  const dispatch = useDispatch()


  const changeHandler = (event) => {
    setData({ ...data, [event.target.name]: event.target.value })
    console.log(data);
  }


  const submitHandler = () => {
    if (data.name && data.age && data.company&&data.feedback) {
      const newUser = { ...data, id: Date.now() }
      // setUsers([...users, data])
      dispatch(addUser(newUser))
      setData({ name: '', age: '', company: '', feedback:'', id:'null'})
    } else {
      alert('Please fill out all fields before submitting.');
    }
  }


  return (
    <div className="form-container">
      <div className="form-inputs">

        <h2>Enter user data</h2>
        <div className="form-group">
          <label htmlFor="name">Name:</label>
          <input placeholder='Enter user name' type='text'  value={data.name} name="name" onChange={changeHandler} required></input>
        </div>
        <div className="form-group">
          <label htmlFor="age">Age:</label>
          <input placeholder='Enter user age' type='number'  value={data.age} name="age" onChange={changeHandler} required></input>
        </div>
        <div className="form-group">
          <label htmlFor="company">Company:</label>
          <input placeholder='Enter user Company name'  type='text' value={data.company} name="company" onChange={changeHandler} required></input>
        </div>
        <div className="form-group">
          <label htmlFor="feedback">Feeedback:</label>
          <input placeholder='Enter user feedback'  type='text' value={data.feedback} name="feedback" onChange={changeHandler} required></input>
        </div>
        <button onClick={submitHandler} style={{ marginTop: '20px' }}>Submit</button>
      </div>
      <Link to="/userdata">
        <Button variant="primary" style={{ marginTop: '20px' }}>Go to User Data</Button>
      </Link>
    </div >
  )
}