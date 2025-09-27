import React, {useState, useEffect} from "react";
import ArticleIcon from '@mui/icons-material/Article';


const OwnedPdf = (props) =>{
    const [isClicked, setClicked] = useState(false);

    function handleClick(){
        setClicked(true);
    }

    useEffect(()=>{
        if(isClicked){
            const reformed_name = props.pdf_name.replaceAll(" ", "_")
            fetch(`https://avle30zmf0.execute-api.ap-south-1.amazonaws.com/Prod/download-pdf?file_name=${reformed_name}`)
            .then(res => res.json())
            .then(data => {
                window.open(data.message, "_blank");
            });
        }
    }, [isClicked])
    return (
        <>
        <div className="my-10 bg-[#AAD7D9] p-3 grid grid-cols-1 lg:grid-cols-3 justify-between w-[60%] m-auto content-center">
            <ArticleIcon className="m-auto" />
            <div className="flex flex-col text-center lg:text-left">
                <h2><b>{props.pdf_name}</b></h2>
                <span className="text-gray-500">{props.category}</span>
            </div>
            
            <button onClick={handleClick} className="p-2 rounded bg-yellow-500 text-white m-auto content-center">Download PDF</button>
            
        </div>
        
        </>
    )
}

export default OwnedPdf;