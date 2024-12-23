import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import AddEmp from '../Components/AddEmp';
import EmployeeView from '../Components/EmployeeView';
import Home from '../Pages/Home'


function Employee() {
    return (
        <>
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li><a href="/">Home</a></li>
                            <li><a href="/add-employee">Add Employee</a></li>
                            <li><a href="/employees">Employee List</a></li>
                        </ul>
                    </nav>
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/add-employee" element={<AddEmp />} />
                        <Route path="/employees" element={<EmployeeView />} />
                    </Routes>
                </div>
            </Router>
        </>
    )
}

export default Employee
