import React from 'react'
import { MdPayment } from "react-icons/md";

function Payment() {
    return (
        <div className='m-2'>
            <p className="text-md font-bold text-center text-gray-600">Payments</p>
            <div className='flex justify-end border-2 rounded-md shadow-md'>
                <button 
                    className="w-30  rounded-md bg-slate-800 py-2 px-4  text-center text-sm text-white inline-flex items-center justify-center">
                    <span className='mr-1'><MdPayment /></span>Payment</button>
            </div>
        </div>
    )
}

export default Payment
