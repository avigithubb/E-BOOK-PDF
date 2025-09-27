import React, {useState, useEffect} from "react";
import { useAuth } from "../AuthContext";
import { useRadioGroup } from "@mui/material/RadioGroup";
import { jwtDecode } from "jwt-decode";
import user_img from "../../assets/user-icon.webp";

const Dashboard = () =>{
    const [userData, setData] = useState([]);
    const {token} = useAuth();
    const [newImg, setImg] = useState();
    const decodedToken = jwtDecode(token);
    const [formData, setFormData] = useState({
        new_img: ""
    });
    const [passForm, setPassForm] = useState({
        new_pass: ""
    })
    const [imgChange, setChange] = useState(false);
    const [passChange, setChange_1] = useState(false)

    function handleSubmit(e){
        e.preventDefault();
        setChange(true);
    }

    function handleSubmit_1(e){
        e.preventDefault();
        setChange_1(true);
    }

    useEffect(()=>{
        if(passChange){
            fetch("https://avle30zmf0.execute-api.ap-south-1.amazonaws.com/Prod/change-password", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    "new_password": passForm.new_pass
                })
            })
            .then(res => res.json())
            .then(data => {
                alert(data.message);
            })
        }
    }, [passChange])

    function handlePassChange(e) {
        const { name, value } = e.target();
        setPassForm(prevValue=>({
            ...prevValue,
            [name]: value
        }))
    }

    function handleFileChange(e) {
        const file = e.target.file;
        const reader = new FileReader();
        reader.onload = () =>{
            setFormData({
                "new_img": reader.result
            })
        }
        reader.readAsDataURL(file);
        
    }

    useEffect(()=>{
        if(imgChange){
            fetch("https://avle30zmf0.execute-api.ap-south-1.amazonaws.com/Prod/change-img", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    "new_img": formData.new_img
                })
            })
            .then(res => res.json())
            .then(data => {
                if(data.message == "success"){
                    alert("Profile image changed successfully");
                }
                else{
                    alert("Some error occured!")
                }
            })
        }
    }, [imgChange])

    useEffect(()=>{
        fetch(`https://avle30zmf0.execute-api.ap-south-1.amazonaws.com/Prod/get-user?user_id=${decodedToken.user_id}`)
        .then(res => res.json())
        .then(data =>{
            setData(data.message);
        })
    }, [])

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
        <div className="w-[100vw] lg:w-[60vw] h-[100vh] content-center justify-center">
            <div className="w-[100%] lg:w-[80%] m-auto content-center p-10 rounded"> 
                {userData && 
                    <>
                        <div className="w-[100%] h-[15vh] bg-[#34374C] rounded-t-lg"></div>
                        <div className="glass-effect rounded-b-lg p-10 text-lg/10">
                            <img src={`data:image/png;base64,${userData.user_img}`} alt="user_img" className="m-auto mt-[-91px] rounded-full" />
                            <span>{userData.username}</span>
                            <p>Full Name: {userData.name}</p>
                            <p>Email: {userData.email}</p>
                            <form action="" onSubmit={handleSubmit} className="content-center m-auto w-[100%] flex justify-between flex-col">
                                <label htmlFor="new-img">Change Image</label>
                                <div className="justify-center w-50 bg-white p-1 m-auto">
                                    <input type="file" id="new-img" name="new-img" accept="image/*" onChange={handleFileChange} className="m-auto w-[100%]" required />
                                </div>
                                <input type="submit" value="update" className="bg-red-600 p-2 w-25 m-auto rounded text-white my-2" />
                            </form>
                            <form action="" onSubmit={handleSubmit_1} className="content-center m-auto w-[100%] flex justify-between flex-col">
                                <label htmlFor="new-img">Change Password</label>
                                <div className="justify-center w-50 bg-white p-1 m-auto">
                                    <input type="text" id="new-password" name="new-password" onChange={handlePassChange} value={passForm.new_pass} className="m-auto" required />
                                </div>
                                <input type="submit" value="update" className="bg-red-600 p-2 w-25 m-auto rounded text-white my-2" />
                            </form>
                        </div>
                    </>
                }

                
            </div>
        </div>
        </>
    )
}

export default Dashboard;