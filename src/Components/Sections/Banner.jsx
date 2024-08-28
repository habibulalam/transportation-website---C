import React from 'react';
import '../../App.css'
import worldImage from '../../assets/world.png'

const Banner = () => {
    return (
        <section id='home' className='max-w-[90%] w-[1440px] mx-auto mb-14'>
            {/* Banner Container */}
            <div className='theBanner-bg flex gap-6 flex-col md:flex-col lg:flex-row justify-center items-center border-[0.5px] border-blue-800/50'>
                {/* Heading title */}
                <div className='text-white space-y-6  p-5'>
                    <p className='text-blue-200-200'>Lorem ipsum dolor sit amet.</p>
                    <h1 className='text-3xl'>Find the best froight <br /> quote</h1>
                    <p>Lorem ipsum dolor sit amet consectetur <br /> adipisicing elit. Ipsum, laborum!</p>
                </div>
                {/* World Image */}
                <div className='p-5'>
                    <img src={worldImage} className='w-full' alt="" />
                </div>
            </div>
        </section>
    );
};

export default Banner;