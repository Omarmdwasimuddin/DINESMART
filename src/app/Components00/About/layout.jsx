'use client';
import React from 'react';
import ApplyAlert from '@/Components/ApplyAlert';
const layout = ({ children }) => {


    


    return (
        <div>
            <div className='my-10'>
            <ApplyAlert/>
            </div>
            { children }

        </div>
    );
};

export default layout;