import React, { useState } from "react";
import './Login.css';
import '../../App.css';
import video from '../../LoginAssets/video.mp4';
import { Link } from "react-router-dom";
import logo from '../../LoginAssets/logo1.png';
import { FaUserShield } from 'react-icons/fa';
import { BsFillShieldLockFill } from 'react-icons/bs';
import { AiOutlineSwapRight } from 'react-icons/ai';
import axios from 'axios';


const Login = () => {
    const [Loginusername, setLoginusername] = useState('');
    const [Loginpassword, setLoginpassword] = useState('');

    const loginuser = (e) => {
        e.preventDefault();
        window.location.href = "http://localhost:3000"
       /* axios.post('http://localhost:3002/Login', {
            Loginusername: Loginusername,
            Loginpassword: Loginpassword 
        })
        .then((response) => {
            if (response.data.message) {
                window.location.href = '/dashboard'; // Assuming '/dashboard' is the correct route
            } else {
                window.location.href = '/'; // Assuming '/' is the correct route
            }
        })
        .catch((error) => {
            console.error('Login error:', error);
            // Handle error
     });*/
    };

    return (
        <div className="loginPage flex">
            <div className="contanier flex">
                <div className="videoDiv">
                    <video src={video} autoPlay muted loop></video>
                    <div className="textDiv">
                        <h2 className="title">create your own project space</h2>
                        <p>its just the beginning</p>
                    </div>
                    <div className="footerDiv flex">
                        <span className="text">Don't have an account ?</span>
                        <Link to='/Register'>
                            <button className="btn">Sign up</button>
                        </Link>
                    </div>
                </div>

                <div className="formDiv flex">
                    <div className="headerDiv">
                        <img src={logo} alt="logoImage" />
                        <h3>Welcome Back !</h3>
                    </div>
                    <form action="" className="form grid">
                        <span className="showMessage">login status will go here</span>

                        <div className="inputDiv">
                            <label htmlFor="username">Username</label>
                            <div className="input flex">
                                <FaUserShield className='icon' />
                                <input type="text" id="username" placeholder="Enter your username" 
                                    value={Loginusername}
                                    onChange={(event) => {
                                        setLoginusername(event.target.value)
                                    }}/>
                            </div>
                        </div>

                        <div className="inputDiv">
                            <label htmlFor="password">Password</label>
                            <div className="input flex">
                                <BsFillShieldLockFill className="icon"/>
                                <input type="password" id="password" placeholder="Enter your password" 
                                    value={Loginpassword}
                                    onChange={(event) => {
                                        setLoginpassword(event.target.value)
                                    }}/>
                            </div>
                        </div>
            
                        <button type="submit" className="btn flex"  onClick={loginuser}>
                            
                            <span>Login</span>
                            <AiOutlineSwapRight className="icon"/>
                            
                        </button>
                        
                        <span className="forgotpassword">
                            Forgot your password ? <a href="">Click here</a>
                        </span>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Login;
