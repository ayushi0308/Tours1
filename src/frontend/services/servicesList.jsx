import React from "react";
import ServiceCard from "./serviceCard";
import {Col} from "reactstrap";

import weatherImg from '../images/weather.png'
import guideImg from '../images/guide.png'
import customizationImg from '../images/customization.png'

const servicesData = [
    {
        imgUrl: weatherImg,
        title: "Calculate Weather",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quisquam praesentium cum totam excepturi vel necessitatibus nam maiores unde voluptatibus, ab beatae ratione explicabo commodi vero omnis animi est fugit."
    },
    {
        imgUrl: guideImg,
        title: "Best Tour Guide",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quisquam praesentium cum totam excepturi vel necessitatibus nam maiores unde voluptatibus, ab beatae ratione explicabo commodi vero omnis animi est fugit."
    },
    {
        imgUrl: customizationImg,
        title: "Customization",
        desc: "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Alias quisquam praesentium cum totam excepturi vel necessitatibus nam maiores unde voluptatibus, ab beatae ratione explicabo commodi vero omnis animi est fugit."
    },
]




const ServiceList=()=>{
    return(
        <>
        {
            servicesData.map((item,index)=> (
                <Col lg="3" key={index}>
                    <ServiceCard item={item}/>
                </Col>
            ))
        }</>

    )
}

export default ServiceList;