import React, {useState, useEffect} from "react";
import reading from "../assets/reading.webp";
import elogo from "../assets/E-pdf-logo.png"
import {useNavigate} from "react-router-dom";
import { useAuth } from "./AuthContext";

const Login = () => {
    const { token, login, message} = useAuth();
    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const [isSubmitted, setSubmit] = useState(false);
    const navigateTo = useNavigate();

    function handleChange(e){
        const {name, value} = e.target;

        setData(prevValue => ({
            ...prevValue,
            [name]: value
        }))
    }

    useEffect(()=>{
        if(isSubmitted){
            // const headers = {
            //     "Content-Type": "application/json",
            // }
            // fetch("https://avle30zmf0.execute-api.ap-south-1.amazonaws.com/Prod/login", {
            //     method: "POST",
            //     headers: headers,
            //     body: JSON.stringify({
            //         email: data.email,
            //         password: data.password
            //     }),
            // })
            // .then(res => res.json())
            // .then(data => {
            //     console.log(data.message);
            //     setSubmit(false);
            //     navigateTo("/");
            // })
            login(data.email, data.password);
        }
    }, [isSubmitted])

    function handleSubmit(e){
        e.preventDefault();
        setSubmit(true);
        
    }
    return( 
        <>
            <div className="w-[60vw] flex-col">
            <h3 className="transform:translate(-50%, -50%) text-6xl font-sacramento m-auto mt-[4rem]"><span className="text-black">Welcome</span> <span className="text-[#468A9A]">Back</span></h3>
            <div className="flex flex-col sm:flex-col md:flex-row justify-between h-[100vh] items-center">
                <div className="w-[50%] content-center">
                    <form onSubmit={handleSubmit} className="glass-effect rounded w-[80%] m-auto p-10">
                        <a href="/" className="flex items-center mb-6 text-2xl font-semibold !text-black dark:!text-white">
                            <img className="w-10 h-10 mr-2 rounded-full" src={elogo} alt="E-logo" />
                            EPDF    
                        </a>
                        {message && <><p>{message}</p></>}
                        <div>
                            <label for="email" className="block mb-2 text-sm font-medium text-black-400 dark:text-black">Your email</label>
                            <input onChange={handleChange} type="email" name="email" id="email" className="bg-white border border-gray-300 text-black rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="name@company.com" value={data.email} required="" />
                        </div>
                        <div>
                            <label for="password" className="block mb-2 text-sm font-medium text-black dark:text-black">Password</label>
                            <input onChange={handleChange} type="password" name="password" id="password" placeholder="••••••••" className="bg-white border border-gray-300 text-black rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" value={data.password} required="" />
                        </div>
                        <div className="flex items-center justify-between">
                            <div className="flex items-start">
                                <div class="flex items-center h-5">
                                    <input id="remember" aria-describedby="remember" type="checkbox" className="w-4 h-4 border border-gray-300 rounded bg-white focus:ring-3 focus:ring-primary-300 dark:bg-white dark:border-gray-600 dark:focus:ring-primary-600 dark:ring-offset-white" required=""/>
                                </div>
                                <div class="ml-3 text-sm">
                                    <label for="remember" className="text-black dark:text-black">Remember me</label>
                                </div>
                            </div>
                            <a href="#" className="text-sm font-medium text-primary-600 hover:underline dark:text-primary-500">Forgot password?</a>
                        </div>
                        <button type="submit" className="w-full text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Sign in</button>
                        <p className="text-sm font-light text-black dark:text-black">
                            Don’t have an account yet? <a href="#" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Sign up</a>
                        </p>
                    </form>
                </div>
                <div className="w-[50%] content-center sm:d-none md:d-none">
                    <img src={reading} alt="reading-img" className="w-[80%] h-[80%] m-auto sm:d-none md:d-none" />
                </div>
            </div>
            </div>
        </>
    )
}

export default Login;