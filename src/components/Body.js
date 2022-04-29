import React from 'react';
import Table from './Table';

const Body = () => {
    return (
        <div className='bg-[#F2F2F3]'>
            <div>
                <p>Inventory</p>
            </div>
            <div>
                <Table />
            </div>
        </div>
    );
};

export default Body;