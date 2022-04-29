import React from 'react';
import { ChevronDownIcon, SearchIcon, BellIcon, UserCircleIcon } from '@heroicons/react/solid'


const Header = () => {
    return (
        <div className='flex p-5 ml-4 justify-between'>
            <div className='flex items-center'>
                <h1>StarBucks</h1>
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
                <div className='sm:flex hidden sm:ml-[8rem]'>
                    <SearchIcon className='h-5 w-5 absolute ml-6 mt-3' />
                    <input placeholder="      Search" className='rounded-lg  lg:w-[38rem] py-2 px-3 ml-3 border bg-[#F2F2F3]' />
                </div>
            </div>

            <div className='flex  justify-between w-40 items-center'>
                <BellIcon className='h-5 w-5' />
                <UserCircleIcon className='h-5 w-5' />
                <p className='text-sm'>Jhone Doe</p>
                <ChevronDownIcon className="-mr-1 ml-2 h-5 w-5" aria-hidden="true" />
            </div>

        </div>
    );
};

export default Header;

