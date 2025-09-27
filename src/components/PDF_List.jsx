import React, {useState, useEffect} from "react";
import ArticleIcon from '@mui/icons-material/Article';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from "react-router-dom";
import { useAuth } from "./AuthContext";
import { jwtDecode } from "jwt-decode";


const PDF_List = (props) => {
    const [color, setColor] = useState(()=>{
        const r = Math.random(255);
        const g = Math.random(255);
        const b = Math.random(255);

        return `rgb(${r},${g},${b})`;
    });
    const { token } = useAuth();
    const decodedToken = jwtDecode(token);
    const [isClicked, setClicked] = useState(false);

    useEffect(()=>{
        if(isClicked){
            fetch("https://avle30zmf0.execute-api.ap-south-1.amazonaws.com/Prod/add-to-cart", {
                method: "POST",
                headers: {"Content-Type": "application/json"},
                body: JSON.stringify({
                    "product_id": props.id,
                    "price": props.price,
                    "quantity": 1,
                    "user_id": decodedToken.user_id,
                    "pdf_name": props.name
                })
            })
            .then(res => res.json())
            .then(data=>{
                console.log(data);
                if(data.message == "success"){
                    alert(`Successfull added to cart${<a href={`/cart`}>click here to see.</a>}`);
                }
                else{
                    alert("Item can't be added. Sorry for the inconvinience!");
                }
            })
        }
    }, [isClicked])

    // function rendomizeColor(){
    //     const r = Math.random(255);
    //     const g = Math.random(255);
    //     const b = Math.random(255);

    //     setColor()
    // }

    function handleClick(){
        setClicked(true);
    }
    return (
        <>
        <div className="relative flex flex-col my-5 lg:flex-row w-[100%] lg:w-[80%] m-auto gap-5">
            <ArticleIcon style={{color: color}} className="m-0 lg:mr-5 w-[25%] m-auto text-center" />
            <div className="flex flex-col text-sm text-center lg:text-left w-[100%] lg:w-[75%]">
                <p className="text-lg"><b>{props.name}</b></p>
                <p className="text-sm text-gray-500">{props.description.substring(0, 60)}...</p>
                <p><em>{props.category}</em></p>
                <p>₹{props.price}</p>
            </div>
            <button onClick={handleClick} className="p-2 rounded bg-yellow-500 w-[80%] lg:w-[25%] h-[3rem] m-auto content-center"><span className="text-white">Add To</span> <ShoppingCartIcon className="text-black" /></button>
        </div>
       
        </>
    )
}

export default PDF_List;