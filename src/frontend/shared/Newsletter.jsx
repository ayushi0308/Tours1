import React from "react";
import '../shared/newsletter.css';
import { Container, Row, Col } from "reactstrap";
import maletourist from '../images/male-tourist.png'

const Newsletter = ()=>{
    return <section className="newsletter">
        <Container>
            <Row>
                <Col lg="6">
                    <div className="newsletter__content">
                        <h2>Subscribe now to get useful insights</h2>

                        <div className="newsletter__input">
                            <input type="email" placeholder="Enter Your Email"/>
                            <button className="btn newsletter__btn">
                                Subscribe
                            </button>
                        </div>
                        <p>
                            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Iusto ipsam, ratione rem numquam in esse.
                        </p>
                    </div>
                
                </Col>
                <Col lg='6'>
                    <div className="newsletter__img">
                        <img src={maletourist} alt="maletourist"/>
                    </div>
                </Col>
            </Row>
        </Container>
    </section>
}

export default Newsletter;