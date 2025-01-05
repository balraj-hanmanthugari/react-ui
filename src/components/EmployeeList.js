import React, { useState, useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';

function EmployeeList() {
    const [state, setState] = useState([]);
    const navigate = useNavigate();

    useEffect(() => {
        axios.get('http://localhost:8080/student?name=e')
            .then((res) => {
                setState(res.data.students);
            })
            .catch((error) => {
                console.log(error);
            });
        //setState([{ "id": 1, "name": "emp1", "mobile": 9959453851, "email": "emp1@gmail.com" }, { "id": 3, "name": "em3", "mobile": 9959453853, "email": "emp3@gmail.com" }, { "id": 5, "name": "empp5", "mobile": 9959453855, "email": "emp5@gmail.com" }, { "id": 7, "name": "emp7", "mobile": 9959453857, "email": "emp7@gmail.com" }, { "id": 9, "name": "empstu9", "mobile": 9959453859, "email": "emp9@gmail.com" }]);
    }, []);

    const updateEmployee = (id) => {
        navigate('/employees/'+id);
    };

    const deleteEmployee = (id) => {
        axios.delete('http://localhost:8080/student/'+id)
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
                    <Link to="/employees/add" className="btn btn-primary text-right">Create Employee</Link>
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
                                state?.map((emp) => {
                                    return (
                                        <tr>
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