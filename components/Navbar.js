import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useRef } from 'react';
import Link from 'next/link';
// import { useEffect } from 'react';
// import { createClient } from "next-sanity";

const Navbar = () => {

  const [menuicon, setmenuicon] = useState('hide')
  const toggleEelment = useRef();
  const toggleLinks = () => {
    if (toggleEelment.current.classList == 'hidden') {
      toggleEelment.current.classList.remove('hidden');
      toggleEelment.current.classList.add('block');
      setmenuicon('show')
    } else {
      toggleEelment.current.classList.remove('block')
      toggleEelment.current.classList.add('hidden');
      setmenuicon('hide')
    }
  }

  // const [categories, setcategories] = useState();
  // console.log(categories);
  // useEffect(() => {
  //   const client = createClient({
  //     projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  //     dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  //     useCdn: false
  //   })
  //   const getcategories = async () => {
  //     const categoryquery = `*[_type=="categoryTypes"]`;
  //     const allcategories = await client.fetch(categoryquery);
  //     setcategories(allcategories[0].categoryNames);
  //   }
  //   getcategories();
  // }, []);

  return (<>
    <section className='fixed top-0 -left-[0px] lg:-left-[10px] w-screen z-10 bg-white shadow-lg'>
      <div className='container px-5   max-w-screen-lg mx-auto '>
        <div className='flex sticky top-0 left-0 justify-between  items-center'>
          <Link href="/"><img src={"../../logo.png"} className='h-10 sm:h-14 my-1' alt="site logo" /></Link>
          <div className='py-3 flex'>
            <div className='overflow-x-auto md:block hidden'>
              <ul className='flex items-center xl:space-x-10 space-x-5'>
                <Link href="/"><li className='block hover:text-blue-700 font-semibold min-w-fit'>होम</li></Link>
                <Link href="/relationships"><li className='block hover:text-blue-700 font-semibold min-w-fit'>रिलेशनशिप</li></Link>
                <Link href="/diseases"><li className='block hover:text-blue-700 font-semibold min-w-fit'>स्वास्थ्य और बीमारियां</li></Link>
                <Link href="/dietfitnes"><li className='block hover:text-blue-700 font-semibold min-w-fit'>डाइट और फिटनेस</li></Link>
                <Link href="/grooming"><li className='block hover:text-blue-700 font-semibold min-w-fit'>ग्रूमिंग टिप्स</li></Link>
                <Link href="/contactus"><li className='block hover:text-blue-700 font-semibold min-w-fit'>संपर्क करें</li></Link>
              </ul>
            </div>
            <div onClick={toggleLinks} className='flex md:hidden items-center min-w-fit mr-5'>
              <span className='mx-4'>Menu</span>

              {menuicon === 'hide' ? <GiHamburgerMenu className='sm:text-2xl cursor-pointer ' /> :
                <AiOutlineClose className='sm:text-2xl cursor-pointer ' />}
            </div>
          </div>
        </div>
        {/* ---------------------------------------- Navbar Start ---------------------------------------- */}
        <div ref={toggleEelment} className='hidden'>
          <div className='mt-5'>
            <ul className='flex md:hidden h-screen flex-col justify-items-center align-middle items-center'>
              <Link onClick={toggleLinks} href="/"><li className='block hover:text-blue-700 font-semibold my-2  min-w-fit'> होम </li></Link>
              <Link onClick={toggleLinks} href="/relationships"><li className='block hover:text-blue-700 font-semibold my-2  min-w-fit'>रिलेशनशिप</li></Link>
              <Link onClick={toggleLinks} href="/diseases"><li className='block hover:text-blue-700 font-semibold my-2  min-w-fit'>स्वास्थ्य और बीमारियां</li></Link>
              <Link onClick={toggleLinks} href="/dietfitnes"><li className='block hover:text-blue-700 font-semibold my-2  min-w-fit'>डाइट और फिटनेस</li></Link>
              <Link onClick={toggleLinks} href="/grooming"><li className='block hover:text-blue-700 font-semibold my-2 min-w-fit'>ग्रूमिंग टिप्स</li></Link>
              <Link onClick={toggleLinks} href="/contactus"><li className='block hover:text-blue-700 font-semibold my-2  min-w-fit'>संपर्क करें</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Navbar;

