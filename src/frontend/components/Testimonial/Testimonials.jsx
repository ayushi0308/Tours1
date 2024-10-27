import React from "react";
import Slider from 'react-slick';
import ava1 from '../../images/ava-1.jpg';
import ava2 from '../../images/ava-2.jpg';
import ava3 from '../../images/ava-3.jpg';



const Testimonials = ()=>{


    const settings = {
        dots: true,
        infinite: true,
        autoplay: true,
        speed: 1000,
        swipeToSlide: true,
        autoplaySpeed: 2000,
        slidesToShow: 3,

        responsive:[
            {
                breakpoint: 992,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true,
                },
            },
            {
                breakpoint: 576,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    
                },
            },
        ]
    }


    return <Slider {...settings}>
        <div className="testimonial py-4 px-3">
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quidem, quia neque assumenda laboriosam impedit ut eligendi porro ad laudantium cum explicabo iusto expedita voluptates harum nam iure! Expedita, voluptates.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava1} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">John Doe</h6>
                    <p>Customers</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quidem, quia neque assumenda laboriosam impedit ut eligendi porro ad laudantium cum explicabo iusto expedita voluptates harum nam iure! Expedita, voluptates.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava2} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Lia Franklin</h6>
                    <p>Customers</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Dolorem, quidem, quia neque assumenda laboriosam impedit ut eligendi porro ad laudantium cum explicabo iusto expedita voluptates harum nam iure! Expedita, voluptates.
            </p>
            <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava3} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Amol Parahar</h6>
                    <p>Customers</p>
                </div>
            </div>
        </div>

        <div className="testimonial py-4 px-3">
            <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi tenetur quos excepturi vel doloremque. Natus alias at nam, ratione deleniti, praesentium perspiciatis doloribus quibusdam iure asperiores reprehenderit debitis expedita accusantium?
            </p>
        
        <div className="d-flex align-items-center gap-4 mt-3">
                <img src={ava2} className="w-25 h-25 rounded-2" alt="" />
                <div>
                    <h6 className="mb-0 mt-3">Lifeena Fernandez</h6>
                    <p>Customers</p>
                </div>
        </div>
        </div>
    </Slider>
}
export default Testimonials