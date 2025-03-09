import React, { useState } from "react";
import {
    FaArrowAltCircleRight,
    FaBars,
    FaFacebook,
    FaInstagram,
    FaLinkedin,
    FaTimes,
    FaTwitter,
} from "react-icons/fa";
import { MdCall, MdEmail } from "react-icons/md";

const Home = () => {
    const [abc, setAbc] = useState(false);

    return (
        <>
            <header className="border-b">
                <div className="hidden md:flex bg-gray-100 text-sm py-2 justify-between items-center px-10">
                    <span>
                        Welcome to Our{" "}
                        <strong className="font-semibold">DigiBal Cleaning Services</strong>
                    </span>
                    <div className="flex items-center gap-4 text-gray-600">
                        <div className="flex items-center gap-1">
                            <MdCall className="text-blue-500" />
                            <span>Call for help:(+9876543210)</span>
                        </div>
                        <span>|</span>
                        <div className="flex items-center gap-2">
                            <MdEmail />
                            <span>Mail to us:abc@gmail.com</span>
                        </div>
                        <span>|</span>
                        <div className="flex items-center gap-2">
                            <FaTwitter className="text-blue-600 cursor-pointer" />
                            <FaFacebook className="text-blue-600 cursor-pointer" />
                            <FaInstagram className="text-blue-600 cursor-pointer" />
                            <FaLinkedin className="text-blue-600 cursor-pointer" />
                        </div>
                    </div>
                </div>

                <nav className="flex justify-between items-center py-4 px-6 md:px-10">
                    <div className="flex items-center gap-2">
                        <span className="text-xl font-bold text-blue-900">DigiBal</span>
                    </div>

                    <button onClick={() => setAbc(true)} className="md:hidden text-2xl">
                        <FaBars />
                    </button>

                    <ul className="hidden md:flex items-center space-x-6 text-lg font-bold text-gray-900">
                        <li>
                            <a href="#home" className="hover:text-blue-600">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#home" className="hover:text-blue-600">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#home" className="hover:text-blue-600">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#home" className="hover:text-blue-600">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#home" className="hover:text-blue-600">
                                Home
                            </a>
                        </li>
                    </ul>
                    <button className="hidden md:block mt-auto  mx-6 mb-6 bg-blue-600 text-white font-bold px-6 py-2 rounded-lg">
                        APPOINTMENT
                    </button>
                </nav>

                <div
                    className={`fixed inset-0 left-0 w-64 bg-white shadow-lg transform ${abc ? "translate-x-0" : "-translate-x-full"
                        } transition-transform duration-300 h-full flex flex-col z-50`}>
                    <button
                        className="text-2xl p-4 self-end"
                        onClick={() => setAbc(false)}
                    >
                        <FaTimes />
                    </button>

                    <ul className=" flex flex-col  gap-6 px-6  mt-10 text-lg font-bold text-gray-900">
                        <li>
                            <a href="#home" className="hover:text-blue-600">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#home" className="hover:text-blue-600">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#home" className="hover:text-blue-600">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#home" className="hover:text-blue-600">
                                Home
                            </a>
                        </li>
                        <li>
                            <a href="#home" className="hover:text-blue-600">
                                Home
                            </a>
                        </li>
                    </ul>
                    <button className="mt-auto  mx-6 mb-6 bg-blue-600 text-white font-bold px-6 py-2 rounded-lg">
                        APPOINTMENT
                    </button>
                </div>
            </header>

            <section
                style={{ backgroundImage: "url('img1.jpg')" }}
                className="relative w-full h-screen flex items-center bg-cover bg-center px-6 md:px-16">
                <div className="absolute inset-0 bg-gradient-to-r from-transparent to-black/80"></div>
                <div className="relative z-10 flex flex-col md:flex-row items-center w-full max-w-7xl mx-auto">
                    <div className="hidden md:flex flex-1"></div>

                    <div className="text-white max-w-xl md:text-right">
                        <h3 className="text-sm uppercase font-bold">We are DigiBal</h3>
                        <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                            DigiBal is a residental <br /> cleaning company
                        </h1>
                        <p className="text-lg mt-4">
                            As a web crawler expert, I help otganizations adjust to the
                            expanding significance.
                        </p>

                        <div className="mt-6 flex items-center md:justify-end space-x-4">
                            <button className="bg-white text-black px-6 py-3 rounded-lg flex items-center gap-2 font-bold">
                                Our Services
                            </button>
                            <button className="bg-white text-black px-6 py-3 rounded-lg flex items-center gap-2 font-bold">
                                <FaArrowAltCircleRight />
                            </button>
                        </div>
                    </div>
                </div>

                <div className="hidden md:block absolute -bottom-18 left-1/2 transform -translate-x-1/2 w-full max-w-6xl px-6">
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        {[
                            { title: "House Cleaning", icon: "🌐" },
                            { title: "Indoor Cleaning", icon: "📱" },
                            { title: "Office Cleaning", icon: "🎨" },
                        ].map((service, index) => (
                            <div
                                key={index}
                                className="bg-white text-black p-6 rounded shadow-lg flex flex-start space-x-4"
                            >
                                <span className="text-3xl bg-gray-200 p-4 rounded-full">
                                    {service.icon}
                                </span>
                                <div>
                                    <h3 className="font-bold text-lg">{service.title}</h3>
                                    <p className="text-sm text-gray-600 ">
                                        As a web crawler expert, I help otganizations adjust to the
                                        expanding significance.
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
};

export default Home;
