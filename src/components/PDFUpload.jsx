import React, {useState, useEffect} from "react";

const PdfUpload = () =>{
    const [formData, setData] = useState({
        pdf_name: "",
        category: "",
        price: "",
        pdf_description: "" 
    })

    const [isSubmit, setSubmit] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        setSubmit(true);
    }

    function handleChange(e){
        const {name, value} = e.target;

        setData(prevValue =>({
            ...prevValue,
            [name]: value
        }));
    }   

    useEffect(()=>{
        if(isSubmit){
            const fileInput = document.getElementById("pdf_file");
            const file = fileInput.files[0];
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => {
                fetch("https://avle30zmf0.execute-api.ap-south-1.amazonaws.com/Prod/add-pdf", {
                    method: "POST",
                    headers: { "Content-Type": "application/json" },
                    body: JSON.stringify({ 
                        "pdf_name": formData.pdf_name,
                        "pdf_file": reader.result,
                        "pdf_description": formData.pdf_description,
                        "price": formData.price,
                        "category": formData.category
                    })
                })
                .then(res => res.json())
                .then(data => {
                    console.log(data.message)
                    if(data.message == "success"){
                        alert("Pdf added successfully");
                    }
                    else{
                        alert("Pdf not added. Sorry for the inconvinience!")
                    }
                })
            };
        }

    }, [isSubmit])
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
        <div className="h-[100vh] content-center">
            <form onSubmit={handleSubmit} className="glass-effect flex flex-col rounded-lg p-10 justify-center content-center text-center space-y-3">
                <label htmlFor="pdf_name">Pdf Name</label>
                <input type="text" onChange={handleChange} name="pdf_name" className="border-b-1 text-center" value={formData.pdf_name} required />
                <label htmlFor="pdf_description">Pdf Description</label>
                <input type="text" onChange={handleChange} name="pdf_description" className="border-b-1 text-center" value={formData.pdf_description} required />
                <label htmlFor="category">Category</label>
                <select
                onChange={handleChange}
                name="category"
                className="border-b-1 text-center"
                value={formData.category}
                required
                >
                <option value="">Select a category</option>
                <option value="sem-ppr">Semester-Notes</option>
                <option value="full-ebook">full-ebook</option>
                <option value="prev-ppr">Previous-year-papers</option>
                <option value="music-pdf">Music-Notes</option>
                </select>
                <label htmlFor="price">Price</label>
                <input type="number" onChange={handleChange} name="price" className="border-b-1 text-center" value={formData.price} required />
                <label htmlFor="pdf_file">Pdf File</label>
                <div className="w-50 m-auto bg-white p-1 my-3">
                    <input type="file" id="pdf_file" name="pdf_file" accept="application/pdf" className="text-center" required />
                </div>
                <input type="submit" value="submit" className="bg-green-500 rounded-lg p-3 text-white" />
            </form>
        </div>
        </>
    )
}

export default PdfUpload;