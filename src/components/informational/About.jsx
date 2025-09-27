import React, { useState } from "react";
import Footer from "../layout/Footer";


const About = () => {
    return(
        <>
        <nav className="glass-effect bg-white-50 dark:bg-white-700">
            <div className="max-w-screen-xl px-4 py-3 mx-auto">
                <div className="flex items-center justify-center">
                    <ul className="flex flex-row font-medium mt-0 space-x-8 rtl:space-x-reverse text-sm">
                        <li>
                            <a href="/" className="text-gray-900 dark:text-white hover:underline" aria-current="page">Home</a>
                        </li>
                        <li>
                            <a href="/categories" className="text-gray-900 dark:text-white hover:underline">Categories</a>
                        </li>
                        <li>
                            <a href="/about" className="text-gray-900 dark:text-white hover:underline">About</a>
                        </li>
                        <li>
                            <a href="/contactUs" className="text-gray-900 dark:text-white hover:underline">Contact us</a>
                        </li>
                    </ul>
                </div>
            </div>
        </nav>
        <div className="w-[100vw] lg:w-[60vw]">
            <h1 className="font-sacramento text-[#48B3AF] mt-20">About Us</h1>
            <div className="glass-effect w-[80%] m-auto text-left p-5 my-10">
                <p>Welcome to <b>epdf</b>, your trusted platform for accessing high-quality digital learning resources. We are dedicated to providing students, educators, and lifelong learners with easy access to ebooks, semester notes, previous year papers, and music PDFs—all in one place.</p>
                <p className="my-5"><b>Our mission is simple:</b></p>
                <span>📚 Make knowledge accessible, affordable, and well-organized.</span>
                <h2 className="my-5"><b>What We Offer</b></h2>
                <ul>
                    <li><b>Semester Notes</b>-<span>Concise and structured materials to help you prepare faster.</span></li>
                    <li><b>Full E-Books</b>-<span>In-depth resources for comprehensive learning.</span></li>
                    <li><b>Previous Year Papers</b>-<span>Practice and prepare with real exam material.</span></li>
                    <li><b>Music PDFs</b>-<span>Notes and guides for passionate learners and musicians.</span></li>
                </ul>
                <h2 className="my-5"><b>Why Choose Us?</b></h2>
                <div className="flex flex-col">
                    <span>✅ Easy and secure downloads</span>
                    <span>✅ Affordable pricing for everyone</span>
                    <span>✅ Simple, user-friendly interface</span>
                    <span>✅ A growing library of diverse categories</span>
                </div>
                <h2 className="my-5"><b>Our Vision</b></h2>
                <p>We believe learning should not be restricted by physical boundaries. By providing digital resources, we aim to empower learners everywhere to study smarter, achieve more, and save time.</p>
                <h2 className="my-5"><b>Join Us</b></h2>
                <p>Be part of our growing community of learners and knowledge seekers. Whether you’re preparing for exams, diving into new subjects, or exploring music, we’ve got the right PDFs for you.</p>

            </div>
        </div>
        <Footer />
        </>
    )
}

export default About;