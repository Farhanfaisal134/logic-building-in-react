import React, { useState } from 'react'
import { FaChevronLeft, FaChevronRight } from 'react-icons/fa'

const Blog = () => {
    const [cI, setCI] = useState(0)
    const blogs = [
        {
            id: 1,
            date: "17 Aug/20",
            category: "Office",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "img1.jpg"
        },
        {
            id: 2,
            date: "17 Aug/20",
            category: "Office",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "img3.jpg"
        },
        {
            id: 3,
            date: "17 Aug/20",
            category: "Office",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "img4.jpg"
        },
        {
            id: 4,
            date: "17 Aug/20",
            category: "Office",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "img4.jpg"
        },
        {
            id: 5,
            date: "17 Aug/20",
            category: "Office",
            title: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            des: "Lorem ipsum dolor sit amet, consectetur adipiscing elit.Lorem ipsum dolor sit amet, consectetur adipiscing elit.",
            image: "img4.jpg"
        },
    ]


    const prevSlide = () => {
        setCI((prevIndex) => (prevIndex === 0 ? blogs.length - 1 : prevIndex - 1))
    }
    const nextSlide = () => {
        setCI((prevIndex) => (prevIndex === blogs.length - 1 ? 0 : prevIndex + 1))
    }

    return (
        <div className='relative w-full max-w-5xl mx-auto pa-4 py-8'>
            <h2 className='text-3xl font-bold text-blue-900 mb-6'>Learn about our latest news from blog.</h2>

            <div className='relative flex items-center overflow-hidden'>
                <button
                    onClick={prevSlide}
                    className='absolute left-0 z-10 bg-gray-800 text-white p-2 rounded-full '><FaChevronLeft /></button>

                <div className='flex transition-transform duration-500 ease-in-out transform' style={{ transform: `translateX(-${cI * 100}%)` }}>
                    {blogs.map((post) => (
                        <div key={post.id} className='relative flex-shrink-0 w-full sm:w-1/3 px-2'>
                            <div className='bg-white shadow-lg overflow-hidden relative group transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl'>
                                <img src={post.image} className='w-full h-48 object-cover'></img>
                                <div className='absolute top-4 left-4 bg-blue-600 text-white px-3 py-1 text-sm font-bols'>{post.date}</div>
                                <div className='p-4'>
                                    <p className='text-sm text-gray-500'>{post.category}</p>
                                    <h3 className='text-lg font-semibold text-blue-900'>{post.title}</h3>
                                    <p className='text-gray-600 text-sm mt-2'>{post.des}</p>
                                    <button className='mt-3 text-blue-600 font-semibold '>Read More +</button>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
                <button onClick={nextSlide} className='absolute right-0 z-10 bg-gray-800 text-white p-2 rounded-full '>
                    <FaChevronRight /></button>

            </div>
        </div>
    )
}

export default Blog
