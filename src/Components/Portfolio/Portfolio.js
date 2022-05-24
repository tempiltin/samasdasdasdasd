import React, { useState, useEffect } from 'react'
import ReactPaginate from 'react-paginate'
import img from '../../../src/assets/img_31.jpg'

const PER_PAGE = 10;
const Portfolio = () => {

    const [currentPage, setcurrentPage] = useState(0);
    const [data, setData] = useState([]);

    useEffect(() => {
        fetchData();
    }, [])
    function fetchData() {
        fetch("https://jsonplaceholder.typicode.com/photos")
            .then((res) => res.json())
            .then((data) => {
                setData(data);
            });
    }

    function handlePageClick({ selected: selectedPage }) {
        console.log("selectedPage", selectedPage);
        setcurrentPage(selectedPage)
    }

    const offset = currentPage * PER_PAGE;


    const pageCaunt = Math.ceil(data.length / PER_PAGE)



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
                    {
                        data.slice(offset, offset + PER_PAGE).map((res, index) => (
                            <div className="col-lg-6 col-md-6" key={index}>
                                <div data-aos="zoom-in-down" className="portDivImg">
                                    <img src={res.thumbnailUrl} alt="" />
                                    <div className="titlePort">
                                        <h5>{res.url}</h5>
                                        <p>{res.title}
                                        </p>
                                    </div>
                                </div>
                            </div>

                        ))}


                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="Drop">
                          <ReactPaginate
                           previousLabel={'< - Prev'}
                           nextLabel={"Next - >"}
                           pageCount={pageCaunt}
                           onPageChange={handlePageClick}
                           containerClassName={"pagination"}
                           previousLinkClassName={"pagination__link"}
                           nextLinkClassName={"pagination__link"}
                           disabledLinkClassName={"pagination__link--disablet"}
                           activeClassName={"pagination__link--active"}
                           >

                          </ReactPaginate>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio