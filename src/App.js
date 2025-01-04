import 'bootstrap/dist/css/bootstrap.css';
import './App.css';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Home from './components/Home';
import EmployeeList from './components/EmployeeList';
import EmployeeForm from './components/EmployeeForm';


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/employees" element={<EmployeeList/>} />
        <Route path="/employees/add" element={<EmployeeForm/>} />
        <Route path="/employees/:id" element={<EmployeeForm/>} />
      </Routes>
    </Router>
    </>
  );
}

export default App;
