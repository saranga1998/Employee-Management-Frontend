import React from 'react'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from '../Redux/Store'
import ErrorBoundary from '../Components/ErrorBoundary'
import Home from '../Pages/Home'
import AddEmp from '../Components/Employee/AddEmp';
import EmployeeView from '../Components/Employee/EmployeeView';
import EmployeeEdit from '../Components/Employee/EmployeeEdit';

import AddHoliday from '../Components/Holiday/AddHoliday.Jsx';
import HolidayView from '../Components/Holiday/HolidayView';
function Pages() {
    return (
        <>
            <Provider store={store}>
                <ErrorBoundary>
                    <Router>
                        <div>
                            <nav>
                                <ul>
                                    <li><a href="/">Home</a></li>
                                    <li><a href="/holidays">Holiday List</a></li>
                                    <li><a href="/employees">Employee List</a></li>
                                </ul>
                            </nav>

                            {/* Define Routes */}
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/add-employee" element={<AddEmp />} />
                                <Route path="/add-holiday" element={<AddHoliday />} />
                                <Route path="/employees" element={<EmployeeView />} />
                                <Route path="/holidays" element={<HolidayView />} />
                                <Route path="/employees/edit/:id" element={<EmployeeEdit />} />

                            </Routes>
                        </div>
                    </Router>
                </ErrorBoundary>
            </Provider>

        </>
    )
}

export default Pages
