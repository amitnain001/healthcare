import React, { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';
import { GiHamburgerMenu } from 'react-icons/gi';
import { useRef } from 'react';
import Link from 'next/link';

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

  return (<>
    <section className='fixed top-0 -left-[0px] lg:-left-[10px] w-screen z-10 bg-white shadow-2xl'>
      <div className='container px-5  mx-auto  '>
        <div className='flex sticky top-0 left-0 justify-between  items-center'>
          <Link href="/"><p className='text-2xl sm:text-3xl font-bold text-blue-700'>Site<span className='text-gray-500'>Logo</span></p></Link>
          <div className='py-3 flex'>
            <div className='overflow-x-auto md:block hidden'>
              <ul className='flex items-center xl:space-x-10 space-x-5'>
                <Link href="/"><li className='block hover:text-blue-700 font-semibold min-w-fit'>Home</li></Link>
                <Link href="/relationships"><li className='block hover:text-blue-700 font-semibold min-w-fit'>Relationships</li></Link>
                <Link href="/diseases"><li className='block hover:text-blue-700 font-semibold min-w-fit'>Diseases</li></Link>
                <Link href="/dietfitnes"><li className='block hover:text-blue-700 font-semibold min-w-fit'>Diet & Fitness</li></Link>
                <Link href="/grooming"><li className='block hover:text-blue-700 font-semibold min-w-fit'>Grooming</li></Link>
                <Link href="/contactus"><li className='block hover:text-blue-700 font-semibold min-w-fit'>Contact Us</li></Link>
              </ul>
            </div>
            <div onClick={toggleLinks} className='flex md:hidden items-center min-w-fit mr-5'>
              <span className='mx-4'>Menu</span>

              {menuicon === 'hide' ? <GiHamburgerMenu className='sm:text-2xl ' /> :
                <AiOutlineClose className='sm:text-2xl ' />}
            </div>
          </div>
        </div>
        {/* ---------------------------------------- Navbar Start ---------------------------------------- */}
        <div ref={toggleEelment} className='hidden'>
          <div className='mt-5'>
            <ul className='flex md:hidden h-screen flex-col justify-items-center align-middle items-center'>
              <Link onClick={toggleLinks} href="/"><li className='block hover:text-blue-700 font-semibold my-2  min-w-fit'>Home</li></Link>
              <Link onClick={toggleLinks} href="/relationships"><li className='block hover:text-blue-700 font-semibold my-2  min-w-fit'>Relationships</li></Link>
              <Link onClick={toggleLinks} href="/diseases"><li className='block hover:text-blue-700 font-semibold my-2  min-w-fit'>Diseases</li></Link>
              <Link onClick={toggleLinks} href="/dietfitnes"><li className='block hover:text-blue-700 font-semibold my-2  min-w-fit'>Diet & Fitness</li></Link>
              <Link onClick={toggleLinks} href="/grooming"><li className='block hover:text-blue-700 font-semibold my-2 min-w-fit'>Grooming</li></Link>
              <Link onClick={toggleLinks} href="/contactus"><li className='block hover:text-blue-700 font-semibold my-2  min-w-fit'>Contact Us</li></Link>
            </ul>
          </div>
        </div>
      </div>
    </section>
  </>
  )
}

export default Navbar