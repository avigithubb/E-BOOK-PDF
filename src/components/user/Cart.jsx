import React, { useState, useEffect } from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../AuthContext";
import emptyCart from "../../assets/empty-cart.webp";
import CartItem from "./CartItem";


const Cart = () =>{

    const [myData, setData] = useState([]);
    const { token } = useAuth();
    const navigateTo = useNavigate();


    useEffect(()=>{
        fetch("https://avle30zmf0.execute-api.ap-south-1.amazonaws.com/Prod/get-cart",{
            method: "GET",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${token}`
            }
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            const parsed = data.message;
            if(parsed == "Failure"){
                navigateTo("/login");
            }
            setData(parsed);
        })
    }, []);

    return (
        <>
        <Navbar />
        {myData.length > 0 ?
            myData.map((item, index) =>(
                <CartItem 
                key={index} 
                pdf_name={item.pdf_name} 
                quantity={item.quantity}
                category={item.category}
                price={item.price}
                />
            ))
            :
            <img src={emptyCart} alt="empty-cart" className="m-auto" />
        }
        <Footer /> 
        </>
    )
}

export default Cart;