import React from 'react';
import { Review } from '@/types/type';
const ReviewSection: React.FC<{ reviews: Review[] }> = ({ reviews }) => {
    return (
        <section className="bg-white dark:bg-gray-900">
            <div className="container px-6 py-10 mx-auto">
                <h1 className="text-2xl font-semibold text-center text-gray-800 capitalize lg:text-3xl dark:text-white">
                    What our <span className="text-blue-500">clients</span> say
                </h1>

                <p className="max-w-2xl mx-auto mt-6 text-center text-gray-500 dark:text-gray-300">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo incidunt ex placeat modi magni quia error
                    alias, adipisci rem similique, at omnis eligendi optio eos harum.
                </p>

                <section className="grid grid-cols-1 gap-8 mt-8 xl:mt-12 lg:grid-cols-2 xl:grid-cols-3">
                    {
                        reviews.map((review) => (
                            <div className="p-8 border rounded-lg dark:border-gray-700">
                                <p className="leading-loose text-gray-500 dark:text-gray-400">
                                    {review.review}
                                </p>

                                <div className="flex items-center mt-8 -mx-2">
                                    <img className="object-cover mx-2 rounded-full w-14 shrink-0 h-14 ring-4 ring-gray-300 dark:ring-gray-700" src="https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=880&q=80" alt="" />

                                    <div className="mx-2">
                                        <h1 className="font-semibold text-gray-800 dark:text-white">{review.name}</h1>


                                        <div className="flex items-center">
                                            {[...Array(5)].map((_, i) => (
                                                <svg
                                                    key={i}
                                                    className={`w-4 h-4 ${i < review.rating ? 'text-yellow-300' : 'text-gray-300 dark:text-gray-500'} ms-1`}
                                                    aria-hidden="true"
                                                    xmlns="http://www.w3.org/2000/svg"
                                                    fill="currentColor"
                                                    viewBox="0 0 22 20"
                                                >
                                                    <path d="M20.924 7.625a1.523 1.523 0 0 0-1.238-1.044l-5.051-.734-2.259-4.577a1.534 1.534 0 0 0-2.752 0L7.365 5.847l-5.051.734A1.535 1.535 0 0 0 1.463 9.2l3.656 3.563-.863 5.031a1.532 1.532 0 0 0 2.226 1.616L11 17.033l4.518 2.375a1.534 1.534 0 0 0 2.226-1.617l-.863-5.03L20.537 9.2a1.523 1.523 0 0 0 .387-1.575Z" />
                                                </svg>
                                            ))}
                                        </div>

                                    </div>
                                </div>
                            </div>
                        ))
                    }

                    {/* Repeat similar structure for other reviews */}

                </section>
            </div>
        </section>
    );
}

export default ReviewSection;
