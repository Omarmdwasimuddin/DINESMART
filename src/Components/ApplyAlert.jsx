'use client';
import React, { useState } from 'react';
import Alert from './Alert';



const ApplyAlert = () => {


    const [alert, setAlert] = useState({
        isVisible: false,
        title:'',
        message:'',
    });

    const showAlert = (title, message)=>{
        setAlert({
            isVisible:true,
            title,
            message,
        });
    };

    const closeAlert = ()=>{
        setAlert({
            isVisible: false,
            title: '',
            message:'',
        });
    };

    return (
        <div className=' flex flex-col items-center justify-center bg-gray-100'>
            <button onClick={()=>showAlert('Eid Offers!!!','Collect your shoping now!!')} className='bg-amber-400 text-black px-4 py-2 rounded hover:bg-amber-700 transition'>Offer!!!</button>
            
            <Alert
            
            title={alert.title}
            message={alert.message}
            isVisible={alert.isVisible}
            onClose={closeAlert}
            
            />

        </div>
    );
};

export default ApplyAlert;