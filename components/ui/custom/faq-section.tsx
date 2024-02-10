'use client'
import React, { useState } from 'react';
import { FAQ } from '@/types/type';

const FAQs: React.FC<{ faqs: FAQ[] }> = ({ faqs }) => {
    const [expandedIndex, setExpandedIndex] = useState<number | null>(null);

    const toggleAnswer = (index: number) => {
        setExpandedIndex(expandedIndex === index ? null : index);
    };

    return (
        <div className="bg-white dark:bg-gray-900">
            {faqs.length > 0 && <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-gray-800 lg:text-3xl dark:text-white">FAQ's</h1>
                <hr className="my-6 border-gray-200 dark:border-gray-700" />

                {faqs.map((faq, index) => (
                    <div key={index}>
                        <div>
                            <button
                                className="flex items-center focus:outline-none"
                                onClick={() => toggleAnswer(index)}
                            >
                                <svg
                                    className={`flex-shrink-0 w-6 h-6 ${expandedIndex === index ? 'text-blue-500 rotate-90' : 'text-gray-400'
                                        }`}
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 5l7 7-7 7"></path>
                                </svg>
                                <h1 className="mx-4 text-xl text-gray-700 dark:text-white">{faq.question}</h1>
                            </button>
                            {expandedIndex === index && (
                                <div className="flex mt-8 md:mx-10">
                                    <span className="border border-blue-500"></span>
                                    <p className="max-w-3xl px-4 text-gray-500 dark:text-gray-300">{faq.answer}</p>
                                </div>
                            )}
                        </div>
                        <hr className="my-8 border-gray-200 dark:border-gray-700" />
                    </div>
                ))}
            </div>}
        </div>
    );
};

export default FAQs;
