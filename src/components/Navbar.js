import React from "react"; 
import { Link } from 'react-router-dom';
//import { useContext } from 'react';
//import UserContext from "../context";

function Navbar() {
    //const user = useContext(UserContext);

    return (
        <nav className="navbar navbar-expand-lg bg-body-tertiary">
            <div className="container-fluid">
                <div className="navbar-brand">React CRUD</div>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarSupportedContent">
                    <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                        <li className="nav-item">
                            <Link to="/"><span className="nav-link active" aria-current="page">Home</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/employees"><span className="nav-link" >Employees</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/students"><span className="nav-link">Students</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/inlinecrud"><span className="nav-link">Inline CRUD</span></Link>
                        </li>
                        <li className="nav-item">
                            <Link to="/stopwatch"><span className="nav-link">Stop Watch</span></Link>
                        </li>
                    </ul>
                </div>
                {/* <div className="float-right">{user.name} {user.role}</div> */}
            </div>
        </nav>
    )
}

export default Navbar;