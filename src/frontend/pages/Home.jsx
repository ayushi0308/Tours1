import React from "react";
import {Container, Row, Col} from "reactstrap";
import Subtitle from "../shared/Subtitle";
import worldImg from '../images/world.png';
import "../styles/home.css";
import hero1 from "../images/hero-img01.jpg";
import hero2 from "../images/hero-img02.jpg";
import herovid from "../images/hero-video.mp4";
import SearchBar from "../shared/SearchBar";
import ServiceList from "../services/servicesList";
import FeaturedTourList from "../components/Featured-tours/FeaturedTourList";
import experienceImg from '../images/experience.png';
import MasonryImagesGallery from "../Image-gallery/MasonryImagesGallery";
import Testimonials from "../components/Testimonial/Testimonials";
import Newsletter from "../shared/Newsletter";





export default function Home(){

    return(
        <>

        {/* HERO CONTENT */}
        <section>
            <Container>
                <Row>
                    <Col lg="6">
                        <div className="hero-content">
                            <div className="hero-subtitle d-flex align-items-center">
                                <Subtitle subtitle={"Know Before you go"}/>
                                <img src={worldImg} alt=""/>
                            </div>
                            <h1>Travelling Opens the door for creating{" "}
                            <span className="highlight">memories</span></h1>
                            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Eligendi sapiente inventore aliquam, molestias provident quasi beatae nihil. 
                                Beatae labore omnis quasi voluptatum, esse modi adipisci alias obcaecati pariatur. 
                                Alias, ipsum.</p>
                        </div>

                    </Col>
                    <Col lg="2">
                        <div className="hero__img-box">
                            <img src={hero1} alt=""/>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="hero__img-box mt-4" >
                            <video src={herovid} alt="" controls/>
                        </div>
                    </Col>
                    <Col lg="2">
                        <div className="hero__img-box mt-5">
                            <img src={hero2} alt=""/>
                        </div>
                    </Col>
                    <SearchBar/>
                </Row>

            </Container>
        </section>


        {/* --------------subtitle----------------- */}
        <section>
            <Container>
                <Row>
                    <Col lg="3">
                        <h5 className="services__subtitle">What we serve</h5>
                        <h2 className="services__title">We offer best services</h2>

                    </Col>
                    <ServiceList/>
                    
                    
                </Row>
            </Container>
        </section>

        {/* ----------tour section----------- */}
        <section>
            <Container>
                <Row>
                    <Col lg="12" className="mb-5">
                        <Subtitle subtitle={'Explore'}/>
                        <h2 className="featured__tour-title">
                            Our Featured Tours
                        </h2>
                    </Col>

                    <FeaturedTourList/>
                </Row>
            </Container>
        </section>



        {/* -------------------experience------------------ */}

        <section>
            <Container>
                <Row>
                    <Col lg='6'>
                        <div className="experience__content">
                            <Subtitle subtitle={'Experience'}/>

                            <h2>With our all experience <br/> we will serve you </h2>
                            <p>
                                Lorem ipsum, dolor sit amet consectetur adipisicing elit. Dolorum deserunt aut amet porro vitae saepe a laborum nulla nobis. Possimus delectus deserunt consectetur culpa ratione architecto doloremque minima veritatis magnam.
                            </p>
                        </div>

                        <div className="counter__wrapper d-flex align-items-center gap-5">
                            <div className="counter__box">
                                <span>12k+</span>
                                <h6>Successful Trip</h6>
                            </div>

                            <div className="counter__box">
                                <span>2k+</span>
                                <h6>Regular Clients</h6>
                            </div>

                            <div className="counter__box">
                                <span>15</span>
                                <h6>Years experience</h6>
                            </div>

                        </div>
                    </Col>
                    <Col lg='6'>
                        <div className="experience__img">
                            <img src={experienceImg} alt="expimg"/>
                        </div>
                    </Col>
                </Row>
            </Container>
        </section>


        {/* -------------gallery---------- */}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle subtitle={'Gallery'} />
                        <h2 className="gallery__titlle">
                            Visit Our Customer Tour Gallery
                        </h2>
                    </Col>

                    <Col lg='12'>
                        <MasonryImagesGallery/>
                    </Col>
                </Row>
            </Container>
        </section>



        {/* --------------TESTIMONIAL--------------- */}
        <section>
            <Container>
                <Row>
                    <Col lg='12'>
                        <Subtitle subtitle={'Fans Love'}/>
                        <h2 className="testimonial__title">What our fans say about us</h2>
                    </Col>
                    <Col lg='12'>
                        <Testimonials/>
                    </Col>
                </Row>
            </Container>
        </section>

        <Newsletter/>
        </>
    )
}
