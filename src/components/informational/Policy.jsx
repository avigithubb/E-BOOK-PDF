import React from "react";

const Policy = () =>{
    const date = new Date();
    const day = date.getDate();
    const month = date.getMonth();
    const year = date.getUTCFullYear();
    return (
        <>
        <h1 className="mt-10 text-[#48B3AF]">Privacy Policy</h1>
        <p className="mt-3 mb-10">Effective Date: 0{month} {year}</p>
        <div className="glass-effect w-[100vw] lg:w-[60vw] p-10 text-left">
            <p className="my-3"><b>Introduction</b></p>
            <span>Welcome to <b>ebook</b> (“we”, “our”, “us”). Your privacy is important to us, and this Privacy Policy explains how we collect, use, and protect the personal information you provide when using our website and services.</span>
            <p className="my-3"><b>Information We Collect</b></p>
            <span>We may collect the following types of information:</span>
            <ul>
                <li className="my-3">- <b>Personal Information:</b> Name, email address, payment information, and any details you provide when signing up or purchasing PDFs, notes, or books.</li>
                <li className="my-3">- <b>Non-Personal Information:</b> Browser type, IP address, pages visited, and other anonymous usage data collected automatically.</li>
            </ul>
            <p className="my-3"><b>How We Use Your Information</b></p>
            <span>We use your information to:</span>
            <ul> 
                <li>- Process transactions and deliver purchased PDFs and notes.</li>
                <li>- Improve our website and services.</li>
                <li>- Communicate important updates, promotions, or support messages.</li>
                <li>- Ensure security and prevent fraudulent activities.</li>
            </ul>
            <p className="my-3"><b>Data Sharing and Disclosure</b></p>
            <span>We respect your privacy and do not sell or share your personal information with third parties except:</span>
            <ul>
                <li>- To process payments via trusted payment gateways.</li>
                <li>- As required by law or legal obligations.</li>
                <li>- As required by law or legal obligations.</li>
            </ul>
            <p className="my-3"><b>Cookies and Tracking Technologies</b></p>
            <span>Our website may use cookies and similar technologies to enhance user experience, track website usage, and analyze trends. You can manage cookie preferences via your browser settings.</span>
            <p className="my-3"><b>Data Security</b></p>
            <span>We implement reasonable administrative, technical, and physical safeguards to protect your personal information. However, no method of data transmission over the internet or storage is 100% secure.</span>
            <p className="my-3"><b>Your Rights</b></p>
            <span>You have the right to:</span>
            <ul>
                <li>- Access, update, or delete your personal information.</li>
                <li>- Opt-out of promotional emails.</li>
                <li>- Contact us for questions regarding your data or privacy concerns.</li>
            </ul>
            <p className="my-3"><b>Third-Party Links</b></p>
            <span>Our website may contain links to third-party websites. We are not responsible for the privacy practices or content of these websites.</span>
            <p className="my-3"><b>Changes to This Privacy Policy</b></p>
            <span>We may update this Privacy Policy from time to time. The latest version will always be available on our website, and the “Effective Date” will indicate the last update.</span>
            <p className="my-3"><b>Contact Us</b></p>
            <span>For any questions or concerns regarding this Privacy Policy, you can contact us at:</span>
            <ul>
                <li>- Email: <a href="mailto:support.ebook@gmail.com">support.ebook@gmail.com</a></li>
            </ul>
        </div>
        </>
    )
}

export default Policy;