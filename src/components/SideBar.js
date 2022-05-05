import React from 'react';
import { HomeIcon, DocumentTextIcon, DocumentIcon, CogIcon } from '@heroicons/react/outline';

const SideBar = () => {
    const [active, setActive] = React.useState(" ");

    const checkActive = (name) => {
        console.log(name);
        setActive(name);
    }

    return (
        <div className='flex sm:grid'>
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
    );
};

export default SideBar;