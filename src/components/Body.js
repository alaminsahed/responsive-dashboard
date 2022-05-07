import React from 'react';
import SideBar from './SideBar';
import Table from './Table';
import db from '../db/db1.json';


const Body = () => {

    return (
        <div className='h-[400rem] bg-[#F2F2F3]'>
            <div className='sm:grid sm:grid-cols-12 md:grid md:gird-cols-12'>
                <div className='fixed bottom-0 ml-[3rem] bg-[white] sm:bg-[#F2F2F3] ml:pl-1 sm:relative sm:col-span-2 md:cols-span-3 sm:m-5 sm:border-r-2 flex sm:grid shadow-lg sm:shadow-none'>
                    <SideBar />
                </div>
                <div className='sm:col-span-9 md:col-span-10'>
                    <div>
                        <h2 className='text-2xl text-[#3E3F48] py-5 font-semibold ml-4'>Inventory</h2>
                        <hr />
                    </div>
                    <div>
                        <Table data={db} />
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Body;