import React, { useState, useEffect } from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Cards from "./Cards";
import book_1 from "../assets/book-cover-1.jpg"
import exam_paper from "../assets/exam_paper.webp";
import {Link} from "react-router-dom";
import music_cover from "../assets/music_cover_lata_mangeshkar.webp";


const Home = () =>{
    const [isActive, setIsActive] = useState(false);
    const [mydata, setData] = useState();

    function handleClick(){
        setIsActive(true);
    }

    useEffect(()=>{
        if(isActive){
        fetch(`https://djgh1w1f3j.execute-api.ap-south-1.amazonaws.com/Prod/hello/`)
        .then(res => res.json())
        .then(data =>{
            console.log(data);
            setData(data);
        })
        }
    },[isActive])
    return (
        <>
        <div className="sm:w-[100vw] lg:w-[60vw]">
            <Navbar />

            {/* <button onClick={handleClick}>Activate</button>
            {mydata && 
            <div>{mydata.message}</div>
            } */}
            {/* <div className="m-auto justify-center align-center p-5 w-[80%]">
                <Cards title="ULYSSES" description="A philosophical book" image={book_1} />
            </div> */}
            <div className="flex flex-col lg:flex-row w-full justify-between items-center p-10">
                <img src={exam_paper} alt="exam_paper" className="w-[100%] lg:w-[60%] m-auto lg:m-0" />

                <div className="justify-center align-center my-auto">
                    <h2 className="text-3xl"><b>Previous Year Papers</b></h2>
                    <p className="text-md text-gray-600">Semester wise RDVV previous year question papers with answers</p>
                    <Link to="/prevPpr" className="bg-transparent rounded border-transparent px-[1.2em] py-[0.6em] text-white hover:border-[#646cff]">View</Link>
                </div>
            </div>

            <div className="flex flex-col lg:flex-row w-full justify-between items-center p-10">
                <div className="justify-center align-center my-auto m-auto">
                    <h2 className="text-3xl m-auto"><b>E-Books</b></h2>
                    <p className="text-md text-gray-600">Full length E-book PDF</p>
                    <Link to="/ebook" className="bg-transparent rounded border-transparent px-[1.2em] py-[0.6em] text-white hover:border-[#646cff]">View</Link>
                </div>

                <img src={book_1} alt="e-book"className="w-[100%] lg:w-[40%] h-[40vh] lg:h-[60vh] m-auto lg:m-0" />
            </div>

            <div className="flex flex-col lg:flex-row w-full justify-between items-center p-10">
                <img src={music_cover} alt="music_cover"className="w-[100%] lg:w-[40%] lg:h-[60vh] m-auto lg:m-0" />
                <div className="justify-center align-center my-auto m-auto">
                    <h2 className="text-3xl"><b>Music Notes</b></h2>
                    <p className="text-md text-gray-600">Semester wise notes for music Students</p>
                    <Link to="/music-notes" className="bg-transparent rounded border-transparent px-[1.2em] py-[0.6em] text-white hover:border-[#646cff]">View</Link>
                </div>
            </div>

            <Footer/>
        </div>
        </>
    )
}

export default Home;