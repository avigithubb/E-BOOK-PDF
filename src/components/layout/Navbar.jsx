import React, { useState, useEffect } from "react";
import reading_space from "../../assets/Reading_space.png";
import elogo from "../../assets/E-pdf-logo.png";
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import userIcon from "../../assets/user-icon.webp";

const Navbar = () =>{
    const { token, logout } = useAuth();
    const [isClick, setClick] = useState(false);
    const navigateTo = useNavigate();


    useEffect(() =>{
        if(isClick){
            logout();
            setClick(false);
        }
    }, [])

    function handleClick(){
        setClick(true);
    }

    return (
        <div className="sm:w-[100vw] lg:w-[60vw]">
            <div className="glass-effect">
                <div className="flex flex-wrap justify-between items-center mx-auto max-w-screen-xl p-4 z-10">
                    <a href="https://flowbite.com" className="flex items-center space-x-3 rtl:space-x-reverse z-10">
                        <img src={elogo} className="h-8 z-10 rounded-full" alt="EPDF Logo" />
                        {/* <span class="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">EPDF</span> */}
                        <h2 className="ml-0"><b>EPDF</b></h2>
                    </a>
                    <div className="flex items-center space-x-6 rtl:space-x-reverse z-10">
                        {token ?
                            <Link to={`/cart`}><ShoppingCartIcon className="cursor-pointer text-black" /></Link>: 
                            <Link to="/login"><ShoppingCartIcon className="cursor-pointer text-black" /></Link>
                        }
                        {token ? 
                            <div className="relative inline-block group">
                                <img src={userIcon} alt="user_icon" className="user-icon cursor-pointer rounded-full w-8" />
                                <div className="absolute right-0 w-32 bg-white border rounded shadow-lg hidden group-hover:block">
                                    <span onClick={handleClick} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Logout</span>
                                    <span onClick={()=> navigateTo("/mypdfs")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">MyPDF</span>
                                    <span onClick={()=> navigateTo("/profile")} className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 cursor-pointer">Profile</span>
                                </div>
                            </div>
                            :
                            <>
                             <a href="/login" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Login</a>
                             <a href="/signup" className="text-sm  text-blue-600 dark:text-blue-500 hover:underline">Signup</a>
                            </>
                        } 
                    </div>
                </div>
            </div>
            <img src={reading_space} alt="Nav-img" />
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
        </div>
    )
}

export default Navbar;