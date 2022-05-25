import React from 'react'
import './for.scss'
import {HiOutlineLocationMarker,HiOutlineMail} from 'react-icons/hi'
import {BsHeadset} from 'react-icons/bs'
const ContactCard = () => {
    return (
        <>
            <div className="row justify-content-around mt-5 mb-5 align-items-center">
                <div className="col-lg-3 col-md-3">
                    <div className="ContactForCard">
                        <div className="iconDiv">
                         <HiOutlineLocationMarker />
                        </div>
                        <h5>Our Address </h5>
                        <a href="https://www.google.com/maps/dir//Samarqand,+O%60zbekiston/@39.6538065,66.9208374,103m/data=!3m1!1e3!4m8!4m7!1m0!1m5!1m1!1s0x3f4d1942189103e9:0x3da25813fe021aba!2m2!1d66.9208642!2d39.6536817" target="_blank ">Samarkhand</a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-3">
                    <div className="ContactForCard">
                        <div className="iconDiv">
                         <HiOutlineMail />
                        </div>
                        <h5>Contact Info</h5>
                        <a href="mailto:info@programmers.uz" >info@programmers.uz</a>
                    </div>
                </div>

                <div className="col-lg-3 col-md-3">
                    <div className="ContactForCard">
                        <div className="iconDiv">
                         <BsHeadset />
                        </div>
                        <h5>Phone number</h5>
                        <a href="tel:662300015" >+998 (66) 230 0015</a>
                    </div>
                </div>
            </div>

        </>
    )
}

export default ContactCard