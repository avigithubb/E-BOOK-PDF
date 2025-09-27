import React from "react";

const Support = () =>{
    return (
        <>
        <h1 className="font-montserrat text-[#48B3AF] mt-20">Customer Support</h1>
        <p className="my-5">We’re here to help you with any questions, issues, or feedback related to our services and products.</p>
        <div className="glass-effect p-10 text-left mt-20 text-md/6">
            <h2 className="my-4"><b>📩 How to Reach Us</b></h2>
            <ul>
                <li>- Email Support: <a href="mailto:support.ebook@gmail.com">support.ebook@gmail.com</a></li>
                <li>- Contact Form: <a href="/contact-us">contact us</a></li>
                <li>- Support Hours: Monday – Friday, 9:00 AM – 6:00 PM (IST)</li>
            </ul>
            <h2 className="my-4"><b>🔧 Common Issues & Solutions</b></h2>
            <h3 className="my-4"><b>Download Issues</b></h3>
            <ul>
                <li>- If your purchased PDF/book is not downloading, please check your email for the download link.</li>
                <li>- Make sure to allow pop-ups and use a stable internet connection.</li>
                <li>- Still not working? Reach out to us with your order ID.</li>
            </ul>
            <h3 className="my-4"><b>Payment Problems</b></h3>
            <ul>
                <li>- Double charges or failed payments are usually resolved within 48 hours.</li>
                <li>- If the issue persists, email us your transaction ID for quick resolution.</li>
            </ul>
            <h3 className="my-4"><b>Account & Access</b></h3>
            <ul>
                <li>- Trouble logging in? Try resetting your password.</li>
                <li>- If you cannot access your files, confirm that you are logged in with the same email used during purchase.</li>
            </ul>
            <h2 className="my-4"><b>❓ Frequently Asked Questions (FAQs)</b></h2>
            <ul>
                <li className="flex flex-col"><span><b>Can I get a refund?</b></span><span>Refunds are available only if the file is corrupted or inaccessible. Please see our Refund Policy for details.</span></li>
                <li className="flex flex-col"><span><b>How long will I have access to my PDFs?</b></span><span>All purchases are available for lifetime access unless otherwise stated.</span></li>
                <li className="flex flex-col"><span><b>Can I use my purchase on multiple devices?</b></span><span>Yes, you can access your files on any device using your registered email.</span></li>
            </ul>

            <h2 className="my-4"><b>🆘 Need More Help?</b></h2>
            <p>If your issue isn’t listed here, don’t worry. Our support team is just one click away!</p>
            <span><b>Phone no:</b> <em>+91-9770702945</em></span>
        </div>
        </>
    )
}

export default Support;