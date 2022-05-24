import React from 'react'
import { Link } from "react-router-dom";
import img from '../../../assets/favicon.png'
import {FaHeadphonesAlt} from 'react-icons/fa'
import './navBar.scss'
const NavbarTop = () => {
  window.onscroll = function() {scrollFunction()};
  function scrollFunction() {
    if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
      document.getElementById("navbar").style.padding = "10px 10px";
      document.getElementById("navbar").style.boxShadow = " 0 13px 35px -12px rgba(35, 35, 35 , 10%)";
  
    } else {
      document.getElementById("navbar").style.padding = "30px 10px";
      document.getElementById("navbar").style.boxShadow = " 0 13px 35px -12px #ffff";
   
    }
  }
  return (
    <>
    
      <nav id='navbar' className="navbar navbar-light">
        <div className="container">
          <Link className="navbar-brand" to='/'>
            <img src={img} alt="png" className='NavbarIMG'/>
          </Link>
        
           <ul className='NavUL'>
             <li><Link to="/" className='active'>Home</Link> </li>
             <li><a href="#portfolio">Portfolio</a></li>
             <li><a href="#services">Services</a></li>
             <li><a href="#footer">Contact</a> </li>
             <li><Link to="/blog">Blog</Link> </li>
           </ul>
           <ul className='NavUL'>
             <li ><a href="tel:662300015"><FaHeadphonesAlt className='NavIcon'/> <span> +998 (66) 230 00 15</span></a></li>
           </ul>

          <button className=" navbar-toggler d-lg-none d-md-block d-block" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end"  id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link "  href="#!">Link</a>
                </li>
                <li className="nav-item ">
                <a className="nav-link "  href="#!">Link</a>
                </li>
              </ul>

            </div>
          </div>
        </div>
      </nav>
    </>
  )
}

export default NavbarTop