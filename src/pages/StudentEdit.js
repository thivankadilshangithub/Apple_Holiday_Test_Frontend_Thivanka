import axios from 'axios';
import React, { useEffect, useState } from 'react'
import { Link, useParams } from "react-router-dom";
import { useNavigate } from 'react-router-dom';


const StudentEdit = () => {

    let { id } = useParams();

    const history = useNavigate();
    const [student , setStudent] = useState({})

    useEffect(() => {
        axios.get(`http://localhost:8000/api/students/${id}/edit`).then(res => {
            console.log(res)
            setStudent(res.data.student);
        });
    },[id])

    const handleInput = (e) => { 
        e.persist();
        setStudent({
            ...student,
            [e.target.name]: e.target.value
        })
    }

    const UpdateStudent = (e) => {
        e.preventDefault();

        const data = {
            name:student.name,
            email:student.email,
            course:student.course,
            phone:student.phone,
        }

        axios.put(`http://localhost:8000/api/students/${id}/edit`,data)
        .then(()=>  history("/students"))  
    }

    if(Object.keys(student).length===0){
        return (
            <div className='container'>
                <h4>No such Student Id Found</h4>
            </div>
        )
    }
    
  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Edit Student </h4>
              <Link to="/students" className="btn btn-danger float-end ">
                Back
              </Link>
            </div>
            <div className='card-body'>
            <form onSubmit={UpdateStudent}>
                <div className='mb-3'>
                    <label>Name</label>
                    <input type='text' name='name' onChange={handleInput} value={student.name} className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label>Email</label>
                    <input type='email' name='email'  onChange={handleInput} value={student.email} className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label>Course</label>
                    <input type='text' name='course' onChange={handleInput} value={student.course} className='form-control'/>
                </div>
                <div className='mb-3'>
                    <label>Phone</label>
                    <input type='text' name='phone' onChange={handleInput} value={student.phone} className='form-control'/>
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

export default StudentEdit