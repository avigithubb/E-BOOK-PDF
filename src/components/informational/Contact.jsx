import React, {useState, useEffect} from "react";
import SubNavbar from "../layout/SubNavbar.jsx";
import Footer from "../layout/Footer";

const ContactUs = () => {
    const [formData, setData] = useState({
        name: "",
        email: "",
        subject: "",
        message: "",
    })
    const [isSubmit, setSubmit] = useState(false);

    function handleSubmit(e){
        e.preventDefault();
        setSubmit(true);
    }

    useEffect(()=>{
        if(isSubmit){
            
            setSubmit(false);
        }
    }, [isSubmit])

    function handleChange(e){
        const {name, value} = e.target;

        setData(prevValue =>({
            ...prevValue,
            [name]: value
        }))
    }

    return (
        <>
        <SubNavbar />
        <div className="w-[100vw] lg:w-230">
        <h2 className="font-montserrat b-[#48B3AF] text-md w-[40%] m-auto my-5 ">📌 Get in Touch With Us</h2>
        <p className="font-montserrat text-xl w-[60%] m-auto my-5 text-[#48B3AF]">We’d love to hear from you!
        Whether you have questions about our PDFs, need assistance with your account, or want to collaborate — we’re here to help.
        </p>
        <form onSubmit={handleSubmit} class="glass-effect flex flex-col gap-4 rounded-lg p-8 max-w-md m-auto my-10">
            <label for="name" class="text-left font-medium">Your Name</label>
            <input onChange={handleChange} type="text" id="name" name="name" class="border rounded p-2" value={formData.name} required />

            <label for="email" class="text-left font-medium">Email Address</label>
            <input onChange={handleChange} type="email" id="email" name="email" class="border rounded p-2" value={formData.email} required />

            <label for="subject" class="text-left font-medium">Subject</label>
            <input onChange={handleChange} type="text" id="subject" name="subject" class="border rounded p-2" value={formData.subject} required />

            <label for="message" class="text-left font-medium">Message</label>
            <textarea onChange={handleChange} id="message" name="message" rows="4" class="border rounded p-2" value={formData.message} required></textarea>

            <button type="submit" class="bg-green-500 text-white rounded-lg p-3 mt-2 hover:bg-green-600">Send Message</button>
        </form>
        </div>
        <Footer />
        </>
    )
}

export default ContactUs;