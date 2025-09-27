import React from "react";

const SubNavbar = () =>{
    return (
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
        </>
    )
}

export default SubNavbar;