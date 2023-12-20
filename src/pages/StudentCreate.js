import axios from 'axios';
import React, { useState } from 'react'
import { Link } from "react-router-dom";
import { useNavigate } from 'react-router-dom';

const StudentCreate = () => {

    const history = useNavigate();
    const [student , setStudent] = useState({
        name:"",
        email:"",
        course:"",
        phone:""
    })

    const handleInput = (e) => {
        setStudent((prevState) => ({
            ...prevState,
            [e.target.name]: [e.target.value],
        }))
    }
    
    const sendRequest = async () => {
        await axios.post("http://localhost:8000/api/students" , {
            name:String(student.name),
            email:String(student.email),
            course:String(student.course),
            phone:String(student.phone),

        })
    }

    const FormSubmit = async(e) => {
        e.preventDefault();
        sendRequest().then(()=>  history("/students"))
    }

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Add Student </h4>
              <Link to="/students" className="btn btn-danger float-end ">
                Back
              </Link>
            </div>
            <div className='card-body'>
            <form onSubmit={FormSubmit}>
                <div className='mb-3'>
                    <label>Name</label>
                    <input type='text' name='name' onChange={handleInput} className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label>Email</label>
                    <input type='email' name='email'  onChange={handleInput} className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label>Course</label>
                    <input type='text' name='course' onChange={handleInput} className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label>Phone</label>
                    <input type='text' name='phone' onChange={handleInput} className='form-control'/>
                </div>
                <div className='mb-3'>
                    <button type='submit' className='btn btn-primary'>Save Student</button>
                </div>
            </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default StudentCreate