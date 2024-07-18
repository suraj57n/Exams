import React, { useState } from "react";
import emailjs from 'emailjs-com';

const Lab7 = () => {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");

    const sendEmail = (e) => {
        e.preventDefault();
        const templateParams = {
            from_name: name,
            from_email: email,
            to_name: "Jishnu",
            message: message,
        };
        emailjs.send("service_ebx73nk", "template_55zpog8", templateParams, "x-E6moRcst7e2DkRN")
            .then((result) => {
                console.log(result.text);
                alert("Email sent");
                setName("");
                setEmail("");
                setMessage("");
            }, (error) => {
                console.log(error.text);
                alert("Invalid");
            });
    };

    return (
        <>
            <h3>Lab7</h3>
            <h4>Contact us</h4>
            <form onSubmit={sendEmail} className="emailForm">
                <label>Name</label>
                <input
                type="text"
                placeholder="NAme"
                value={name}
                onChange={(e)=>setName(e.target.value)}
                />
                <label>Email:</label>
                <input
                type="email"
                placeholder="Email"
                value={email}
                onChange={(e)=>{setEmail(e.target.value)}}
                />

                <label>message:</label>
                <textarea 
                cols="30"
                rows='10'
                value={message}
                onChange={(e)=>setMessage(e.target.value)}
                />
                <input type="submit" value="Send mail"/>
            </form>
        </>
    );
}

export default Lab7;
