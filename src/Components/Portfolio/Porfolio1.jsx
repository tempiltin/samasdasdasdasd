import React, { useEffect, useState } from 'react';
import axios from 'axios';


const Porfolio1 = () => {
    const [cardData, setCordData] = useState([]);
    const [visible, setVisible] = useState([4])
    const [urllink, setUrlLink] = useState("https://companyyy.herokuapp.com/api/all_product/")
    const allCardData = async () => {
        const response = await axios.get(`${urllink}`)
        setUrlLink(response.data.next)
        let cards = []
        cards.push(...cardData, ...response.data.results)
        setCordData(cards)
    }
    const loadMore = () => {
        setVisible(visible + 2)
        allCardData()
    }
    useEffect(() => {
        allCardData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [])
    const renderCard = (person, index) => {
        return (
            <div className="col-lg-6 col-md-6" key={index}>
                <div data-aos="zoom-in-down" className="portDivImg">
                    <img src={person.image} alt="" />
                    <h1>{person.id}</h1>
                    <div className="titlePort">
                        <h5>{person.name}</h5>
                        <p>{person.about}</p>
                    </div>
                </div>
            </div>
        )
    }
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
                <div className="row" >
                    {cardData.slice(0, visible).map((card, index) => {
                        return renderCard(card, index)
                    })}
                </div>
                <div className="row mt-5">
                    <div className="col-12">
                        <div className="Drop">
                            <button onClick={loadMore} className=" PortfolioButton">Load More</button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default Porfolio1