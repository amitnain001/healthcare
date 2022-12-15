import React, { useEffect } from 'react'
import Footer from './Footer'
import Navbar from './Navbar'
import Head from 'next/head';


const Layout = ({ title, children }) => {

    return (
        <div >
            <Head>
                <title>{title ? `${title} Aruvedic Baba` : 'Aruvedic Baba'}</title>
                <meta name="viewport" content="initial-scale=1.0, width=device-width" />
            </Head>
            <nav>
                <Navbar />
            </nav>
            <main className='max-w-screen-lg mx-auto'>
                {children}
            </main>
            <footer>
                <Footer />
            </footer>
        </div>
    )
}

export default Layout;