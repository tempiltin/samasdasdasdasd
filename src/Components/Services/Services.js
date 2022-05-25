import React from 'react'
import { BiWorld } from 'react-icons/bi'
import { RiListSettingsFill } from 'react-icons/ri'
import { SiElectron } from 'react-icons/si'
import { AiFillFileMarkdown } from 'react-icons/ai'
const Services = () => {
    return (
        <section id="services">
            <div className="container">
                <div className="row">
                    <div className='col-lg-5 col-md-6 col-sm-8'>
                        <div data-aos="fade-right" className="titlediv">
                            <h2>Our included service.</h2>
                        </div>
                    </div>
                </div>
                <div className="row justify-content-between">
                    <div className="col-lg-3 col-md-6">
                        <div data-aos="fade-down-right" className="card">
                            <div className="icondiv">
                                <BiWorld className='SerIcon' />
                            </div>
                            <h5>web development</h5>
                            <ul className='style-none'>
                                <li>Personalization</li>
                                <li>Third-Party Integrations</li>
                                <li>First-Party Analytics</li>
                                <li>Hosting Setup</li>
                                <li>Securty</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div data-aos="fade-down-right" className="card">
                            <div className="icondiv">
                                <RiListSettingsFill className='SerIcon' />
                            </div>
                            <h5>Platform Audit</h5>
                            <ul className='style-none'>
                                <li>Full Consultation</li>
                                <li>Code Review</li>
                                <li>Staff Augmentation</li>
                                <li>Support</li>

                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div data-aos="fade-down-right" className="card">
                            <div className="icondiv">
                                <SiElectron className='SerIcon' />
                            </div>
                            <h5>e-Commerce</h5>
                            <ul className='style-none'>
                                <li>Custom Checkout Flow</li>
                                <li>Customer identity</li>
                                <li>Conversion Rate Optimization</li>
                                <li>Security Checkup</li>
                                <li>Data enrty</li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6">
                        <div data-aos="fade-down-right" className="card">
                            <div className="icondiv">
                                <AiFillFileMarkdown className='SerIcon' />
                            </div>
                            <h5>Marketing</h5>
                            <ul className='style-none'>
                                <li>Microsites</li>
                                <li>Marketing Automation</li>
                                <li>SEO & SMM</li>
                                <li>Hosting Setup</li>
                                <li>Lead Generation</li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Services