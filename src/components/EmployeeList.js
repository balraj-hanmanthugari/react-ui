import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EmployeeList() {
    const [state, setState] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/students?name=e')
            .then((res) => {
                setState(res.data.students);
            })
            .catch((error) => {
                console.log(error);
            });
    }, []);

    const updateEmployee = (id) => {
        navigate('/employees/'+id);
    };

    const deleteEmployee = (id) => {
        axios.delete('http://localhost:8080/students/'+id)
            .then((res) => {
                console.log(res);
                setState(
                    state.filter((item) => {
                        return item.id !== Number(id);
                    })
                );
            })
            .catch((error) => {
                console.log(error);
            });
    };

    return (
        <>
            <div className="card">
                <div className="card-header">
                    Employee List
                    <Link to="/employees/add" className="btn btn-primary ms-3">Create Employee</Link>
                </div>
                <div className="card-body">
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                                <th>Email</th>
                                <th>Mobile</th>
                                <th>Actions</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                state?.map((emp, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{emp?.id}</td>
                                            <td>{emp?.name}</td>
                                            <td>{emp?.email}</td>
                                            <td>{emp?.mobile}</td>
                                            <td>
                                                <button onClick={ ()=>{updateEmployee(emp?.id)} } className="btn btn-info btn-sm btn-primary me-2">Edit</button>
                                                <button className="btn btn-info btn-sm btn-danger" onClick={ () => deleteEmployee(emp?.id) }>Delete</button>
                                            </td>
                                        </tr>
                                    )
                                })
                            }
                        </tbody>
                    </table>
                </div>
            </div>
        </>
    )
}

export default EmployeeList;