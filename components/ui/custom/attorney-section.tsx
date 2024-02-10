import React from 'react';
import { Attorney } from '@/types/type';

const AttorneySection: React.FC<{ attorney: Attorney[], city: string }> = ({ attorney, city }) => {
    return (
        <div className="container border-sm px-6 py-8 mx-auto">
            {attorney.length > 0 && <>
                <h2 className="text-2xl font-semibold  text-gray-800 capitalize lg:text-3xl dark:text-white">Top Attorneys in {city}</h2>
                <div className="grid gap-8 mt-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {attorney.map((at) => (
                        <div className="w-full max-w-xs shadow-md p-4 rounded-md ">
                            <img className="object-cover object-center w-full h-48 mx-auto rounded-lg" src="https://images.unsplash.com/photo-1493863641943-9b68992a8d07?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=739&q=80" alt="avatar" />
                            <div className="mt-2 flex flex-col justify-start align-start ">
                                <h3 className="text-lg font-medium text-gray-700 dark:text-gray-200">{at.name}</h3>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300"><strong>Email:</strong> {at.email}</p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300"><strong>Address:</strong> {at.address}</p>
                                <p className="mt-1 text-sm text-gray-600 dark:text-gray-300"><strong>Phone:</strong> {at.phone}</p>
                            </div>
                            <div className="mt-8 w-100">
                                <a href={`${at.website}`} target="_blank" rel="noopener noreferrer" className="inline-block px-6 py-3 text-sm font-medium text-white bg-primary rounded-lg">Visit Website</a>
                            </div>
                        </div>
                    ))}
                    {/* Add other team members similarly */}
                </div>
            </>}

        </div>
    );
}

export default AttorneySection;
