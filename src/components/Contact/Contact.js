import React from "react";
import email from "../../images/email.png";
import phone from "../../images/phone.png";
import location from "../../images/location.png";
import "./Contact.css";
const Contact = () => {
  return (
    <div>
      <div>
        <p className="contact">Contact Us</p>
        <h3 className="contact-h3">Get In Touch</h3>
        <div className="conatiner-contactus">
          <div className="box">
            <img src={email} alt="" width="100px" />
            <h3>Email Address</h3>
            <p>mislura1998@gmail.com</p>
            <p>info.medinoba@gmail.com</p>
          </div>
          <div className="box">
            <img src={phone} alt="" width="100px" />
            <h3>Phone Number</h3>
            <p>+8801339990845</p>
            <p>+8801444899076</p>
          </div>
          <div className="box">
            <img src={location} alt="" width="100px" />
            <h3>Office Address</h3>
            <p>Dhakin Shurma, Sylhet</p>
            <p>RD 100015, BD</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
