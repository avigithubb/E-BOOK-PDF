import React, {useState, useEffect} from "react";
import Navbar from "./layout/Navbar";
import Footer from "./layout/Footer";
import Card from "./Cards";
import book_cover from "../assets/book-cover-1.jpg";
import exam_paper from "../assets/exam_paper.webp";
import semester_notes from "../assets/semester_notes.webp";
import music_cover from "../assets/music_cover_lata_mangeshkar.webp";
import { Link } from "react-router-dom";

const Categories = () =>{
    return (
        <>
        <Navbar />
        <div className="flex-col lg:flex-row p-10 grid sm:grid-cols-1 lg:grid-cols-3 gap-20 m-auto justify-center align-center w-[80%]">

            <Link to="/prev-ppr"><Card title="Previous Year Papers" description="Semester wise RDVV previous year question papers with answers" image={exam_paper} /></Link>
            <Link to="/semester-ppr"><Card title="Semester Notes" description="Semester wise handwritten notes" image={semester_notes} /></Link>
            <Link to="/music-notes"><Card title="Music Notes" description="Semester wise notes for music Students" image={music_cover} /></Link>
            <Link to="/ebook" ><Card title="E-Book" description="Full length E-book PDF" image={book_cover} /></Link>

        </div>

        <Footer />
        </>
    )
}

export default Categories;