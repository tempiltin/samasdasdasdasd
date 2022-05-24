import React from 'react'
import gif from '../../../assets/revizo-5.gif'
import { BsPlay } from 'react-icons/bs'
import vd from '../../../assets/programmers.mp4'
const Header = () => {
  function Movie() {
    document.getElementById("MovieYour").style.display = "flex";
  }
  function Close() {
    document.getElementById("MovieYour").style.display = "none";
  }
  return (
    <header id='header1' className='ptt'>
      <div className="MovieYour" id='MovieYour' onClick={()=> Close()}>
        <video  src={vd} type="video/mp4" controls > </video>
        
          </div>

          <div className="container">
            <div className="row">
              <div className="col-lg-6 ">
                <div data-aos="fade-up" className="headerImg">
                  <img src={gif} alt="" />
                </div>
              </div>
              <div className="col-lg-6">
                <div className="VideoLink">
                  <div className="loading">
                    <a href="#!" onClick={() => Movie()} className='fancybox video-icon d-flex align-items-center justify-content-center' data-fancybox>

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
                <div className="row mt-5 Media320">
                  <div className="col-sm-auto col-12">
                    <a href="tel:662300015" className='HeaderButton'>Contact</a>
                  </div>
                  <div className="col-sm-auto col-12">
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