import 'bootstrap/dist/css/bootstrap.css';
import './App.css';
//import UserContext from './context';
import React, {lazy, Suspense} from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

const Navbar = lazy(() => import('./components/Navbar'));
const Home = lazy(() => import('./components/Home'));
const EmployeeList = lazy(() => import('./components/EmployeeList'));
const EmployeeForm = lazy(() => import('./components/EmployeeForm'));
const StudentList = lazy(() => import('./components/StudentList'));
const StudentForm = lazy(() => import('./components/StudentForm'));
const InlineCRUD = lazy(() => import('./components/InlineCRUD'));
const StopWatch = lazy(() => import('./components/StopWatch'));
import store from './redux/store';
import { Provider } from 'react-redux';
import Cards from './components/Cards';
//import { useState } from 'react';

const App = () => {
  // const [state, setState] = useState({
  //   name: 'User1',
  //   role: 'Admin'
  // });

  return (
    <>
      <React.StrictMode>
        {/* <UserContext.Provider value={state}> */}
        <Provider store={store}>
          <Router>
            {/*<Suspense fallback={<div>Loading...</div>}>*/}
              <Navbar />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/employees" element={<EmployeeList />} />
                <Route path="/employees/add" element={<EmployeeForm />} />
                <Route path="/employees/:id" element={<EmployeeForm />} />
                <Route path="/students" element={<StudentList />} />
                <Route path="/students/add" element={<StudentForm />} />
                <Route path="/students/:id" element={<StudentForm />} />
                <Route path="/inlinecrud" element={<InlineCRUD />} />
                <Route path="/stopwatch" element={<StopWatch />} />
                <Route path="/cards" element={<Cards />} />
              </Routes>
            {/*</Suspense>}>*/}
          </Router>
        </Provider>
        {/* </UserContext.Provider> */}
      </React.StrictMode>
    </>
  );
}

export default App;
