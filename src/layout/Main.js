import React from "react";
import { Link, Outlet } from "react-router-dom";
import Header from "../components/Header/Header";
import { FaPhoneAlt } from "react-icons/fa";
import "./Main.css";
import logo from "../images/logo.jpeg";
import { FaFacebook, FaWhatsapp, FaTwitter, FaTwitch } from "react-icons/fa";

const Main = () => {
  const handlewhatsapp = () => {
    alert("Whatsapp Number - 01988065748");
  };
  return (
    <div>
      <img id="single" src={logo} alt="" />
      <div className="d-inline special">
        <span id="second">Future Tech Soft - IT</span>
      </div>
      <div className="ms-4 text-center phone">
        <FaPhoneAlt></FaPhoneAlt>
        <span className="ms-2">01988-065748</span>
      </div>
      <Header></Header>
      <Outlet></Outlet>

      <section class="footer">
        <div class="social">
          <Link
            target="_blank"
            to="https://www.facebook.com/groups/2329678687213631/?ref=share"
          >
            <FaFacebook></FaFacebook>
          </Link>
          <Link onClick={handlewhatsapp}>
            <FaWhatsapp></FaWhatsapp>
          </Link>
          <Link>
            <FaTwitter></FaTwitter>
          </Link>
          <Link>
            <FaTwitch></FaTwitch>
          </Link>
        </div>
        <ul class="list">
          <li>
            <Link to="/">Home</Link>
          </li>
          {/* <li>
            <Link to="/">Services</Link>
          </li> */}
          <li>
            <Link to="/aboutus">About</Link>
          </li>
          <li>
            <Link to="contact">Contact</Link>
          </li>
          {/* <li>
            <a href="#">Privacy Policy</a>
          </li> */}
        </ul>
        <p class="copyright">Future Tech Soft - IT @ 2021</p>
      </section>
    </div>
  );
};

export default Main;
