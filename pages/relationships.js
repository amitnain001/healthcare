import React from 'react';
import Link from 'next/link';
import allpost from '../websitecontent/allpost.json';




const relationships = () => {
  let dating = 4;
  let marriage = 4;
  let cheating = 4;

  return (
    <section className="text-gray-600 body-font pt-16">
      <div className="container px-5 py-12 mx-auto  ">
        <div className='text-xl md:text-2xl text-blue-500 mb-5 font-bold'>Dat<span className='text-gray-500'>ing</span> </div>
        {/* --------------------------------------------------------------- type Dating --------------- */}
        <div className="flex flex-wrap -m-4">
          {allpost.allpostdata.map((e) => {
            if (e.type == "Dating") {
              if (dating >= 1) {
                dating--;
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
                  <div  className="hover:scale-100 ease-in duration-200  scale-95 hover:shadow-lg p-4  sm:mb-0 mb-6"  >
                    <div  className="rounded-lg h-64 overflow-hidden">
                      <img alt="content"  className="object-cover object-center h-full w-full" src={e.image} />
                    </div>
                    <h2  className="text-blue-500  my-3">{e.type}</h2>
                    <p  className="mb-4 font-bold hover:underline decoration-indigo-500">{e.heading}</p>
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

      {/* --------------------------------------------- Marriage section ------------------------ */}
      <div className="container px-5 py-12 mx-auto  ">
        <div className='text-xl md:text-2xl text-blue-500 mb-5 font-bold'>Marr<span className='text-gray-500'>iage</span></div>
        {/* ------------------------------------------------------------------------------ */}
        <div className="flex flex-wrap -m-4">

        {allpost.allpostdata.map((e) => {
            if (e.type == "Marriage") {
              if (marriage >= 1) {
                marriage--;
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
                  <div  className="hover:scale-100 ease-in duration-200  scale-95 hover:shadow-lg p-4  sm:mb-0 mb-6"  >
                    <div  className="rounded-lg h-64 overflow-hidden">
                      <img alt="content"  className="object-cover object-center h-full w-full" src={e.image} />
                    </div>
                    <h2  className="text-blue-500  my-3">{e.type}</h2>
                    <p  className="mb-4 font-bold hover:underline decoration-indigo-500">{e.heading}</p>
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

      {/* ------------------------------------------------- Cheating section ------------------------ */}

      <div className="container px-5 py-12 mx-auto  ">
        <div className='text-xl md:text-2xl text-blue-500 mb-5 font-bold'>Chea<span className='text-gray-500'>ting</span></div>
        {/* ------------------------------------------------------------------------------ */}
        <div className="flex flex-wrap -m-4">

        {allpost.allpostdata.map((e) => {
            if (e.type == "Cheating") {
              if (cheating >= 1) {
                cheating--;
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
                  <div  className="hover:scale-100 ease-in duration-200  scale-95 hover:shadow-lg p-4  sm:mb-0 mb-6"  >
                    <div  className="rounded-lg h-64 overflow-hidden">
                      <img alt="content"  className="object-cover object-center h-full w-full" src={e.image} />
                    </div>
                    <h2  className="text-blue-500  my-3">{e.type}</h2>
                    <p  className="mb-4 font-bold hover:underline decoration-indigo-500">{e.heading}</p>
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
  )
}

export default relationships
