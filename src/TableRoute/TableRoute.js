import { useQuery } from '@tanstack/react-query';
import React from 'react';

const TableRoute = () => {

    const {data,isLoading} = useQuery({
        queryKey : ['text'],
        queryFn :()=> fetch('http://localhost:5000/text').then(
            (res) => res.json()
        )
    
    })


console.log(data)
if(isLoading){
    return <p className='text-center'>Loading....</p>
}

    return (
        <div className='mt-4 mx-4'>
            <div className="overflow-x-auto">
            <table className="table w-full">
                
                <thead>
                <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Job</th>
                    <th></th>
                </tr>
                </thead>
                <tbody>
                {
                    data.map((text,i) =>(
                        <tr key={text._id}>
                    <th>{i + 1}</th>
                    <td>{text?.name}</td>
                    <td>{text?.text}</td>
                </tr>)
                
                
                    )
                }
                
                
                </tbody>
            </table>
            </div>
        </div>
    );
};

export default TableRoute;