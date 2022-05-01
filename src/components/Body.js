import React from 'react';
import Table from './Table';
import { HomeIcon, DocumentTextIcon, DocumentIcon, CogIcon } from '@heroicons/react/outline';

const Body = () => {
    const [active, setActive] = React.useState(" ");

    const checkActive = (name) => {
        console.log(name);
        setActive(name);
    }

    return (
        <div className='bg-[#F2F2F3] sm:grid sm:grid-cols-12 md:grid md:gird-cols-12'>
            <div className='fixed bottom-0 ml-[3rem] bg-[white] sm:bg-[#F2F2F3] ml:pl-1 sm:relative sm:col-span-2 md:cols-span-3 sm:m-5 sm:border-r-2 flex sm:grid shadow-lg sm:shadow-none'>
                <div className={active === "DashBoard" ? 'flex  gap-1 cursor-pointer mb-3 w-16 lg:w-32 items-center justify-center text-green-700 sm:justify-start' : 'flex gap-1 cursor-pointer mb-3 w-16 lg:w-32 items-center justify-center sm:justify-start'} onClick={(e) => checkActive(e.target.innerText)}>
                    <HomeIcon className='h-5 w-5' />
                    <span className='hidden lg:flex'>DashBoard</span>
                </div>
                <div className={active === "Inventory" ? 'flex items-center gap-1 text-green-700 cursor-pointer mb-3 w-16 lg:w-28 justify-center sm:justify-start' : 'flex items-center gap-1 cursor-pointer mb-3 w-16 lg:w-28 justify-center sm:justify-start'} onClick={(e) => checkActive(e.target.innerText)}>
                    <DocumentTextIcon className='h-5 w-5' />
                    <span className='hidden lg:flex'>Inventory</span>
                </div>
                <div className={active === "Document" ? 'flex items-center gap-1 text-green-700 cursor-pointer mb-3 w-16 lg:w-28 justify-center sm:justify-start' : 'flex items-center gap-1 cursor-pointer mb-3 w-16 lg:w-28 justify-center sm:justify-start'} onClick={(e) => checkActive(e.target.innerText)}>
                    <DocumentIcon className='h-5 w-5' />
                    <span className='hidden lg:flex'>Document</span>
                </div>
                <div className={active === "Setting" ? 'flex items-center gap-1 text-green-700 mb-3 w-16 lg:w-28 justify-center sm:justify-start' : 'flex items-center gap-1 mb-3 w-16 lg:w-28 justify-center sm:justify-start'} onClick={(e) => checkActive(e.target.innerText)}>
                    <CogIcon className='h-5 w-5' />
                    <span className='hidden lg:flex'>Setting</span>
                </div>
            </div>
            <div className='sm:col-span-9 md:col-span-10 '>
                <div>
                    <p>Inventory</p>
                </div>
                <div>
                    <Table />
                </div>
            </div>
        </div>
    );
};

export default Body;