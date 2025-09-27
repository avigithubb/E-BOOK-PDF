import React, {useState, useEffect} from "react";
import Navbar from "../layout/Navbar";
import Footer from "../layout/Footer";
import PDF_List from "../PDF_List";

const PrevPapers = () => {
    const [PrevData, setPrevData] = useState([]);

    useEffect(()=>{
        fetch("https://avle30zmf0.execute-api.ap-south-1.amazonaws.com/Prod/get-pdfs", {
            method: "POST",
            headers: {"Content-Type": "application/json"},
            body: JSON.stringify({
                "category": "prev-ppr"
            })
        })
        .then(res => res.json())
        .then(data => {
            const parsed = data.message;
            setPrevData(parsed);
        })
    }, [])
    return (
        <>
        <Navbar />
        <div className="w-[100vw] lg:w-[60vw] my-10 content-center text-center">
            <h1 className="font-sacramento text-[#48B3AF]">Previous Year Papers</h1>
            <div className="m-auto w-[60vw] lg:w-[90%] p-2 my-5 border-red-100 bg-[#AAD7D9]">
            {Array.isArray(PrevData) &&
            PrevData.map((item, index) => (
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

export default PrevPapers;
