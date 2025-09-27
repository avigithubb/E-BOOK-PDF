import React, {useState, useEffect} from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import OwnedPdf from "./OwnedPdf";
import { useAuth } from "../AuthContext";
import emptyShelf from "../../assets/empty-shelf.webp";


const MyOrders = () =>{
    const [mydata, setData] = useState([]);
    const { token } = useAuth();

    useEffect(()=>{
        fetch("https://avle30zmf0.execute-api.ap-south-1.amazonaws.com/Prod/get-orders", {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data =>{
            setData(data.message);
        })
    }, [])
    return (
        <>
        <Navbar />
        <h1 className="font-sacramento text-[#48B3AF] my-5">User owned PDF.</h1>
        {mydata.length > 0 ? 
        mydata.map((item, index) =>(
            <OwnedPdf key={index} pdf={item.pdf_url} pdf_name={item.pdf_name} category={item.category} />
        )):
        <div className="content-center mt-25">
            <img src={emptyShelf} alt="empty-shelf" className="w-[80%] m-auto" />
            <p className="my-20 mt-[-20vh]">click here to <a href="/categories">Browse Collections</a></p>
        </div>
        }
        
        <Footer />
        </>
    )
}

export default MyOrders;