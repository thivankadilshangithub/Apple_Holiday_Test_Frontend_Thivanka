import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

import Loading from "../components/Loading";

const Student = () => {

const [students, setStudents] = useState([]);
const [loading, setLoading] = useState(true);

const Load = async () => {
    const res = await axios.get("http://localhost:8000/api/students");
    const result = await res.data.students;
    return result;
  };

  useEffect(() => {
    Load().then((data) => setStudents(data));
    setLoading(false);
  }, []);

  const deleteStudent = (e,id) => {
    e.preventDefault();

    const thisClicked = e.currentTarget;
    thisClicked.closest("tr").remove();

    axios.delete(`http://localhost:8000/api/students/${id}/delete`)
    
  }

  if(loading) {
    return (
        <Loading />
    )
  }

  console.log("students", students);

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-12">
          <div className="card">
            <div className="card-header">
              <h4>Student List</h4>
              <Link to="/students/create" className="btn btn-primary float-end ">
                Add Student
              </Link>
            </div>
            <div className="card-body">
              <table className="table table-stripes">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Course</th>
                    <th>Email</th>
                    <th>Phone</th>
                    <th>Edit</th>
                    <th>Delete</th>
                  </tr>
                </thead>
                <tbody>
                  {students &&
                    students.map((item, index) => (
                      <tr key={index}>
                        <td>{item.name}</td>
                        <td>{item.course}</td>
                        <td>{item.email}</td>
                        <td>{item.phone}</td>
                        <td>
                          <Link to={`/students/${item.id}/edit`}
                          className="btn btn-success">
                            Edit
                          </Link>
                        </td>
                        <td>
                          <button 
                          type="button"
                          onClick={(e) => deleteStudent(e,item.id)}
                          className="btn btn-danger">Delete</button>
                        </td>
                      </tr>
                    ))}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Student
