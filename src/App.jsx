import { useState, useEffect } from 'react'
import './App.css'
import { BrowserRouter, Route, Routes, Link } from "react-router-dom";
import Home from "./components/Home.jsx";
import About from "./components/informational/About.jsx";
import ContactUs from './components/informational/Contact.jsx';
import Login from './components/Login.jsx';
import Signup from "./components/Signup.jsx";
import Categories from './components/Categories.jsx';
import Cart from "./components/user/Cart.jsx";
import Contact from './components/informational/Contact.jsx';
import PrevPaper from './components/categories/PrevPapers.jsx';
import Ebook from "./components/categories/FullEBook.jsx";
import MusicPDF from "./components/categories/Music_PDF.jsx";
import SemPpr from "./components/categories/SemesterPpr.jsx";
import PrevPapers from './components/categories/PrevPapers.jsx';
import MyOrders from './components/user/MyOrders.jsx';
import PdfUpload from './components/PDFUpload.jsx';
import Profile from "./components/user/UserProfile.jsx";
import Policy from "./components/informational/Policy.jsx";
import Support from "./components/informational/Support.jsx";
import Licence from './components/informational/Licence.jsx';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact-us" element={<ContactUs />} />
        <Route path='/login' element={<Login />} />
        <Route path='/signup' element={<Signup />} />
        <Route path="/contactUs" element={<Contact />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/categories" element={<Categories />} />
        <Route path="/prevPpr" element={<PrevPaper />} />
        <Route path="/ebook" element={<Ebook />} />
        <Route path="/music-notes" element={<MusicPDF />} />
        <Route path="/semester-ppr" element={<SemPpr />} />
        <Route path="/prev-ppr" element={<PrevPapers />} />
        <Route path="/mypdfs" element={<MyOrders />}/>
        <Route path="/upload-pdf" element={<PdfUpload />} />
        <Route path="/profile" element={<Profile />} />
        <Route path="/privacy-policy" element={<Policy />} />
        <Route path="/support" element={<Support />} />
        <Route path="/licence" element={<Licence />} />
      </Routes>
    </>
  )
}

export default App
