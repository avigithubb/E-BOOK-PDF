import React, {useState, useEffect} from "react";
import elogo from "../assets/E-pdf-logo.png";
import PersonIcon from '@mui/icons-material/Person';
import AlternateEmailIcon from '@mui/icons-material/AlternateEmail';
import LockIcon from '@mui/icons-material/Lock';
import KeyIcon from '@mui/icons-material/Key';
import VisibilityIcon from '@mui/icons-material/Visibility';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import bcrypt from 'bcryptjs-react';
import { useNavigate } from "react-router-dom";
import { useAuth } from "./AuthContext";
import UserImg from "../assets/user-icon.webp";

const Signup = () => {
    const [data, setData] = useState({
        fullname: "",
        username: "",
        email: "",
        password: "",
        confirmPassword: "",
    })
    const [isFormSubmited, setFormSubmit] = useState(false);
    const [error, setError] = useState(true);
    const [default_img, setImg] = useState({
        new_img: ""
    });
    const [Type, setType] = useState("password");
    const navigateTo = useNavigate();
    const { login } = useAuth();

    const reader = new FileReader();
    reader.readAsDataURL(UserImg);
    reader.onload = () =>{
        setImg({
            "new_img": reader.result
        })
    }
    

    useEffect(()=>{
        if(data.confirmPassword === data.password){
            setError(false);
        }
        else{
            setError(true);
        }

    }, [data.confirmPassword])

    

    function handleChange(e){
        const {name, value} = e.target;

        setData((prevValue) =>({
            ...prevValue,
            [name]: value,
        }))

    }

    function handleClick(e){
        const passType = document.getElementById("password").type;
        if(passType == "password"){
            setType("text");
        }
        else{
            setType("password");
        }
    }

    useEffect(()=>{
        if(isFormSubmited){
            // const salt = bcrypt.genSaltSync(10);
            const headers = {
                "Content-Type": "application/json",
            }
            fetch(`https://avle30zmf0.execute-api.ap-south-1.amazonaws.com/Prod/add-user`,{
                method: "POST",
                headers: headers,
                body: JSON.stringify({
                    name: data.fullname,
                    email: data.email,
                    username: data.username,
                    password: data.password,
                    user_img: default_img
                }),
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data);
                setFormSubmit(false);
                if(data.message == "success"){
                    login(data.email, data.password);
                }
                else{
                    alert("Something went wrong. Try again!");
                }
            })
        }

    }, [isFormSubmited])

    function handleSubmit(e) {
        e.preventDefault();
        setFormSubmit(true);

    }
    return (
        <> 
            <div className="w-[60vw] h-[100vh] center content-center justify-center">
                <form onSubmit={handleSubmit} className="glass-effect rounded w-[60%] m-auto p-10">
                    <a href="/" className="flex items-center mb-6 text-2xl font-semibold !text-black dark:!text-white justify-center">
                        <img className="w-10 h-10 mr-2 rounded-full" src={elogo} alt="E-logo" />    
                    </a>
                    <div className="w-[60%] m-auto">
                        <label htmlFor="fullname" className="block mb-2 text-sm font-medium text-black-400 dark:text-black">Your name</label>
                        <div className="flex justify-between">
                            <PersonIcon />
                            <input type="text" onChange={handleChange} name="fullname" id="fullname" className="bg-white text-center border border-gray-300 text-black rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex. Alex Glan" required="" value={data.fullname} />
                        </div>
                    </div>
                    <div className="w-[60%] m-auto">
                        <label htmlFor="username" className="block mb-2 text-sm font-medium text-black-400 dark:text-black">Username</label>
                        <div className="flex justify-between">
                            <AccountCircleIcon />
                            <input type="text" onChange={handleChange} name="username" id="username" className="bg-white text-center border border-gray-300 text-black rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="ex. higter007" required="" value={data.username} />
                        </div>
                    </div>
                    <div className="w-[60%] m-auto mt-4">
                        <label htmlFor="email" className="block mb-2 text-sm font-medium text-black-400 dark:text-black">Your email</label>
                        <div className="flex justify-between content-center">
                            <AlternateEmailIcon />
                            <input type="email" onChange={handleChange} name="email" id="email" className="bg-white text-center border border-gray-300 text-black rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="xyz@gmail.com" required="" value={data.email} />
                        </div>
                    </div>
                    <div className="w-[60%] m-auto mt-4">
                        <label htmlFor="password" className="block mb-2 text-sm font-medium text-black dark:text-black">Password</label>
                        <div className="flex justify-between">
                            <LockIcon />
                            <input type={Type} onChange={handleChange} name="password" id="password" placeholder="Alex12@!#" title="Must contain at least one number and one uppercase and lowercase letter, and at least 8 or more characters" className="bg-white text-center border border-gray-300 text-black rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={data.password} />
                            <VisibilityIcon onClick={handleClick} />
                        </div>
                    </div>
                    <div className="w-[60%] m-auto mt-4">
                        <label htmlFor="confirmPassword" className="block mb-2 text-sm font-medium text-black dark:text-black">Confirm Password</label>
                        <div className="flex justify-between">
                            <KeyIcon />
                            <input type="text" onChange={handleChange} name="confirmPassword" id="confirmPassword" className="bg-white text-center border border-gray-300 text-black rounded focus:ring-primary-600 focus:border-primary-600 block w-full p-1 dark:bg-white dark:border-gray-600 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" required="" value={data.confirmPassword} />
                        </div>
                        {error ? (
                        <p className="text-red">password not matched!</p>
                        ):(
                        <p className="text-green">password matched ✅</p>
                        )
                        }
                    </div>
                    <button type="submit" className="w-full mt-4 text-white bg-primary-600 hover:bg-primary-700 focus:ring-4 focus:outline-none focus:ring-primary-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800">Submit</button>
                    <p className="text-sm font-light text-black dark:text-black">
                        Already signed up? <a href="/login" className="font-medium text-primary-600 hover:underline dark:text-primary-500">Log in</a>
                    </p>
                </form>
             </div>
        </>
    )
}

export default Signup;