import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
//import UserContext from './context';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';
import StudentList from './components/StudentList';
import StudentForm from './components/StudentForm';
import store from './redux/store';
import { Provider } from 'react-redux';
//import { useState } from 'react';

function App() {
  // const [state, setState] = useState({
  //   name: 'User1',
  //   role: 'Admin'
  // });

  return (
    <>
      <React.StrictMode>
        {/* <UserContext.Provider value={state}> */}
        <Provider store={ store }>
          <Router>
            <Navbar />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/employees" element={<EmployeeList />} />
              <Route path="/employees/add" element={<EmployeeForm />} />
              <Route path="/employees/:id" element={<EmployeeForm />} />
              <Route path="/students" element={<StudentList />} />
              <Route path="/students/add" element={<StudentForm />} />
              <Route path="/students/:id" element={<StudentForm />} />
            </Routes>
          </Router>
        </Provider>
        {/* </UserContext.Provider> */}
      </React.StrictMode>
    </>
  );
}

export default App;
