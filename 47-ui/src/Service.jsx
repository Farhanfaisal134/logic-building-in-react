import React from 'react'
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from 'swiper/modules'
import "swiper/css"
import "swiper/css/pagination"
import { FaArrowRight } from 'react-icons/fa';

const Service = () => {
    const services = [
        {
            title: "Washroom Cleaning",
            des: "As a web crawler expert, I help otganizations adjust to the expanding ",
            image: "img2.jpg",
            icon: "🧼"
        },
        {
            title: "Window Cleaning",
            des: "As a web crawler expert, I help otganizations adjust to the expanding ",
            image: "img3.jpg",
            icon: "🪟"
        },
        {
            title: "Kitchen Cleaning",
            des: "As a web crawler expert, I help otganizations adjust to the expanding ",
            image: "img4.jpg",
            icon: "🍽️"
        },
        {
            title: "Car Cleaning",
            des: "As a web crawler expert, I help otganizations adjust to the expanding ",
            image: "img5.jpg",
            icon: "🚗"
        },
        {
            title: "Door Cleaning",
            des: "As a web crawler expert, I help otganizations adjust to the expanding ",
            image: "img6.jpg",
            icon: "🚪"
        },
    ]
    return (
        <>
            <div className='w-full py-16 px-6 md:px-16 text-center'>
                <h3 className='text-blue-600 font-bold uppercase text-sm '>Our featured services</h3>
                <h2 className='text-4xl font-extrabold text-blue-900 mt-2'>Why will you choose <br /> our services?</h2>

                <div className='mt-10'>
                    <Swiper
                        slidesPerView={1}
                        spaceBetween={20}
                        breakpoints={{
                            768: { slidesPerView: 2 },
                            1024: { slidesPerView: 3 },
                        }}
                        pagination={{ clickable: true }}
                        modules={[Pagination]}
                        className='w-full '
                    >
                        {services.map((service, index) => (
                            <SwiperSlide key={index}>
                                <div className='bg-white shadow-lg  overflow-hidden transition-transform duration-300 hover:-translate-y-5'>
                                    <img src={service.image} className='w-full h-52 object-cover'></img>
                                    <div className='p-6 text-left'>
                                        <div className='flex items-center gap-3 text-blue-600 text-3xl'>
                                            <span >{service.icon}</span>
                                            <h3 className='text-xl font-bold text-gray-900'>{service.title}</h3>
                                        </div>
                                        <p className='text-gray-600 mt-3'>{service.des}</p>
                                        <a className='mt-4 inline-flex items-center text-blue-600 font-bold'><span>Read more</span><span><FaArrowRight /></span></a>
                                    </div>
                                </div>
                            </SwiperSlide>
                        ))}
                    </Swiper>
                </div>
            </div>

            <section className='relative w-full h-screen flex items-center justify-center'>
                <div className='absolute inset-0 bg-cover bg-center bg-fixed' style={{ backgroundImage: "url('img1.jpg')" }}></div>
                <div className='absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent'></div>

                <div className='relative z-10 max-w-2xl text-white px-10'>
                    <h1 className='text-4xl md:text-5xl font-bold'>Join Our Professional Team</h1>
                    <p className='mt-6 text-lg opacity-80'>As a web crawler expert, I help otganizations adjust to the expanding significance. As a web crawler expert, I help otganizations adjust to the expanding significance. As a web crawler expert, I help otganizations adjust to the expanding significance.</p>
                    <a className='mt-6 inline-block bg-blue-500 hover:bg-blue-800 text-white px-6 py-3 rounded-lg font-bold sahadow-lg'>Get an Estimate</a>
                </div>
            </section>
        </>
    )
}

export default Service
