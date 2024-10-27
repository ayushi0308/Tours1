import React from "react";
import CommonSection from './../shared/CommonSection';
import { useLocation} from "react-router-dom";
import {Container, Row, Col} from 'reactstrap';
import TourCard from './../shared/TourCard';
import { useState } from "react";




const SearchResult=()=>{

    const Location = useLocation();
    const [data] = useState(Location.state);
    return(
        <>
        <CommonSection title={'Tour Search Result'}/>
        <section>
            <Container>
                <Row>
                    {
                        data.length === 0 ? (
                        <h4 className="text-center">No tour found</h4> 
                    ):( 
                        data?.map(tour=> (
                            <Col lg='3' className="mb-4" key={tour._id}> 
                            <TourCard tour ={tour}/> 
                            </Col>
                        ))
                    )}
                </Row>
            </Container>
        </section>
        </>
    )
}
export default SearchResult;