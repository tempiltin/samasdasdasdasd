import React from 'react'
import { Link } from 'react-router-dom'
import imglogo from '../../../assets/favicon.png'
import {BsHeadset,BsMailbox,BsYoutube,BsInstagram,BsLinkedin} from 'react-icons/bs'
import {GoLocation} from 'react-icons/go'
const Footer = () => {
    return (
        <footer>
            <div className="container">
                <div className="row">
                    <div className="col-lg-3 col-md-3">
                        <div className="footerLogo">
                            <a href="https://www.programmers.uz">
                                <img src={imglogo} alt="" />
                            </a>
                        </div>
                        <p>Programmer UZ - a project providing various services and products in the field of information technology. "Programmers UZ" LLC provides services</p>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <h5>Link</h5>
                        <ul className="footer-list style-none">
                            <li><a href="#home">Home</a></li>
                            <li><a href="#portfolio">Portfolio</a></li>
                            <li><a href="#Services">Services</a></li>
                            <li><Link to="/blog">Blog</Link></li>
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <h5>Contact</h5>
                        <ul className="footer-list style-none">
                            <li><a href="tel:662300015"><BsHeadset/> <span>+992 (66) 230 00 15</span></a></li>
                            <li><a href="mailto:info@programmer.uz"><BsMailbox/> <span>info@programmer.uz</span></a></li>
                            <li><a href="#!"><GoLocation/> <span>Online</span></a></li>
                           
                        </ul>
                    </div>
                    <div className="col-lg-3 col-md-3">
                        <h5>GoLocation</h5>
                        <ul className="footer-list style-none">
                            <li><a href="https://www.youtube.com/programmeruz" target="_blank "><BsYoutube/> <span>You tube</span></a></li>
                            <li><a href="https://www.instagram.com/programmer.uz/" target="_blank "><BsInstagram/> <span>instagram</span></a></li>
                            <li><a href="https://www.linkedin.com/company/programmeruz/" target="_blank "><BsLinkedin/> <span>linkedin</span></a></li>
                           
                        </ul>
                    </div>
                </div>
            </div>
            <div className="container">
                <hr />
                <div className="row mb-2 justify-content-center align-items-center">
                  <div className="col-auto">
                      <a className='Cphy' href="https://Www.programmers.uz">Copyright @2022 Programmers UZ.</a>
                  </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer