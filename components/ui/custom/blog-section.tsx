import Image from 'next/image'; // Importing the Image component from Next.js
import { Article } from '@/types/type';

const BlogSection: React.FC<{ articles: Article[] }> = ({ articles }) => { // Declaring the functional component BlogSection

    return (
        <div className="bg-white dark:bg-gray-900"> {/* Opening a div with background color white */}
            <div className="container px-6 py-10 mx-auto"> {/* Opening a container div with padding and margin */}
                {articles.length > 0 &&
                    <>
                        <h1 className="text-2xl font-semibold text-gray-800 capitalize lg:text-3xl dark:text-white">Articles</h1> {/* Rendering a heading with specific styling */}

                        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2"> {/* Opening a grid with specific column layout */}
                            {
                                articles.map((article) => (
                                    <div className="lg:flex"> {/* Opening a flex container */}
                                        <div className="relative w-full h-56 lg:w-64"> {/* Opening a relative div for image */}
                                            <Image src="https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80" alt="" layout="fill" objectFit="cover" className="rounded-lg" /> {/* Rendering an Image component with specific src, alt, layout and styling */}
                                        </div>
                                        <div className="flex flex-col gap-3 py-2 lg:mx-6"> {/* Opening a flex container */}
                                            <a href="#" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white "> {/* Rendering a link with specific styling */}
                                                {article.title}
                                            </a>
                                            <span className="text-sm text-gray-500 dark:text-gray-300">Author: {article.author}</span> {/* Rendering a span with specific styling */}
                                            <div className="text-sm text-gray-500 dark:text-gray-300" dangerouslySetInnerHTML={{ __html: article.body }} />

                                        </div>
                                    </div>
                                ))
                            }

                        </div>
                    </>
                }
            </div>
        </div>
    );
}

export default BlogSection;  