import React from 'react'
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa'
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from 'swiper/modules'
import "swiper/css"

const Test = () => {
    const test1 = [
        {
            name: "Baljinder kaur",
            role: "Agent Manager",
            image: "img3.jpg",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            stars: 5,
        },
        {
            name: "Baljinder kaur",
            role: "Agent Manager",
            image: "img3.jpg",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            stars: 4,
        },
        {
            name: "Baljinder kaur",
            role: "Agent Manager",
            image: "img3.jpg",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            stars: 5,
        },
        {
            name: "Baljinder kaur",
            role: "Agent Manager",
            image: "img3.jpg",
            review: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            stars: 3,
        }
    ]
    return (
        <div className='max-w-6xl mx-auto px-4 py-12'>
            <h4 className='text-lg font-bold text-gray-700 text-center'>Clent's Reviews</h4>
            <h2 className='text-3xl font-bold text-blue-700 mt-2 text-center'>We are very happy for <br /> client's reviews.</h2>

            <div className='relative mt-6 flex items-center justify-center'>
                <button className='swiper-button-prev z-10 absolute left-0 md:-left-12 transform -translate-y-1/2 text-blue-600'><FaArrowLeft size={32} /></button>

                <Swiper
                    modules={[Navigation]}
                    navigation={{
                        nextEl: ".swiper-button-next",
                        prevEl: ".swiper-button-prev",
                    }}
                    spaceBetween={30}
                    slidesPerView={1}
                    loop={true}
                    breakpoints={{
                        768: { slidesPerView: 2 },
                        1024: { slidesPerView: 3 }
                    }}
                >
                    {test1.map((t, index) => (
                        <SwiperSlide key={index}>
                            <div className='bg-white shadow-lg p-6 text-center max-w-xs mx-auto'>
                                <p className='text-gray-600 italic'>{t.review}</p>
                                <img src={t.image} className='w-16 h-16 mx-auto rounded-full mt-4 object-cover'></img>
                                <h3 className='text-blue-700 font-bold mt-2'>{t.name}</h3>
                                <p className='text-gray-500 text-sm'>{t.role}</p>
                                <div className='flex justify-center mt-2 text-yellow-400'>{"★".repeat(t.stars)}</div>
                            </div>
                        </SwiperSlide>
                    ))}
                </Swiper>
                <button className='swiper-button-prev z-10 absolute right-0 md:-right-12 transform -translate-y-1/2 text-blue-600'><FaArrowRight size={32} /></button>



            </div>


        </div>
    )
}

export default Test
