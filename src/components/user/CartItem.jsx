import React, {useState, useEffect} from "react";
import Pdf_img from "../../assets/pdf_img.png";
import GooglePayButton from '@google-pay/button-react';
import { jwtDecode } from "jwt-decode";
import { useAuth } from "../AuthContext";


const CartItem = (props) =>{
    const [paymentData, setPaymentData] = useState({});
    const [paymentStatus, setPaymentStatus] = useState(false);
    const { token } = useAuth();
    const decodedToken = jwtDecode(token);

    useEffect(()=>{
        if(paymentStatus){
            console.log(decodedToken.user_id);
            fetch("https://avle30zmf0.execute-api.ap-south-1.amazonaws.com/Prod/payment-gateway", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({
                    "payload": paymentData,
                    "user_id": decodedToken.user_id,
                    "pdf_name": props.pdf_name
                })
            })
            .then(res => res.json())
            .then(data =>{
                console.log(data.message);
                if(data.message == "payment success"){
                    alert("Payment success! navigate to MyPDF to get the pdf.");
                }
                else{
                    alert("Oops something went wrong");
                }
                setPaymentStatus(false);
            })
        }

    }, [paymentStatus])
    return (
        <div className="w-[60vw] m-auto">
            <div className="w-[80%] h-[40vh] content-center m-auto flex grid grid-cols-2 my-10 p-10 gap-10 glass-effect rounded">
                <div className="m-auto content-center">
                    <img src={Pdf_img} alt="pdf_img" />
                </div>
                <div className="flex flex-col text-left content-center my-auto gap-2">
                    {props ? (<>
                    <p className="text-lg"><b>Name: {props.pdf_name}</b></p>
                    <p className="text-gray-500">Quantity: {props.quantity}</p>
                    <p><em>Category: {props.category}</em></p>
                    <p className="text-3xl">Price: ₹{props.price}</p>
                    </>
                    ): <p>Loading...</p>
                    }
                    <GooglePayButton
                        environment="TEST"
                        paymentRequest={{
                            apiVersion: 2,
                            apiVersionMinor: 0,
                            allowedPaymentMethods: [
                            {
                                type: 'CARD',
                                parameters: {
                                allowedAuthMethods: ['PAN_ONLY', 'CRYPTOGRAM_3DS'],
                                allowedCardNetworks: ['MASTERCARD', 'VISA'],
                                },
                                tokenizationSpecification: {
                                type: 'PAYMENT_GATEWAY',
                                parameters: {
                                    gateway: 'example',
                                    gatewayMerchantId: 'exampleGatewayMerchantId',
                                },
                                },
                            },
                            ],
                            merchantInfo: {
                            merchantId: 'BCR2DN7TSDNKXMQU',
                            merchantName: 'Abhishek Napit',
                            },
                            transactionInfo: {
                            totalPriceStatus: 'FINAL',
                            totalPriceLabel: 'Total',
                            totalPrice: `${props ? props.price : '0'}`,
                            currencyCode: 'INR',
                            countryCode: 'IN',
                            },
                        }}
                        onLoadPaymentData={paymentRequest => {
                            console.log('load payment data', paymentRequest);
                            setPaymentData(paymentRequest);
                            setPaymentStatus(true);
                        }}
                    />
                </div>
            </div>
        </div>
    )
}

export default CartItem;