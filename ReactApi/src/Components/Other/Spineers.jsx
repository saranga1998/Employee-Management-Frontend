import React from 'react'
import { PropagateLoader,PuffLoader } from 'react-spinners'

export const DataLoading = () => {
    return (
        <div className=' flex justify-center'>
            <PropagateLoader size={20} color='gray' loading className='p-10'/>
        </div>
    )
}

export const LoginLoading = () =>{
    return(
        <div className=' flex justify-center'>
            <PuffLoader size={20} color='Blue' loading />
        </div>
    )
}
 