import React from 'react'
import Link from 'next/link';
import allpost from '../websitecontent/allpost.json';
import Layout from '../components/Layout';

const dietfitnes = () => {
  let dating = 4;
  let weight = 4;
  let healthy = 4;
  let exercise = 4;
  let yoga = 4;



  return (
    <Layout title='Diet and Fitness'>
      <section className="text-gray-600 body-font pt-16">

        {/* --------------------------------------------------- Weight Management ------------------------ */}

        <div className="container px-5 py-12 mx-auto ">
          <div className='text-xl md:text-2xl text-blue-500 mb-5 font-bold'>Weight  <span className='text-gray-500'>Management</span> </div>
          {/* ------------------------------------------------------------------------------ */}
          <div className="flex flex-wrap -m-4">

            {allpost.allpostdata.map((e) => {
              if (e.type == "Weight Management") {
                if (weight >= 1) {
                  weight--;
                  return (
                    <Link key={e.id} href={`/post/${e.slug}`} className="block mx-auto lg:w-1/4 md:w-1/2 ">
                      <div className="hover:scale-100 ease-in duration-200  scale-95 hover:shadow-lg my-5 p-4 mx-auto" >
                        <div className="h-full flex flex-col items-center ">
                          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={e.image} />
                          <div className="w-full">
                            <h3 className="text-blue-500  mb-3">{e.type}</h3>
                            <p className="mb-4 font-bold hover:underline decoration-indigo-500">{e.heading}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )

                }
                else {
                  return (<Link key={e.id} href={`/post/${e.slug}`} className="md:w-1/3 my-4 sm:my-6 md:my-8">
                    <div className="hover:scale-100 ease-in duration-200  scale-95 hover:shadow-lg p-4  sm:mb-0 mb-6"  >
                      <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src={e.image} />
                      </div>
                      <h2 className="text-blue-500  my-3">{e.type}</h2>
                      <p className="mb-4 font-bold hover:underline decoration-indigo-500">{e.heading}</p>
                    </div></Link>)
                }

              }
              else {
                return;
              }
            })}
          </div>
          {/* ------------------------------------------------------------------------------ */}
        </div>

        {/* --------------------------------------------- Healthy Diet section ------------------------ */}
        <div className="container px-5 py-12 mx-auto ">
          <div className='text-xl md:text-2xl text-blue-500 mb-5 font-bold'>Healthy  <span className='text-gray-500'>Diet</span> </div>
          {/* ------------------------------------------------------------------------------ */}
          <div className="flex flex-wrap -m-4">

            {allpost.allpostdata.map((e) => {
              if (e.type == "Healthy Diet") {
                if (healthy >= 1) {
                  healthy--;
                  return (
                    <Link key={e.id} href={`/post/${e.slug}`} className="block mx-auto lg:w-1/4 md:w-1/2 ">
                      <div className="hover:scale-100 ease-in duration-200  scale-95 hover:shadow-lg my-5 p-4 mx-auto" >
                        <div className="h-full flex flex-col items-center ">
                          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={e.image} />
                          <div className="w-full">
                            <h3 className="text-blue-500  mb-3">{e.type}</h3>
                            <p className="mb-4 font-bold hover:underline decoration-indigo-500">{e.heading}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )

                }
                else {
                  return (<Link key={e.id} href={`/post/${e.slug}`} className="md:w-1/3 my-4 sm:my-6 md:my-8">
                    <div className="hover:scale-100 ease-in duration-200  scale-95 hover:shadow-lg p-4  sm:mb-0 mb-6"  >
                      <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src={e.image} />
                      </div>
                      <h2 className="text-blue-500  my-3">{e.type}</h2>
                      <p className="mb-4 font-bold hover:underline decoration-indigo-500">{e.heading}</p>
                    </div></Link>)
                }

              }
              else {
                return;
              }
            })}
          </div>
          {/* ------------------------------------------------------------------------------ */}
        </div>

        {/* ------------------------------------------------- Exercise & Fitness section ------------------------ */}

        <div className="container px-5 py-12 mx-auto ">
          <div className='text-xl md:text-2xl text-blue-500 mb-5 font-bold'>Exercise &  <span className='text-gray-500'>Fitness</span></div>
          {/* ------------------------------------------------------------------------------ */}
          <div className="flex flex-wrap -m-4">

            {allpost.allpostdata.map((e) => {
              if (e.type == "Exercise & Fitness") {
                if (exercise >= 1) {
                  exercise--;
                  return (
                    <Link key={e.id} href={`/post/${e.slug}`} className="block mx-auto lg:w-1/4 md:w-1/2 ">
                      <div className="hover:scale-100 ease-in duration-200  scale-95 hover:shadow-lg my-5 p-4 mx-auto" >
                        <div className="h-full flex flex-col items-center ">
                          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={e.image} />
                          <div className="w-full">
                            <h3 className="text-blue-500  mb-3">{e.type}</h3>
                            <p className="mb-4 font-bold hover:underline decoration-indigo-500">{e.heading}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )

                }
                else {
                  return (<Link key={e.id} href={`/post/${e.slug}`} className="md:w-1/3 my-4 sm:my-6 md:my-8">
                    <div className="hover:scale-100 ease-in duration-200  scale-95 hover:shadow-lg p-4  sm:mb-0 mb-6"  >
                      <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src={e.image} />
                      </div>
                      <h2 className="text-blue-500  my-3">{e.type}</h2>
                      <p className="mb-4 font-bold hover:underline decoration-indigo-500">{e.heading}</p>
                    </div></Link>)
                }

              }
              else {
                return;
              }
            })}

          </div>
          {/* ------------------------------------------------------------------------------ */}
        </div>



        {/* ------------------------------------------------- Yoga section ------------------------ */}

        <div className="container px-5 py-12 mx-auto ">
          <div className='text-xl md:text-2xl text-blue-500 mb-5 font-bold'>Yo<span className='text-gray-500'>ga</span></div>
          {/* ------------------------------------------------------------------------------ */}
          <div className="flex flex-wrap -m-4">
            {allpost.allpostdata.map((e) => {
              if (e.type == "Yoga") {
                if (yoga >= 1) {
                  yoga--;
                  return (
                    <Link key={e.id} href={`/post/${e.slug}`} className="block mx-auto lg:w-1/4 md:w-1/2 ">
                      <div className="hover:scale-100 ease-in duration-200  scale-95 hover:shadow-lg my-5 p-4 mx-auto" >
                        <div className="h-full flex flex-col items-center ">
                          <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={e.image} />
                          <div className="w-full">
                            <h3 className="text-blue-500  mb-3">{e.type}</h3>
                            <p className="mb-4 font-bold hover:underline decoration-indigo-500">{e.heading}</p>
                          </div>
                        </div>
                      </div>
                    </Link>
                  )

                }
                else {
                  return (<Link key={e.id} href={`/post/${e.slug}`} className="md:w-1/3 my-4 sm:my-6 md:my-8">
                    <div className="hover:scale-100 ease-in duration-200  scale-95 hover:shadow-lg p-4  sm:mb-0 mb-6"  >
                      <div className="rounded-lg h-64 overflow-hidden">
                        <img alt="content" className="object-cover object-center h-full w-full" src={e.image} />
                      </div>
                      <h2 className="text-blue-500  my-3">{e.type}</h2>
                      <p className="mb-4 font-bold hover:underline decoration-indigo-500">{e.heading}</p>
                    </div></Link>)
                }

              }
              else {
                return;
              }
            })}

          </div>
          {/* ------------------------------------------------------------------------------ */}
        </div>
      </section>
    </Layout>
  )
}

export default dietfitnes
