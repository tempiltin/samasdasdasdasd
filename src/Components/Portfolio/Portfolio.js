import React, { Component } from 'react'
import img from '../../../src/assets/img_31.jpg'
export default class Portfolio extends Component {
  render() {
    return (
      <section id="portfolio">
          <div className="container">
          <div className="row">
                <div className='col-lg-5 col-md-6 col-sm-8'>
                    <div data-aos="zoom-in" className="titlediv">
                        <h2>Our selected work.</h2>
                    </div>
                </div>
            </div>
          </div>
          <div className="container">
              <div className="row">
                  <div className="col-lg-6 col-md-6">
                      <div data-aos="zoom-in-down" className="portDivImg">
                          <img src={img} alt="" />
                          <div className="titlePort">
                              <h5>Name</h5>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore odio quo ea, nisi, dicta vitae expedita neque labore veniam corrupti ducimus enim ipsam nemo illo voluptate. Beatae adipisci illum iusto saepe perspiciatis cumque ut optio animi ullam voluptatem. Aspernatur illum officiis unde molestias nobis tenetur fugit illo est dicta ex. Est, nulla repellendus? 
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                      <div data-aos="zoom-in-down" className="portDivImg">
                          <img src={img} alt="" />
                          <div className="titlePort">
                              <h5>Name</h5>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore odio quo ea, nisi, dicta vitae expedita neque labore veniam corrupti ducimus enim ipsam nemo illo voluptate. Beatae adipisci illum iusto saepe perspiciatis cumque ut optio animi ullam voluptatem. Aspernatur illum officiis unde molestias nobis tenetur fugit illo est dicta ex. Est, nulla repellendus? 
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                      <div data-aos="zoom-in-down" className="portDivImg">
                          <img src={img} alt="" />
                          <div className="titlePort">
                              <h5>Name</h5>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore odio quo ea, nisi, dicta vitae expedita neque labore veniam corrupti ducimus enim ipsam nemo illo voluptate. Beatae adipisci illum iusto saepe perspiciatis cumque ut optio animi ullam voluptatem. Aspernatur illum officiis unde molestias nobis tenetur fugit illo est dicta ex. Est, nulla repellendus? 
                              </p>
                          </div>
                      </div>
                  </div>
                  <div className="col-lg-6 col-md-6">
                      <div data-aos="zoom-in-down" className="portDivImg">
                          <img src={img} alt="" />
                          <div className="titlePort">
                              <h5>Name</h5>
                              <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Tempore odio quo ea, nisi, dicta vitae expedita neque labore veniam corrupti ducimus enim ipsam nemo illo voluptate. Beatae adipisci illum iusto saepe perspiciatis cumque ut optio animi ullam voluptatem. Aspernatur illum officiis unde molestias nobis tenetur fugit illo est dicta ex. Est, nulla repellendus? 
                              </p>
                          </div>
                      </div>
                  </div>
                 
              </div>
              <div className="row">
                  <div className="col-12">
                      <div className="Drop">
                          <select name="" id="">
                              <option value="5">5</option>
                              <option value="10">10</option>
                          </select>
                      </div>
                  </div>
              </div>
          </div>
      </section>
    )
  }
}
