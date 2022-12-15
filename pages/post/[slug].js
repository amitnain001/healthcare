import Link from 'next/link';
import { useRouter } from 'next/router'
import Layout from '../../components/Layout';
// import { useState } from 'react';
import allpostdata from '../../websitecontent/allpost.json';


const Slug = () => {
    const router = useRouter()
    const { slug } = router.query;
    // const [postslug, setpostslug] = useState(slug);

    return <>
        <Layout title='Relationship'>
            <section className="text-gray-600 body-font">
                {allpostdata.allpostdata.map((e) => {
                    if (e.slug === slug) {
                        return (
                            <div key={e.id} className="container px-5 py-24 mx-auto flex flex-col">
                                <h1 className='text-xl font-bold my-5 lg:text-3xl xl:text-5xl'>{e.heading}</h1>
                                <h3 className='text-lg lg:text-2xl mb-12 lg:mb-16 xl:mb-24 text-gray-400'>{e.subheading}</h3>
                                <div className="lg:w-4/6 mx-auto">
                                    <div className="rounded-lg  overflow-hidden">
                                        <img alt="content" className="object-cover object-center h-full w-full" src={`${e.image}`} />
                                    </div>
                                    <div className="flex flex-col  mt-10">
                                        <div className="  text-center sm:pr-8 sm:py-8">
                                            <div className="w-20 h-20 rounded-full inline-flex items-center justify-center bg-gray-200 text-gray-400">
                                                <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-10 h-10" viewBox="0 0 24 24">
                                                    <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
                                                    <circle cx="12" cy="7" r="4"></circle>
                                                </svg>
                                            </div>
                                            <div className="flex flex-col items-center text-center justify-center">
                                                <h2 className="font-medium title-font mt-4 text-gray-900 text-lg">{e.author}</h2>
                                                <div className="w-12 h-1 bg-blue-500 rounded mt-2 mb-4"></div>
                                                <p className="text-base">
                                                    Published at: {e.updatedat}</p>
                                            </div>
                                        </div>
                                        <div className="  sm:pl-8 sm:py-8   mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                            <p className="leading-relaxed text-lg lg:text-xl mb-4">{e.discription} Lorem ipsum dolor sit amet consectetur adipisicing elit. Dignissimos ab, molestias praesentium eum, reprehenderit vel iure aspernatur reiciendis dicta odit itaque voluptas soluta, quasi culpa repellendus. Deserunt asperiores expedita quibusdam! Lorem ipsum dolor sit, amet consectetur adipisicing elit. Consequatur, nisi consequuntur quasi ipsam sequi pariatur omnis? Ducimus repellendus itaque quis asperiores expedita deleniti quam cumque ipsam praesentium similique voluptatem, error ullam beatae. Repudiandae necessitatibus esse perspiciatis pariatur laudantium unde ducimus earum rerum quod, blanditiis fugit aut hic temporibus voluptates minus illo ea delectus officia autem repellat officiis. Distinctio quaerat tenetur debitis laudantium? Illum cum aliquam ipsum ipsa maiores vel, voluptatum cupiditate minus necessitatibus officia modi deserunt aspernatur omnis ducimus assumenda exercitationem, et fugit quidem repellendus illo asperiores culpa reprehenderit. Non eveniet accusantium enim illo quos? Molestias maiores deleniti aliquam quibusdam.</p>
                                        </div>
                                    </div>
                                    <div className="rounded-lg  overflow-hidden">
                                        <img alt="content" className="object-cover object-center h-full w-full" src={`${e.imageb}`} />
                                    </div>
                                    <div className="  sm:pl-8 sm:py-8   mt-4 pt-4 sm:mt-0 text-center sm:text-left">
                                        <p className="leading-relaxed text-lg lg:text-xl mb-4">{e.discriptionb} Lorem ipsum dolor sit amet consectetur, adipisicing elit. Obcaecati at eius, ducimus vel explicabo et, cum dignissimos corrupti quos necessitatibus libero velit ipsum praesentium nemo similique accusamus voluptatum sed est facere? Corrupti perferendis distinctio maxime dolores voluptatum rem possimus adipisci nobis, earum placeat sed. Dolorum quae aut sit, tempora animi dolore eaque nesciunt possimus sunt eligendi asperiores nisi ullam temporibus quisquam deserunt numquam iste voluptatem adipisci! Molestias nemo ab incidunt sunt aut veniam minima nulla, placeat eaque iusto maiores natus, ullam similique non ea quam obcaecati, quidem autem enim facilis illo vero odio distinctio. Repellendus unde quibusdam sunt quae saepe!</p>
                                    </div>
                                </div>
                            </div>
                        )
                    } else {
                        return;
                    }

                })}


                {/* -------------------------------------------- MORE Health news --------------------------------------- */}
                <div className="container px-5 py-24 mx-auto">
                    <div className='text-xl md:text-2xl text-blue-500 my-10 font-bold'>More Health <span className='text-gray-500'> News</span></div>
                    <div className="flex flex-wrap -m-4">
                        {allpostdata.allpostdata.map((e) => {
                            if (e.about == "More Health News") {
                                return (<Link key={e.id} className="lg:w-1/3 sm:w-1/2 block  
                            " href={`/post/${e.slug}`} >
                                    <div class=" p-4">
                                        <div class="bg-gray-100 p-6 rounded-lg">
                                            <img class="h-40 rounded w-full object-cover object-center mb-6" src={e.image} alt="content" />
                                            <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">{e.type}</h2>
                                            <h1 className="title-font text-lg font-medium hover:underline text-gray-900 mb-3">{e.heading} </h1>
                                        </div>
                                    </div>
                                </Link>)
                            } else {
                                return;
                            }
                        })}
                    </div>
                </div>
            </section>
        </Layout>
    </>
}

export default Slug

