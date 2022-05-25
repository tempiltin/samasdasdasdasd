import React from 'react'
import { Link } from 'react-router-dom'
import imglogo from '../../../assets/favicon.png'
import {FaFacebookF,FaInstagram,FaLinkedinIn} from  'react-icons/fa'
const Footer = () => {
    return (
        <footer id='footer'>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3">
                        <div className="footerLogo">
                            <a href="https://www.programmers.uz">
                                <img src={imglogo} alt="" />
                            </a>
                        </div>

                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <h5>Link</h5>
                        <ul className="footer-list style-none footer-Link">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><Link to="/about">About us</Link></li>
                            <li><a href="#Services">Services</a></li>
                            <li><a href="#Services">Features</a></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4 col-sm-6">
                        <h5>LEGAL</h5>
                        <ul className="footer-list style-none footer-Link">
                            <li><Link to="/faqs">Terms of use </Link></li>
                            <li><Link to="/faqs">Terms & conditions</Link></li>
                            <li><Link to="/faqs">Privacy policy</Link></li>
                            <li><Link to="/faqs">Cookie policy</Link></li>


                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-4">
                        <h5>NEWSLETTERT</h5>
                        <p className='Ptitle'>Join over 68,000 people getting our emails</p>
                        <ul className="footer-list style-none footer-Link mt-4">
                            <li className='mt-4'><Link to="/contact" className='Sign-UpBtn'>Sign Up</Link></li>
                        </ul>
                        <p></p>
                    </div>
                </div>
            </div>
            <div className="container">
                <hr />
                <div className="row pb-5 pt-3 justify-content-between align-items-center">
                    <div className="col-auto">
                        <ul className="Flink d-flex footer-list style-none  align-items-center">
                            <li ><Link to="/faqs" > Privacy & Terms</Link></li>
                            <li ><Link to="/contact" > Contact Us</Link></li>
                        </ul>
                    </div>

                    <div className="col-auto">
                        <a className='Cphy' href="https://Www.programmers.uz">Copyright @2022 Programmers UZ.</a>
                    </div>
                    <div className="col-auto">
                        <ul className='d-flex DFpp'>
                            <li><a href="https://www.facebook.com/programmerdotuz" target="_blank "><FaFacebookF/> </a></li>
                            <li><a href="https://www.instagram.com/programmer.uz/" target="_blank "><FaInstagram/> </a></li>
                            <li><a href="https://www.linkedin.com/company/programmeruz/" target="_blank "><FaLinkedinIn/> </a></li>
                        </ul>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer