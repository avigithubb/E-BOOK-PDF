import React, {useState, useEffect} from "react";

const Cards = (props) => {
    return (
        <>
        <div className="relative card bg-white p-4 rounded-sm shadow-sm w-[80vw] lg:w-[15vw] h-[40vh] hover:bg-[#F5F5F5] cursor-pointer">
            <img src={props.image} alt="book-img" className="w-[80%] h-[60%] m-auto" />
            <h2 className="text-md text-black"><b>{props.title}</b></h2>
            <p className="text-sm text-gray-600">{props.description}</p>
            
        </div>
        </>
    )
}

export default Cards;