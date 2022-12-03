import React from 'react';
import Link from 'next/link';
import allpost from '../websitecontent/allpost.json';
// import { Alert } from "flowbite-react";
import Slick from '../components/Slick'


const index = () => {
  let stories = 6;

  return (<>
    <section className="text-gray-600 body-font">
      {/* --------------------------------------- Hero section --------------------------------------------- */}

      <Slick />


      {/* -------------------------------------  Latest Stories section     ----------------------- */}

      <div className="container md:my-10  px-5 py-12 mx-auto  ">
        <div className='text-xl md:text-2xl text-blue-500 mb-5 font-bold'>Latest <span className='text-gray-500'>Stories</span></div>
        <div className="flex flex-wrap -m-2">
          {allpost.allpostdata.map((e) => {
            if (stories >= 1) {
              if (e.about == "Stories") {
                stories--;
                return (<Link key={e.id} href={`/post/${e.slug}`} className="lg:w-1/3 md:w-1/2 w-full my-1 md:my-4"> <div className="p-2   hover:scale-100 ease-in duration-200  scale-95 hover:shadow-lg">
                  <div className="h-full flex   p-2 rounded-lg">
                    <img alt="team" className="w-h-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-xl mr-4" src={`${e.image}`} />
                    <div className="flex-grow">
                      <h2 className="text-blue-900 text-xs font-semibold mb-2">{e.type}</h2>
                      <p className="mb-4 font-bold hover:underline decoration-indigo-500 ">{e.heading}</p>
                    </div>
                  </div>
                </div></Link>)
              }
            }
            else {
              return;
            }
          })}

        </div>
      </div>

      {/* --------------------------------------- lastest section lastesttopics --------------------------------------------- */}

      <div className="container md:my-10  px-5 py-12 mx-auto  ">
        <div className='text-xl md:text-2xl text-blue-500 mb-5 font-bold'>Lastest <span className='text-gray-500'>Topics</span></div>
        <div className="flex flex-wrap -m-4">

          {allpost.allpostdata.map((e) => {
            if (e.about == "lastesttopics") {
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
              return;
            }
          })}
        </div>
      </div>





      {/* -------------------------------     Pregnancy & Parenting section       ----------------------------- */}
      {/* pregnancy */}

      <div className="container md:my-10  px-5 py-12 mx-auto  ">
        <div className='text-xl md:text-2xl text-blue-500 mb-5 font-bold'>Pregnancy &  <span className='text-gray-500'>Parenting</span></div>
        <div className="flex flex-wrap -mx-4 -mb-10 ">
          {allpost.allpostdata.map((e) => {
            if (e.about == "pregnancy") {
              return (<Link key={e.id} href={`/post/${e.slug}`} className="sm:w-1/2"> <div className="hover:scale-100 ease-in duration-200  scale-95 hover:shadow-lg py-5   mb-10 px-4">
                <div className="rounded-lg h-64 overflow-hidden">
                  <img alt="content" className="object-cover object-center h-full w-full" src={`${e.image}`} />
                </div>
                <h2 className="text-blue-900 text-sm font-semibold mb-2">{e.type}</h2>
                <p className="mb-4 font-bold hover:underline decoration-indigo-500">{e.heading}</p>
              </div></Link>
              )
            }
            else {
              return;
            }
          })}
        </div>
      </div>

      {/* -------------------------------     Diet & Fitness section   fitness    ----------------------------- */}

      <div className="container md:my-10  px-5 py-12 mx-auto  ">
        <div className='text-xl md:text-2xl text-blue-500 mb-5 font-bold'>Diet &  <span className='text-gray-500'>Fitness</span> </div>
        {/* ------------------------------------------------------------------------------ */}
        <div className="flex flex-wrap -m-4">

          {allpost.allpostdata.map((e) => {
            if (e.about == "fitness") {
              return (<Link key={e.id} href={`/post/${e.slug}`} className="lg:w-1/4 md:w-1/2 my-4 sm:my-6 md:my-8">
                <div className="hover:scale-100 ease-in duration-200  scale-95 hover:shadow-lg p-4 mx-auto" >
                  <div className="h-full flex flex-col items-center ">
                    <img alt="team" className="flex-shrink-0 rounded-lg w-full h-56 object-cover object-center mb-4" src={e.image} />
                    <div className="w-full">
                      <h3 className="text-blue-500  mb-3">{e.type}</h3>
                      <p className="mb-4 font-bold hover:underline decoration-indigo-500">{e.heading}</p>
                    </div>
                  </div>
                </div></Link>
              )
            }
            else {
              return;
            }
          })}
        </div>
        {/* ------------------------------------------------------------------------------ */}
      </div>


      {/* -------------------------------  healthnews  Health News section       ----------------------------- */}

      <div className="container md:my-10  px-5 py-12 mx-auto  ">
        <div className='text-xl md:text-2xl text-blue-500 mb-5 font-bold'> Health  <span className='text-gray-500'>News</span> </div>
        <div className="flex flex-wrap -m-2">

          {allpost.allpostdata.map((e) => {
            if (e.about == "healthnews") {
              return (<Link key={e.id} href={`/post/${e.slug}`} className="lg:w-1/3 md:w-1/2 w-full my-4 md:my-6">
                <div className="hover:scale-100 ease-in duration-200  scale-95 hover:shadow-lg p-2">
                  <div className="h-full flex   p-2 rounded-lg">
                    <img alt="team" className="w-h-24 h-24 bg-gray-100 object-cover object-center flex-shrink-0 rounded-xl mr-4" src={e.image} />
                    <div className="flex-grow">
                      <h2 className="text-blue-900 text-xs font-semibold my-2">{e.type}</h2>
                      <p className="mb-4 font-bold hover:underline decoration-indigo-500  ">{e.heading} </p>
                    </div>
                  </div>
                </div></Link>
              )
            }
            else {
              return;
            }
          })}
        </div>
      </div>


      {/* -------------------------------grooming    Grooming section       ----------------------------- */}

      <div className="container md:my-10  px-5 py-12 mx-auto  ">
        <div className='text-xl md:text-2xl text-blue-500 mb-5 font-bold'>Groo<span className='text-gray-500'>ming</span></div>
        {/* ---------------------------------------------------------- */}
        <div className="flex flex-wrap sm:-m-4 -mx-4 -mb-10 -mt-4">
          {allpost.allpostdata.map((e) => {
            if (e.about == "healthnews") {
              return (<Link key={e.id} href={`/post/${e.slug}`} className="md:w-1/3 my-4 sm:my-6 md:my-8">
                <div className="hover:scale-100 ease-in duration-200  scale-95 hover:shadow-lg p-4  sm:mb-0 mb-6"  >
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src={e.image} />
                  </div>
                  <h2 className="text-blue-900 text-sm font-semibold my-2">{e.type}</h2>
                  <p className="mb-4 font-bold hover:underline decoration-indigo-500">{e.heading}</p>
                </div></Link>
              )
            }
            else {
              return;
            }
          })}
        </div>
        {/* ---------------------------------------------------------- */}
      </div>


      {/* -------------------------------  diseases  Diseases section       ----------------------------- */}

      <div className="container md:my-10  px-5 py-12 mx-auto  ">
        <div className='text-xl md:text-2xl text-blue-500 mb-5 font-bold'>Dise<span className='text-gray-500'>ases</span></div>
        {/* ---------------------------------------------------------- */}
        <div className="flex flex-wrap -mx-4 -mb-10  ">
          {allpost.allpostdata.map((e) => {
            if (e.about == "diseases") {
              return (<Link key={e.id} href={`/post/${e.slug}`} className="sm:w-1/2">
                <div className="hover:scale-100 ease-in duration-200 py-5 scale-95 hover:shadow-lg  mb-10 px-4" key={e.id}>
                  <div className="rounded-lg h-64 overflow-hidden">
                    <img alt="content" className="object-cover object-center h-full w-full" src={e.image} />
                  </div>
                  <h2 className="text-blue-900 text-sm font-semibold my-2">{e.type}</h2>
                  <p className="mb-4 font-bold hover:underline decoration-indigo-500 ">{e.heading}</p>
                </div>
              </Link>
              )
            }
            else {
              return;
            }
          })}
        </div>
        {/* ---------------------------------------------------------- */}
      </div>


    </section>
  </>
  )
}

export default index