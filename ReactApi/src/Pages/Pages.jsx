import React from 'react'
import { BrowserRouter as Router,Routes, Route } from "react-router-dom";
import { Provider } from 'react-redux'
import store from '../Redux/Store'
import ErrorBoundary from '../Components/ErrorBoundary'
import Home from '../Pages/Home'
import AddEmp from '../Components/AddEmp';
import EmployeeView from '../Components/EmployeeView';
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
                                    <li><a href="/add-employee">Add Employee</a></li>
                                    <li><a href="/employees">Employee List</a></li>
                                </ul>
                            </nav>

                            {/* Define Routes */}
                            <Routes>
                                <Route path="/" element={<Home />} />
                                <Route path="/add-employee" element={<AddEmp />} />
                                <Route path="/employees" element={<EmployeeView />} />
                            </Routes>
                        </div>
                    </Router>
                </ErrorBoundary>
            </Provider>

        </>
    )
}

export default Pages
