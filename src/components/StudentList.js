import React, { useEffect } from "react";
import { Link, useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from "react-redux";
import { getStudents, deleteStudent } from "../redux/StudentsReducer";

function StudentList() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { students, loading, error } = useSelector((state) => state.students);

    useEffect(() => {
        dispatch(getStudents());
    }, [dispatch]);

    const updateEmployee = (id) => {
        navigate('/students/' + id);
    };

    const deleteEmployee = (id) => {
        dispatch(deleteStudent(id));
    };

    return (
        <>
            <div className="card">
                <div className="card-header">
                    Student List
                    <Link to="/students/add" className="btn btn-primary ms-3">Create Student</Link>
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
                                students?.map((emp, index) => {
                                    return (
                                        <tr key={index}>
                                            <td>{emp?.id}</td>
                                            <td>{emp?.name}</td>
                                            <td>{emp?.email}</td>
                                            <td>{emp?.mobile}</td>
                                            <td>
                                                <button onClick={() => { updateEmployee(emp?.id) }} className="btn btn-info btn-sm btn-primary me-2">Edit</button>
                                                <button className="btn btn-info btn-sm btn-danger" onClick={() => deleteEmployee(emp?.id)}>Delete</button>
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

export default StudentList;