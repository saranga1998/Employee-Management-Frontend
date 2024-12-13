import React, { useEffect } from 'react'
import { connect } from 'react-redux'
import { fetchAll } from '../Redux/Holiday/HolidayActions'


function HolidayView({ HolidayData, fetchAll }) {
    useEffect(() => {
        fetchAll()
    }, [fetchAll])

    if (!HolidayData) {
        return <h2>Loading...</h2>;
    }
    //console.log('HolidayData', EmpData);

    return EmpData.loading ? (<h2>loading...</h2>) :
        HolidayData.error ? (<h2>{HolidayData.error}</h2>) :
            HolidayData.holidays.length === 0 ? (
                <h2>No Employees Found</h2>
            ) :
                (
                    <div>
                        <h2>Employees</h2>
                        {HolidayData.holidays.map(day => (
                            <p key={day.employeeId}>{day.employeeName}</p>
                        ))}
                    </div>
                );

}

const mapStateToProps = (state) => {
    return {
        EmpData: state.holidays,
    }
};

const mapDispatchToProps = dispatch => {
    return {
        fetchAll: () => dispatch(fetchAll())
    }
};

export default connect(mapStateToProps, mapDispatchToProps)(HolidayView)