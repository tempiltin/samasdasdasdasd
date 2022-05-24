import React from 'react'
import gif from '../../../assets/revizo-5.gif'
import {BsPlay} from 'react-icons/bs'
const Header = () => {

  return (
    <header id='header1' className='ptt'>
     <div className="container">
         <div className="row">
             <div className="col-lg-6 ">
                 <div data-aos="fade-up"  className="headerImg">
                 <img  src={gif} alt="" />
                 </div>
             </div>
             <div className="col-lg-6">
              <div className="VideoLink">
                <div className="loading">
              <a href="#!" className='fancybox video-icon d-flex align-items-center justify-content-center' data-fancybox>

              <BsPlay className='MoviIcon' />

               </a>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                <span></span>
                </div>
              </div>

              <h1>Programmers UZ</h1>
              <p>
              Programmers UZ provides various IT services.
              </p>
              <div className="row mt-5">
                <div className="col-auto">
                <a href="tel:662300015" className='HeaderButton'>Contact</a>
                </div>
                <div className="col-auto">
                  <a href="tel:662300015" className="NumberPhone">
                    +998 (66) 230 00 15
                  </a>
                </div>
              </div>
             </div>
         </div>
     </div>
    </header>
  )
}

export default Header