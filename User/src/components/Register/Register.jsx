import React, { useState } from "react";
import "./Register.css";
import "../../App.css";
import video from "../../LoginAssets/video.mp4";
import { Link } from "react-router-dom";
import logo from "../../LoginAssets/logo1.png";
import { FaUserShield } from "react-icons/fa";
import { BsFillShieldLockFill } from "react-icons/bs";
import { AiOutlineSwapRight } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import axios from "axios";

const Register = () => {
  const [formData, setFormData] = useState({
    username: "",
    email: "",
    password: "",
  });

  const { username, email, password } = formData;

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.post("http://localhost:3002/Register", formData);
      console.log("User registered successfully");
      // Redirect to login page or display a success message
    } catch (error) {
      console.error("Error registering user:", error);
      // Display an error message to the user
    }
  };

  return (
    <div className="RegisterPage flex">
      <div className="contanier flex">
        <div className="videoDiv">
          <video src={video} autoPlay muted loop></video>
          <div className="textDiv">
            <h2 className="title">Create your own project space</h2>
            <p>It's just the beginning</p>
          </div>
          <div className="footerDiv flex">
            <span className="text">Already have an account? </span>
            <Link to="/">
              <button className="btn">Login</button>
            </Link>
          </div>
        </div>

        <div className="formDiv flex">
          <div className="headerDiv">
            <img src={logo} alt="logoImage" />
            <h3>Welcome Back!</h3>
          </div>
          <form onSubmit={handleSubmit} className="form grid">
            <div className="inputDiv">
              <label htmlFor="username">Username</label>
              <div className="input flex">
                <FaUserShield className="icon" />
                <input
                  type="text"
                  id="username"
                  name="username"
                  value={username}
                  onChange={handleChange}
                  placeholder="Enter your username"
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="email">Email</label>
              <div className="input flex">
                <MdOutlineEmail className="icon" />
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={email}
                  onChange={handleChange}
                  placeholder="Enter your email"
                />
              </div>
            </div>

            <div className="inputDiv">
              <label htmlFor="password">Password</label>
              <div className="input flex">
                <BsFillShieldLockFill className="icon" />
                <input
                  type="password"
                  id="password"
                  name="password"
                  value={password}
                  onChange={handleChange}
                  placeholder="Enter your password"
                />
              </div>
            </div>

            <button type="submit" className="btn flex">
              <span>Sign up</span>
              <AiOutlineSwapRight className="icon" />
            </button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Register;
