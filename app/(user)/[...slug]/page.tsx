import AttorneySection from '@/components/ui/custom/attorney-section'
import BlogSection from '@/components/ui/custom/blog-section'
import FAQs from '@/components/ui/custom/faq-section'
import { getAllFAQsByCityId, getArticlesByCityId, getAttorneysByCityId, getCityById, getReviewsByCityId } from '@/lib/service'
import React from 'react'
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card'
import ReviewSection from '@/components/ui/custom/review-section'
import { BsArrowLeft } from 'react-icons/bs'
import Link from 'next/link'

interface CityDetailPageProps {
    params: {

        slug: string[]
    }
}


const CityDetailPage = async ({ params }: CityDetailPageProps
) => {

    const cityId = params.slug[2]
    const currentCityResponse = await getCityById(cityId);
    const attorneysResponse = await getAttorneysByCityId(cityId);
    const articlesResponse = await getArticlesByCityId(cityId);
    const faqsResponse = await getAllFAQsByCityId(cityId);
    const reviewsResponse = await getReviewsByCityId(cityId);

    if (currentCityResponse.success === false || attorneysResponse.success === false || articlesResponse.success === false || faqsResponse.success === false || reviewsResponse.success === false) {
        return <div>Something went wrong</div>
    }

    const currentCity = currentCityResponse.data;
    const attorneys = attorneysResponse.data;
    const articles = articlesResponse.data;
    const faqs = faqsResponse.data;
    const reviews = reviewsResponse.data;
    console.log("currentCIty", currentCityResponse)
    console.log("articles", articles)
    return (
        <section className="bg-white dark:bg-gray-900">

            <div className="container border-sm px-6 py-8 mx-auto">
                <div className="flex py-4 my-2 justify-center items-center relative w-full" >
                    <Link href="/" className="flex items-center space-x-2 absolute left-0">

                        <BsArrowLeft size={20} />
                        <span>Back to cities</span>

                    </Link>

                </div>
                <div className="w-full bg-center bg-cover h-[38rem]" style={{ backgroundImage: "url('https://images.unsplash.com/photo-1572978122938-4b7b95c292c4?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D')" }}>
                    <div className="flex items-center justify-center w-full h-full bg-gray-900/40">
                        <div className="text-center flex flex-col gap-4">
                            <h1 className="text-3xl font-semibold text-white lg:text-4xl">Welcome to <span className="text-blue-400">{currentCity?.city}</span></h1>
                            <div className="mt-4 grid gap-4 md:grid-cols-2 lg:grid-cols-4">


                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">City</CardTitle>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="h-4 w-4 text-muted-foreground"
                                        >
                                            <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
                                            <circle cx="9" cy="7" r="4" />
                                            <path d="M22 21v-2a4 4 0 0 0-3-3.87M16 3.13a4 4 0 0 1 0 7.75" />
                                        </svg>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{currentCity?.city}</div>
                                        <p className="text-xs text-muted-foreground">{currentCity?.state_name}</p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Population</CardTitle>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="h-4 w-4 text-muted-foreground"
                                        >
                                            <rect width="20" height="14" x="2" y="5" rx="2" />
                                            <path d="M2 10h20" />
                                        </svg>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{currentCity?.population}</div>
                                        <p className="text-xs text-muted-foreground">Total population</p>
                                    </CardContent>
                                </Card>
                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Density</CardTitle>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="h-4 w-4 text-muted-foreground"
                                        >
                                            <rect width="20" height="14" x="2" y="5" rx="2" />
                                            <path d="M2 10h20" />
                                        </svg>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{currentCity?.density}</div>
                                        <p className="text-xs text-muted-foreground">Population density</p>
                                    </CardContent>
                                </Card>

                                <Card>
                                    <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                                        <CardTitle className="text-sm font-medium">Timezone</CardTitle>
                                        <svg
                                            xmlns="http://www.w3.org/2000/svg"
                                            viewBox="0 0 24 24"
                                            fill="none"
                                            stroke="currentColor"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                            className="h-4 w-4 text-muted-foreground"
                                        >
                                            <rect width="20" height="14" x="2" y="5" rx="2" />
                                            <path d="M2 10h20" />
                                        </svg>
                                    </CardHeader>
                                    <CardContent>
                                        <div className="text-2xl font-bold">{currentCity?.timezone}</div>
                                        <p className="text-xs text-muted-foreground">Timezone</p>
                                    </CardContent>
                                </Card>
                            </div>
                        </div>
                    </div>
                </div>


            </div>
            <AttorneySection attorney={attorneys || []} city={params.slug[1]} />

            <BlogSection articles={articles || []} />
            <FAQs faqs={faqs || []} />
            <ReviewSection reviews={reviews || []} />

        </section>
    )
}

export default CityDetailPage