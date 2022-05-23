import React from 'react'
import gif from '../../../assets/revizo-5.gif'
const Header = () => {

  return (
    <header id='header1' className='ptt'>
     <div className="container">
         <div className="row">
             <div className="col-lg-6 col-md-6">
                 <div className="headerImg">
                 <img src={gif} alt="" />
                 </div>
             </div>
         </div>
     </div>
    </header>
  )
}

export default Header