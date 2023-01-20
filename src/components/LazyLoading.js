import React from 'react'

function LazyLoading() {
    return (
        <div className='border-b-[2px] w-full h-[130px]'>
            <div className='titleLoading'></div>
            <div className='flex justify-between ml-10 mr-5'>
                <div className='contentLoading'></div>
                <div className='contentLoading'></div>
                <div className='contentLoading'></div>
                <div className='profileLoading'></div>
            </div>
        </div>
    )
}

export default LazyLoading