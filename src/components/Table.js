import React from 'react';
import { SearchIcon, ArrowSmDownIcon, SwitchVerticalIcon } from '@heroicons/react/solid'


const Table = () => {
    return (
        <div className='bg-[#FFFFFF] py-5'>
            <div className='mt-5 pb-4'>
                <SearchIcon className='h-5 w-5 absolute ml-6 mt-3' />
                <input placeholder="      Search" className='rounded-lg w-[20rem]  py-2 px-3 ml-3 border bg-[#F2F2F3]' />
            </div>
            <table className='w-full ml-2'>
                <thead className='bg-[#FDF4ED]'>
                    <tr>
                        <th className='text-left hidden'><input type="checkbox" /></th>
                        <th className='text-left sm:flex hidden'>Date Updated<ArrowSmDownIcon className='h-5 w-5 inline-block' /></th>
                        <th className='text-left flex-1'>Title<SwitchVerticalIcon className='h-5 w-5 inline-block' /></th>
                        <th className='text-left hidden lg:inline-block'>Details</th>
                        <th className='hidden  sm:inline-block sm:ml-3'>Status</th>
                        <th className='text-left'>Quantity</th>
                        <th className='text-left hidden'>Unit Price</th>
                        <th className='text-left'>Amount<ArrowSmDownIcon className='h-5 w-5 inline-block' /></th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='text-left'>Coffee</td>
                        <td className='text-left'>$1.00</td>
                    </tr>
                </tbody>
            </table>
        </div>
    );
};

export default Table;