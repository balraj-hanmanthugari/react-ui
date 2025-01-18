import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { createStudent, updateStudent } from "../redux/StudentsReducer";

function StudentForm() {
    const params = useParams();
    const [state, setState] = useState({
        id: '',
        name: '',
        email: '',
        mobile: ''
    });
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const { students, loading, error } = useSelector((state) => state.students);

    useEffect(()=>{
        //state.id=params.id;
        if(params.id) {
            const student = students.find((stu) => {
                return Number(stu.id) === Number(params.id);
            });
            setState(student);
        }
    }, [params, dispatch]);
    
    const submitEmployee = (event) => {
        event.preventDefault();
        if(params.id) {
            dispatch(updateStudent({id: params.id, ...state}));
            navigate('/students');
        }
        else {
            dispatch(createStudent(state));
            navigate('/students');
        }
    };

    return (
        <form>
            <div className="form-group">
                <label htmlFor="formControlInput1">ID</label>
                <input type="id" className="form-control" value={state?.id} onChange={(e)=>setState({...state, id: e.target.value})} id="formControlInput1" placeholder="ID" disabled={Number(params.id)>0}/>
            </div>
            <div className="form-group">
                <label htmlFor="formControlInput2">Name</label>
                <input type="name" className="form-control" value={state?.name} onChange={(e)=>setState({...state, name: e.target.value})} id="formControlInput2" placeholder="Name"/>
            </div>
            <div className="form-group">
                <label htmlFor="formControlInput3">Email</label>
                <input type="email" className="form-control" value={state?.email} onChange={(e)=>setState({...state, email: e.target.value})} id="formControlInput2" placeholder="name@example.com" />
            </div>
            <div className="form-group">
                <label htmlFor="formControlInput3">Mobile</label>
                <input type="mobile" className="form-control" value={state?.mobile} onChange={(e)=>setState({...state, mobile: e.target.value})} id="formControlInput3" placeholder="9876543210"/>
            </div>
            <div className="form-group">
                <label htmlFor="formControlSelect1">Example multiple select</label>
                <select multiple className="form-control" id="formControlSelect1">
                <option>1</option>
                <option>2</option>
                <option>3</option>
                <option>4</option>
                <option>5</option>
                </select>
            </div>
            <div className="form-group">
                <label htmlFor="formControlTextarea1">Text Area</label>
                <textarea className="form-control" id="formControlTextarea1" rows="3"></textarea>
            </div>
            <button className="btn btn-primary" onClick={ submitEmployee }>Submit</button>
        </form>
    )
}

export default StudentForm;