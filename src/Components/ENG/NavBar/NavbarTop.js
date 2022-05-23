import React from 'react'
import { Link } from "react-router-dom";
import img from '../../../assets/favicon.png'
const NavbarTop = () => {
  return (
    <>
    {/* fixed-top */}
      <nav className="navbar navbar-light  ">
        <div className="container">
          <Link className="navbar-brand" to="/">
            <img src={img} alt="png" className='NavbarIMG'/>
          </Link>
          <button className="navbar-toggler" type="button" data-bs-toggle="offcanvas" data-bs-target="#offcanvasNavbar" aria-controls="offcanvasNavbar">
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="offcanvas offcanvas-end" tabindex="-1" id="offcanvasNavbar" aria-labelledby="offcanvasNavbarLabel">
            <div className="offcanvas-header">
              <h5 className="offcanvas-title" id="offcanvasNavbarLabel">Offcanvas</h5>
              <button type="button" className="btn-close text-reset" data-bs-dismiss="offcanvas" aria-label="Close"></button>
            </div>
            <div className="offcanvas-body">
              <ul className="navbar-nav justify-content-end flex-grow-1 pe-3">
                <li className="nav-item">
                  <a className="nav-link active" aria-current="page" href="#!">Link</a>
                </li>
                <li className="nav-item dropdown">
                  <a className="nav-link dropdown-toggle" href="#!" id="offcanvasNavbarDropdown" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    Dropdown
                  </a>
                  <ul className="dropdown-menu" aria-labelledby="offcanvasNavbarDropdown">
                    <li><a className="dropdown-item" href="#!">Action</a></li>
                    <li><a className="dropdown-item" href="#!">Another action</a></li>
                    <li>
                      <a href="#!"> asd</a>
                    </li>
                    <li><a className="dropdown-item" href="#!">Something else here</a></li>
                  </ul>
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