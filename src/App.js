
import './App.css';
import { Route, Routes } from "react-router-dom";

import Home from './pages/home.js'
//import Employees from './pages/employees.js'
import Employee from './pages/employee.js'

function App() {
  return (
    <div className="App">
      <Routes>
        <Route path="/" element={<Home/>}/>
        {/* <Route path="/employees" element={<Employees/>}/> */}
        <Route path="/:employee" element={<Employee/>}/>
      </Routes>
    </div>
  );
}

export default App;
