import React from 'react';


const contactus = () => {

  return (
    <section  className="text-gray-600 py-24 body-font">
      <h1 className='text-5xl font-bold text-center sm:my-5'>About <span className='text-blue-500'>Us</span></h1>
      <div  className="container px-5 py-12 mx-auto flex flex-wrap">
        <div  className="flex flex-wrap -mx-4 mt-auto mb-auto lg:w-1/2 sm:w-2/3 content-start sm:pr-10">
          <div  className="w-full sm:p-4 px-4 mb-6">
            <h1  className="title-font font-medium text-xl mb-2 text-gray-900">Moon hashtag pop-up try-hard offal truffaut</h1>
            <div  className="leading-relaxed">Pour-over craft beer pug drinking vinegar live-edge gastropub, keytar neutra sustainable fingerstache kickstarter.</div>
          </div>
          <div  className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2  className="title-font font-medium text-3xl text-gray-900">50+</h2>
            <p  className="leading-relaxed">Team Members</p>
          </div>
          <div  className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2  className="title-font font-medium text-3xl text-gray-900">1.8K</h2>
            <p  className="leading-relaxed">Users</p>
          </div>
          <div  className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2  className="title-font font-medium text-3xl text-gray-900">5</h2>
            <p  className="leading-relaxed">Places</p>
          </div>
          <div  className="p-4 sm:w-1/2 lg:w-1/4 w-1/2">
            <h2  className="title-font font-medium text-3xl text-gray-900">100</h2>
            <p  className="leading-relaxed">Products</p>
          </div>
        </div>
        <div  className="lg:w-1/2 sm:w-1/3 w-full rounded-lg overflow-hidden mt-6 sm:mt-0">
          <img  className="object-cover object-center w-full " src="https://images.unsplash.com/photo-1580982169321-36e1ad95adba?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8NTJ8fHNjaWVudGlzdHN8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60" alt="stats" />
        </div>
      </div>


      {/* -------------------------------------------- Contact Us --------------------- */}
      <h1 className='text-5xl font-bold text-center mt-10 sm:mt-16 mb-5'>Contact <span className='text-blue-500'>Us</span></h1>
      <div className='container px-5 my-24 mx-auto relative'>
        <div  className="lg:absolute  inset-0 bg-gray-300">
          <iframe  className="gmap_iframe min-h-screen lg:min-h-0  w-full h-full" frameborder="0" scrolling="no" marginheight="0" marginwidth="0" src="https://maps.google.com/maps?width=600&amp;height=400&amp;hl=en&amp;q=eklavya library hisar&amp;t=&amp;z=14&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>

        </div>
        <div  className="container px-5 py-24 mx-auto flex">
          <div  className="lg:w-1/3  bg-white rounded-lg px-2 py-6 sm:p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-[1] shadow-md">
            <h2  className="text-gray-900 text-lg mb-1 font-medium title-font">Feedback</h2>
            <p  className="leading-relaxed mb-5 text-gray-600">Post-ironic portland shabby chic echo park, banjo fashion axe</p>
            <div  className="relative mb-4">
              <label for="email"  className="leading-7 text-sm text-gray-600">Email</label>
              <input type="email" id="email" name="email"  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 text-base outline-none text-gray-700 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out" />
            </div>
            <div  className="relative mb-4">
              <label for="message"  className="leading-7 text-sm text-gray-600">Message</label>
              <textarea id="message" name="message"  className="w-full bg-white rounded border border-gray-300 focus:border-blue-500 focus:ring-2 focus:ring-blue-200 h-32 text-base outline-none text-gray-700 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"></textarea>
            </div>
            <button  className="text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">Submit</button>
            <p  className="text-xs text-gray-500 mt-3">Chicharrones blog helvetica normcore iceland tousled brook viral artisan.</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default contactus
