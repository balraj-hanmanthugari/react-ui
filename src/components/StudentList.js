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
        //import React, { useState, useEffect } from 'react';
        // import './style.css';
        
        // export default function App() {
        //   const [state, setState] = useState(10);
        //   const [color, setColor] = useState({
        //     background: 'green',
        //   });
        //   const [timerAction, setTimerAction] = useState('pause');
        
        //   const setBackgroundColor = () => {
        //     setColor({
        //       background: state <= 6 ? 'red' : 'green',
        //     });
        //   };
        
        //   useEffect(() => {
        //     if (timerAction === 'pause') {
        //       return;
        //     } else if (timerAction === 'reset') {
        //       setState(10);
        //       setBackgroundColor();
        //       return;
        //     }
        //     if (state === 0) {
        //       return;
        //     }
        //     const interval = setInterval(() => {
        //       setState(state - 1);
        //       setBackgroundColor();
        //     }, 1000);
        //     return () => {
        //       clearInterval(interval);
        //     };
        //   }, [state, timerAction]);
        
        //   const startTimer = () => {
        //     setTimerAction('start');
        //   };
        //   const pauseTimer = () => {
        //     setTimerAction('pause');
        //   };
        //   const resetTimer = () => {
        //     setTimerAction('reset');
        //   };
        
        //   return (
        //     <>
        //       <div style={color}>{state}</div>
        //       <button onClick={startTimer}>Start</button>
        //       <button onClick={pauseTimer}>Pause</button>
        //       <button onClick={() => resetTimer()}>Reset</button>
        //     </>
        //   );
        // }
        
    )
}

export default StudentList;