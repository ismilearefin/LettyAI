
import React from 'react';
import { Link } from 'react-router-dom';

const ShowText = ({text}) => {
    
    return (
        <div className='m-24 w-10/12 h-64 border'>
            <div className='grid justify-center items-center h-full '>
            {
                text ? 
                <div className='flex justify-between items-center '>
                <p className='font-xl font-bold mr-10'>{text?.name}</p>
                <p>{text?.text}</p>
                </div>
                :
                <p>No text</p>
            }
            </div>
            <div className='grid justify-center mt-4'>
            <Link to='/' className='btn btn-info'>Add New Data</Link>
            </div>
        </div>
    );
};

export default ShowText;