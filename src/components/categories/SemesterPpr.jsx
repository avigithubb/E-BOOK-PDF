import React, {useState, useEffect} from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PDF_List from "../PDF_List";

const SemPpr =() =>{
    const [semData, setSemData] = useState([]);

    useEffect(()=>{
        fetch("https://avle30zmf0.execute-api.ap-south-1.amazonaws.com/Prod/get-pdfs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "category": "sem-ppr"
            })
        })
        .then(res => res.json())
        .then(data => {
            const parsed = data.message;
            setSemData(parsed);
        })
    }, [])
    return (
        <>
        <Navbar />
        <div className="w-[100vw] lg:w-[60vw] my-10 content-center text-center">
            <h1 className="font-sacramento w-[100vw] lg:w-[60vw] m-auto text-[#48B3AF]">Semester-wise Exam Papers</h1>
            <div className="m-auto w-[60vw] lg:w-[90%] p-2 my-5 border-red-100 bg-[#AAD7D9]">
            {Array.isArray(semData) &&
            semData.map((item, index) => (
                <PDF_List
                key={index}
                id={item.id}
                name={item.pdf_name}
                description={item.pdf_description}
                category={item.category}
                price={item.price}
                />
            ))}
            </div>
        </div>

        <Footer />
        </>
    )
}

export default SemPpr;