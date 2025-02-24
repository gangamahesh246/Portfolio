import React, {useState, useEffect} from "react";
import Marquee from "react-fast-marquee";
import "./port.css";
import axios from "axios";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const ContactMe = () => {
  const [data, setData] = useState({
    first_name: '',
    last_name: '',
    email: '',
    textarea: ''
  })

  const sendMessage = (e) => {
    e.preventDefault();
    mailData(data);

    setData({
      first_name: '',
      last_name: '',
      email: '',
      textarea: '',
    });
  }

  const mailData = (data) => {
    axios.post(`${import.meta.env.VITE_BACKEND_URL}/mail`,data)
    .then((res) => {
      toast.success("Success! Your message has been sent", {
        position: "bottom-right",
        autoClose: 3000,
        style: { backgroundColor: "black", color: "white", fontSize: "13px" },
      })
      
    }).catch((err) => {
      toast.error("Error! Something went wrong", {
        position: "bottom-right",
        autoClose: 3000,
        style: {backgroundColor: "black", color: "white"},
      })
    })
  }

  const handleChange = (e) => {
    setData({ ...data, [e.target.name]: e.target.value })
  }
  return (
    <div className="main_proj_container h-screen">
      <div className="abt_container">
        <Marquee className="abt_txt" speed={120} gradient={false}>
          contact me<p> </p>
        </Marquee>
      </div>
      <div className="contact_info_box mt-10">
        <p className="hrs">Please fill out the form below and I will be in touch within 24 hours.</p>
        <div style={{width: "90%", height: "auto", marginTop: "30px"}}>
            <p className="input_name">your name</p>
            <div style={{width: "100%", height: "auto", display: "flex", flexDirection: "row"}}>
            <input
            type="text" name="first_name" value={data.first_name} onChange={(e) => handleChange(e)} placeholder="First Name" />
            <input 
            style={{marginLeft: "5px"}}
            type="text" name="last_name" value={data.last_name} onChange={(e) => handleChange(e)} placeholder="Last Name" />
            </div>
        </div>
        <div style={{width: "90%", height: "auto", marginTop: "30px"}}>
            <p className="input_name">your email</p>
            <input style={{width: "100%"}}
            type="email" name="email" value={data.email} onChange={(e) => handleChange(e)} placeholder="Email@example.com" />
        </div>
        <div style={{width: "90%", height: "auto", marginTop: "30px"}}>
            <p className="input_name">text area</p>
            <textarea style={{width: "100%"}} name="textarea" value={data.textarea} onChange={(e) => handleChange(e)} placeholder="Message" />
        </div>
        <div style={{width: "90%", height: "auto", marginTop: "30px"}}>
            <button onClick={sendMessage} className="cursor-pointer" style={{width: "100%",height: "auto", padding: "10px", color: "white", backgroundColor: "black", borderRadius: "50px"}}>Send Message</button>
        </div>
      </div>
      <ToastContainer />
    </div>
  );
};

export default ContactMe;