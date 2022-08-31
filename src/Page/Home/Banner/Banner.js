import React from 'react';

import './Banner.css'

const Banner = () => {
    return (
        <div className='hero-bg m-left'>
            <div className='px-4 py-32 mx-auto'>
                <h1 className='text-4xl font-bold text-white'>Distribution Storage Warehousing and<br /> <span className='text-yellow-400'> Fulfillment</span></h1>
                <p className='text-3xl text-white my-4'>Get what you wanted just on time</p>
                <button class="btn btn-primary">Get Started</button>
            </div>
        </div>
    );
};

export default Banner;