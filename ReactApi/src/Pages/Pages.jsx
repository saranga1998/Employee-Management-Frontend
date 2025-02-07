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
import Navbar from '../Components/Other/Navbar';
import DashBoardLayout from './DashBoardLayout';
import Payment from '../Components/Payments/Payment';

function Pages() {
    return (
        <>
            <Provider store={store}>
                <ErrorBoundary>
                    <Router>
                        <div>
                            <Navbar />

                            <Routes>

                                <Route path="/login" element={<Login />} />
                                <Route path="/" element={<Home />} />


                                <Route path="/DashBoard" element={<DashBoardLayout />}>
                                    <Route path="add-employee" element={<AddEmp />} />
                                    <Route path="add-holiday" element={<AddHoliday />} />
                                    <Route path="employees" element={<EmployeeView />} />
                                    <Route path="holidays" element={<HolidayView />} />
                                    <Route path="payments" element={<Payment/>}/>
                                    <Route path="employees/edit/:id" element={<EmployeeEdit />} />
                                    <Route path="holidays/edit/:id" element={<HolidayEdit />} />
                                </Route>
                            </Routes>
                        </div>
                    </Router>
                </ErrorBoundary>
            </Provider>

        </>
    )
}

export default Pages
