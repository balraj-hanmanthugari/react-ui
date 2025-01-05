import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import axios from "axios";

function EmployeeForm() {
    const params = useParams();
    const [state, setState] = useState({
        id: '',
        name: '',
        email: '',
        mobile: ''
    });
    const navigate = useNavigate();

    useEffect(()=>{
        //state.id=params.id;
        if(params.id) {
            axios.get('http://localhost:8080/student/'+params.id)
            .then((res) => {
                console.log(res);
                setState(res.data.student);
            })
            .catch((error) => {
                console.log(error);
            });
        }
    }, [params]);
    
    const submitEmployee = (event) => {
        event.preventDefault();
        if(params.id) {
            axios.put('http://localhost:8080/student/'+params.id, state)
            .then((res) => {
                console.log(res);
                navigate("/employees", { replace: true });
            })
            .catch((error) => {
                console.log(error);
            });
        }
        else {
            axios.post('http://localhost:8080/student', state)
            .then((res) => {
                console.log(res);
                navigate('/employees', { replace: true });
            })
            .catch((error) => {
                console.log(error);
            });
        }
    };

    return (
        <form>
            <div className="form-group">
                <label htmlFor="formControlInput1">ID</label>
                <input type="id" className="form-control" value={state.id} onChange={(e)=>setState({...state, id: e.target.value})} id="formControlInput1" placeholder="ID" disabled={Number(params.id)>0}/>
            </div>
            <div className="form-group">
                <label htmlFor="formControlInput1">Name</label>
                <input type="name" className="form-control" value={state.name} onChange={(e)=>setState({...state, name: e.target.value})} id="formControlInput1" placeholder="Name"/>
            </div>
            <div className="form-group">
                <label htmlFor="formControlInput2">Mobile</label>
                <input type="email" className="form-control" value={state.email} onChange={(e)=>setState({...state, email: e.target.value})} id="formControlInput2" placeholder="name@example.com" />
            </div>
            <div className="form-group">
                <label htmlFor="formControlInput3">Email</label>
                <input type="mobile" className="form-control" value={state.mobile} onChange={(e)=>setState({...state, mobile: e.target.value})} id="formControlInput3" placeholder="9876543210"/>
            </div>
            <div className="form-group">
                <label htmlFor="formControlSelect2">Example multiple select</label>
                <select multiple className="form-control" id="formControlSelect2">
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

export default EmployeeForm;