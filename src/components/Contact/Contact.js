import React from "react";
import "./Contact.css";
import {
  FaWhatsapp,
  FaAddressCard,
  FaPhoneAlt,
  FaVoicemail,
} from "react-icons/fa";
import { Container } from "react-bootstrap";

const Contact = () => {
  const handleContact = (e) => {
    e.preventDefault();
    const form = e.target;
    alert("Contact form under construction");
    form.reset();
  };
  return (
    <>
      <div className="text-center contact">
        <h1>
          <FaAddressCard></FaAddressCard> Concord IK Tower, Gulshan -2, Dhaka,
          Bangladesh
        </h1>
        <h1>
          <FaPhoneAlt></FaPhoneAlt> 01835888649
        </h1>
        <h1>
          <FaWhatsapp></FaWhatsapp> 01518470007
        </h1>
        <h1>
          <FaVoicemail></FaVoicemail> futuretechsoftit@gmail.com
        </h1>
      </div>

      <Container>
        <h3>Contact Form</h3>

        <div class="container">
          <form onSubmit={handleContact}>
            <label for="fname">Full Name</label>
            <input
              type="text"
              id="fname"
              name="firstname"
              placeholder="Your name.."
              required
            />
            <label for="email">Email</label>
            <input
              type="text"
              id="email"
              name="email"
              placeholder="Your email.."
              required
            />
            <label for="phone">Phone</label>
            <input
              className="w-100"
              type="number"
              id="phone"
              name="phone"
              placeholder="Your number.."
              required
            />{" "}
            <br />
            <label for="subject">Subject</label>
            <textarea
              id="subject"
              name="subject"
              placeholder="Write something.."
              style={{ height: "200px" }}
              required
            ></textarea>
            <input type="submit" value="Submit" />
          </form>
        </div>
      </Container>
    </>
  );
};

export default Contact;
