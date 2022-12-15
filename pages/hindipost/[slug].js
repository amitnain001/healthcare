import { createClient } from 'next-sanity';
import Link from 'next/link';
import { useRouter } from 'next/router'
// import { useEffect } from 'react';
// import { useState } from 'react';
import Layout from '../../components/Layout';
import PortableText from "react-portable-text";
import { AiFillFacebook, AiFillTwitterCircle, AiOutlineWhatsApp, AiOutlineInstagram } from 'react-icons/ai';



const Slug = ({ posts }) => {
    const router = useRouter()
    const { slug } = router.query;
    console.log(posts)

    return <>
        <Layout title='Relationship'>
            {/* <h1 className='text-3xl text-red-600 my-28'>{slug}</h1> */}

            {/* Portable text */}
            <div className='mt-10 container mx-auto max-w-screen-lg '>
                {posts && posts.map((item) => {
                    if (item.slug.current === slug) {
                        return (
                            <div className='py-10 sm:py-20 px-5'>
                                <div className='text-blue-500 text-sm'>
                                    {item.category}
                                </div>
                                <h1 className='text-2xl sm:text-4xl font-bold my-4 sm:my-7'>{item.title}</h1>
                                <h1 className='text-xl sm:text-2xl font-bold text-gray-500 '>{item.subTitle}</h1>
                                <div className='text-xs text-gray-500 mt-2 mb-5 sm:mb-9'> Updated at: {(item._createdAt).substr(0, 10)}</div>
                                <div className='md:flex justify-between items-stretch'>
                                    <div className=' hidden md:block'>
                                        <div className='sticky top-28'>
                                            <div className='flex flex-col text-4xl space-y-7'>
                                                <a className='inline-block hover:scale-110 duration-300' href="www.facebook.com" target='_blank'><AiFillFacebook className='text-blue-500' /></a>
                                                <a className='inline-block hover:scale-110 duration-300' href="https://web.whatsapp.com" target='_blank'> <AiOutlineWhatsApp className='text-green-500' /></a>
                                                <a className='inline-block hover:scale-110 duration-300' href="https://twitter.com" target='_blank'><AiFillTwitterCircle className='text-sky-500' /></a>
                                                <a className='inline-block hover:scale-110 duration-300' href="www.instagram.com" target='_blank'><AiOutlineInstagram className='text-pink-500' /></a>
                                            </div>
                                        </div>
                                    </div>
                                    <div className='max-w-screen-sm lg:max-w-screen-md md:pr-5   lg:px-10'>
                                        <img src={item.topicPoster} className='w-full' alt="posted Image" />
                                        <PortableText key={item.slug.current}
                                            // Pass in block content straight from Sanity.io
                                            content={item.content}
                                            projectId={process.env.NEXT_PUBLIC_SANITY_PROJECT_ID}
                                            dataset={process.env.NEXT_PUBLIC_SANITY_DATASET}
                                            // Optionally override marks, decorators, blocks, etc. in a flat
                                            // structure without doing any gymnastics
                                            serializers={{
                                                h3: (props) => <h3 className='text-base font-bold mb-2' {...props} />,
                                                li: ({ children }) => <li className="special-list-item">{children}</li>,
                                                // strong: ({ children }) => <span className='text-green-500 text-3xl'>{children}</span>
                                                strong: (props) => <span className='mb-3 sm:mb-5 inline-block font-semibold' {...props} />,
                                                normal: (props) => <p className='mb-3 sm:mb-7' {...props} />
                                            }}
                                        />
                                    </div>
                                    <div className='mt-10 md:mt-0'>
                                        <div className='sticky left-0 top-0'>
                                            <h3 className='text-xl font-bold my-3 md:mt-0'>More For You</h3>
                                            {posts.map((e) => {
                                                // if (e.category === item.category) {
                                                return (
                                                    <div className='md:w-40 mb-4 flex md:flex-col md:space-x-0 space-x-4'>
                                                        <img src={e.topicPoster} className="max-w-[130px] md:max-w-none" alt="side Poster" />
                                                        <Link key={e.slug.current} href={`/hindipost/${e.slug.current}`}><h1 className='hover:text-blue-500 hover:underline duration-300 mt-2'>{e.title}</h1></Link>
                                                    </div>
                                                )
                                                // }
                                            })}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                })}

            </div>
        </Layout>
    </>
}

export default Slug;


export async function getServerSideProps(context) {
    const client = createClient({
        projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
        dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
        useCdn: false
    })
    const query = `*[_type=="allDocuments"]`;
    // const categoryquery = `*[_type=="categoryTypes"]`;

    const posts = await client.fetch(query);
    // const categories = await client.fetch(categoryquery);
    return {
        props: {
            posts
        }
    }
}