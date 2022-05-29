import React, { useState, useEffect } from 'react'

const Portfolio = () => {


    const [data, setData] = useState([])

    const [urls, setUrls] = useState([])

    const [pages , setPage] = useState(1)

    let dataArr = []

    useEffect(() => {
        fetchDate();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    let apiUrl = 'https://companyyy.herokuapp.com/api/all_product/'
    function fetchDate(page = 1) {
        fetch(`${apiUrl + '?page='}${page}`)
            .then((res) => res.json())
            .then((data) => {
                setData(data.results)
                setUrls(data.next)
                dataArr.push()
               console.log(data);
            })
            .catch((err) => {
                console.log('API da nosozlik', err);
            })
    }
    const click = () => {
        setPage(pages + 1)
        console.log('data >>>>>>>>>> ' , urls); 
        apiUrl = urls
    }

    return (
        <section id="portfolio" >
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
                <div className="row" >
                    {
                        data.map((res, index) => (
                            <div className="col-lg-6 col-md-6" key={index}>
                                <div data-aos="zoom-in-down" className="portDivImg">
                                    <img src={res.image} alt="" />
                                    <h1>{index}</h1>
                                    <h1>{res.id}</h1>
                                    <div className="titlePort">
                                        <h5>{res.name}</h5>
                                        <p>{res.about}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        ))
                    }


                </div>
                <div className="row">
                    <div className="col-12">
                        <div className="Drop">
                            <button onClick={click}>next</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Portfolio