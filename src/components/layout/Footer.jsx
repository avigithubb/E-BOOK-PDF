import React, {useState, useEffect} from "react";
import epdf from "../../assets/E-pdf-logo.png"
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
import FacebookIcon from '@mui/icons-material/Facebook';

const Footer = () =>{
    const date = new Date();
    const year = date.getFullYear();
    return (
        <>
        <footer className="sm:w-[100vw] lg:w-[60vw] glass-effect">
            <div className="flex flex-col lg:flex-row justify-between p-10">
                {/* Left side footer */}
                <div className="m-auto text-center sm:w-[80%] lg:w-[20vw] lg:text-left my-10 lg:my-0">
                    <img src={epdf} alt="logo-img" className="w-25 m-auto lg:m-0" />
                    <p className="description">We provide quality e-books for people who loves to read</p>
                    <div>
                        <a href="#"><XIcon /></a>
                        <a href="#"><InstagramIcon /></a>
                        <a href="#"><FacebookIcon /></a>
                    </div>
                </div>
                {/* Right side footer */}
                <div className="flex justify-between m-auto">
                    <div className="flex flex-col text-left">
                        <h2>Quik Links</h2>
                        <a href="/">Home</a>
                        <a href="/about">About</a>
                        <a href="/privacy-policy">Privacy Policy</a>
                        <a href="/licence">Licence</a>
                    </div>
                    <div className="flex flex-col text-left">
                        <h2>General</h2>
                        <a href="/contact-us">Contact us</a>
                        <a href="/support">Customer Support</a>
                    </div>

                </div>

            </div>
            <ul className="flex-col lg:flex-row m-auto justify-between w-[90%] my-5">
                <li>📧 Email: <a href="mailto:support.ebook@gmail.com">support.ebook@gmail.com</a></li>
                <li>📞 Phone: +91-9770702945</li>
                <li>📍 Location: Jabalpur, MadhyaPradesh, India</li>
            </ul>
            <hr />
            <div className="h-20vh p-5">
                <p>{year} Copyright @EbookPDF All rights reserved</p>
            </div>
        </footer>
        </>
    )
}

export default Footer;