import React from 'react'
import './for.scss'
const MailPost = () => {
    return (
        <>
            <div className="row">
                <div className="col-xl-11  m-auto">
                    <div className="form-style-one">
                        <form action="" id='contact-form'>
                            <div className="messages"></div>
                            <div className="row controls">
                                <div className="col-sm-6">
                                    <div className="input-group-meta  form-group mb-25 has-error has-danger">
                                        <label htmlFor="">First Name*</label>
                                        <input type="text" placeholder="Muhammad" name="name" required="required" data-error="Name is required."></input>
                                        <div className="help-block  with-errors">

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-group-meta  form-group mb-25 has-error has-danger">
                                        <label htmlFor="">Last Name*</label>
                                        <input type="text" placeholder="Ali" name="name" required="required" data-error="Name is required."></input>
                                        <div className="help-block  with-errors">

                                        </div>
                                    </div>
                                </div>

                                <div className="col-sm-6">
                                    <div className="input-group-meta  form-group mb-25 has-error has-danger">
                                        <label htmlFor="">Phone Number</label>
                                        <input type="number" placeholder="33 707 77 77" name="phonenumber" required="required" data-error="Number is required."></input>
                                        <div className="help-block  with-errors">

                                        </div>
                                    </div>
                                </div>
                                <div className="col-sm-6">
                                    <div className="input-group-meta  form-group mb-25 has-error has-danger">
                                        <label htmlFor="">Select Service*</label>
                                        <select name="" id="">
                                            <option value="marketing">Digital Marketing</option>
                                            <option value="Web design">Web Site Design</option>
                                            <option value="seo">Seo</option>
                                            <option value="telegram bor">Telegram bot</option>
                                            <option value="CRM">CRM Platform</option>
                                            <option value="education">IT Education</option>
                                        </select>
                                        <div className="help-block  with-errors">

                                        </div>
                                    </div>
                                </div>
                                <div className="col-12">
                                    <div className="input-group-meta  form-group mb-25 has-error has-danger">
                                        <label htmlFor="">Phone Number</label>
                                        <input type="email" placeholder="mail@gmail.com" name="Email" required="required" data-error="Email is required."></input>
                                        <div className="help-block  with-errors">

                                        </div>
                                    </div>
                                </div>
                                <div class="col-12">

                                    <div class="input-group-meta form-group mb-35 has-error has-danger">
                                        <label htmlFor=""> Message</label>
                                        <textarea placeholder="Your message*" name="message" required="required" data-error="Please,leave us a message." rows={10}></textarea>
                                        
                                    </div>
                                </div>
                                <div className="col-12">
                                    <button className='theme-btn-one'>Send Message</button>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}

export default MailPost