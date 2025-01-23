import React from 'react'
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from '../Redux/Store'
import ErrorBoundary from '../Components/ErrorBoundary'
import Home from '../Pages/Home'
import AddEmp from '../Components/Employee/AddEmp';
import EmployeeView from '../Components/Employee/EmployeeView';
import EmployeeEdit from '../Components/Employee/EmployeeEdit';

import AddHoliday from '../Components/Holiday/AddHoliday.Jsx';
import HolidayView from '../Components/Holiday/HolidayView';
import HolidayEdit from '../Components/Holiday/HolidayEdit';
import Login from './Authentication/Login';

function Pages() {
    return (
        <>
            <Provider store={store}>
                <ErrorBoundary>
                    <Router>
                        <div>
                            <nav className='nav-bar'>
                                <ul className="flex">
                                    <li className="flex-1 mr-2"><a className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="/">Home</a></li>
                                    <li className="flex-1 mr-2"><a className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="/holidays">Holiday List</a></li>
                                    <li className="flex-1 mr-2"><a className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="/employees">Employee List</a></li>
                                    <li className="flex-1 mr-2"><a className="text-center block border border-blue-500 rounded py-2 px-4 bg-blue-500 hover:bg-blue-700 text-white" href="/login">Login</a></li>
                                </ul>
                                
                            </nav>

                            {/* Define Routes */}
                            <Routes>
                                <Route path="/login" element={<Login />} />
                                <Route path="/" element={<Home />} />
                                <Route path="/add-employee" element={<AddEmp />} />
                                <Route path="/add-holiday" element={<AddHoliday />} />
                                <Route path="/employees" element={<EmployeeView />} />
                                <Route path="/holidays" element={<HolidayView />} />
                                <Route path="/employees/edit/:id" element={<EmployeeEdit />} />
                                <Route path="/holidays/edit/:id" element={<HolidayEdit />} />

                            </Routes>
                        </div>
                    </Router>
                </ErrorBoundary>
            </Provider>

        </>
    )
}

export default Pages
