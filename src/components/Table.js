import React from 'react';
import { SearchIcon, ArrowSmDownIcon, SwitchVerticalIcon, DotsCircleHorizontalIcon, ChevronDownIcon, ChevronRightIcon, ChevronLeftIcon } from '@heroicons/react/solid';



const Table = ({ data }) => {
    //const { tableHeading, tableRows } = data[0].tableData;
    //console.log(tableHeading, tableRows);
    console.log(data);
    return (
        <div className='bg-[#FFFFFF] py-5 rounded-md drop-shadow-2xl'>
            <div className='mt-5 pb-4'>
                <SearchIcon className='h-5 w-5 absolute ml-6 mt-3' />
                <input placeholder="      Search" className='rounded-lg w-[20rem]  py-2 px-3 ml-3 border bg-[#F2F2F3]' />
            </div>
            <table className='w-full ml-2  table-auto'>
                <thead className='bg-[#FDF4ED]'>
                    <tr>
                        <th className='text-left sm:inline-block hidden'><input type="checkbox" /></th>
                        <th className='text-left hidden sm:inline'>Date Updated<ArrowSmDownIcon className='h-5 w-5 inline' /></th>
                        <th className='text-left'>Title<SwitchVerticalIcon className='h-5 w-5 inline-block' /></th>
                        <th className='text-left hidden lg:inline'>Details</th>
                        <th className='text-left'><span className='invisible sm:visible'>Status</span></th>
                        <th className='text-left'><span className='invisible lg:visible'>Quantity</span></th>
                        <th className='text-left hidden lg:inline'>Unit Price</th>
                        <th className='text-left'>Amount<SwitchVerticalIcon className='h-5 w-5 inline-block' /></th>
                    </tr>
                </thead>
                <tbody>

                    {
                        data.map((row) => {
                            console.log(row);
                            return <tr>
                                <td className='text-left hidden sm:inline-flex'><input type="checkbox" /></td>
                                <td className='text-left hidden sm:inline'>{row.date}</td>
                                <td className='text-left'>{row.title}</td>
                                <td className='text-left hidden lg:inline'>{row.details}   </td>
                                <td className='text-left'><span className='hidden sm:inline'>{row.status}</span><DotsCircleHorizontalIcon className={row.status === "Alright" ? "text-green-700 h-3 w-3 inline" : row.status === "In Progress" ? "text-yellow-700 h-3 w-3 inline" : row.status === "Out of Stock" ? "text-red-700 h-3 w-3 inline" : "stroke-white h-3 w-3 inline"} /></td>
                                <td className='text-left'>{row.quantity}</td>
                                <td className='text-left hidden lg:inline'>${row.unitPrice}</td>
                                <td className='text-left'>${row.amount}</td>
                            </tr>
                        })
                    }



                </tbody>
            </table>
            <section className='flex justify-between'>
                <div className='mt-5 ml-4 border-2 w-40 text-center text-[#B2B2B6] shadow-[#00000012] hidden sm:inline'>
                    <span>10 items per page</span>
                    <ChevronDownIcon className='h-5 w-5 inline-block' />

                </div>
                <div className='flex'>
                    <div className='mt-5 ml-4 border-2 w-36 text-center text-[#B2B2B6] shadow-[#00000012]'>
                        <span>Page 1 of 5</span>
                        <ChevronDownIcon className='h-5 w-5 inline-block' />

                    </div>
                    <div className='mt-5 flex mx-4'>
                        <div className='border-2 p-2'>
                            <ChevronLeftIcon className='h-5 w-5' />
                        </div>
                        <div className='border-2 p-2'>
                            <ChevronRightIcon className='h-5 w-5' />
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Table;