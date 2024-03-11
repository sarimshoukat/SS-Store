import React from 'react'
import { Link } from 'react-router-dom';
import { FaFacebookF, FaTwitter, FaLinkedin, FaInstagram } from 'react-icons/fa'
import './Footer.css'

const Footer = () => {
    return (
        <>
            <div className="footer">
                <div className="container">
                    <div className="about">
                        <div className="logo">
                            <img src="./img/logo.png" alt="logo" style={{width:'120px'}}/>
                        </div>
                        <div className="detail">
                            <p>Your go to place for all of your electronic needs!</p>
                            <div className="icon">
                                <li><FaInstagram/></li>
                                <li><FaFacebookF /> </li>
                                <li><FaTwitter /></li>
                                <li><FaLinkedin /></li>
                            </div>
                        </div>
                    </div>
                    <div className="account">
                        <h3>My Account</h3>
                        <ul>
                            <li>Account</li>
                            <li>Order</li>
                            <li>Cart</li>
                            <li>Shipping</li>
                            <li>Return</li>
                        </ul>
                    </div>
                    <div className="page">
                        <h3>Pages</h3>
                        <ul>
                            <li>
                             <Link to='/' className='link'>Home</Link>
                            </li>
                            <li>
                                <Link to='/about' className='link'>About</Link>
                            </li>
                            <li>
                                <Link to='/contact' className='link'>Contact</Link>
                            </li>
                            <li>Terms & Conditions</li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}

export default Footer
