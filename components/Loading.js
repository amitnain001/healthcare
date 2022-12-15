import React from 'react'

const Loading = () => {
    return (
        <div className='fixed w-full top-0 left-0 h-screen z-40  bg-black opacity-50 flex justify-center items-center'>
            <img src="../../Spinner.gif" alt="spiner for loading " className='' />
        </div>
    )
}

export default Loading