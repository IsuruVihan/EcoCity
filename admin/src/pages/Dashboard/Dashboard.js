import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import CountCard from "./cards/CountCard";
import WeightCard from "./cards/WeightCard";
import GarbageCollectionWeightGraph from "./graphs/GarbageCollectionWeightGraph";
import GarbageCollectionWeightFilter from "./filters/GarbageCollectionWeightFilter";
import SideNav from "../../common/SideNav";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

const Dashboard = () => {
    return (
        <Col className='' lg={10}>
            <Row className="m-0">
                <Col className="p-0 mt-4" style={{
                    fontWeight: 800, fontSize: 30, color: '#075061'}} sm={12}>Hello Nisal,</Col>
                <Col className="p-0 mb-3" sm={12}>This is what we have got for you today!</Col>
                <Col lg={10} className="p-0" style={{border: '2px solid red'}}>
                    <Row className="m-0" style={{border: '2px solid #BFDDDE', borderRadius: '20px'}}>
                        <Col lg={12} className="p-0 mt-2 ms-2" style={{
                            border: '2px solid pink', fontSize: 20, fontWeight: 500, color: '#042434'}}>Garbage Collection Weight</Col>
                        <Col lg={12} className="p-0" style={{border: '2px solid pink'}}>Filter</Col>
                        <Col lg={12} className="p-0" style={{border: '2px solid pink'}}>
                            <Row className="m-0" style={{border: '2px solid yellow'}}>
                                <Col lg={4} className="p-0" style={{border: '2px solid purple'}}><WeightCard/></Col>
                                <Col lg={8} className="p-0" style={{border: '2px solid purple'}}>Chart</Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col lg={2} className="p-0" style={{border: '2px solid red', display: "flex", flexDirection: "column"}}>
                    <Row className="m-0 ms-3"><CountCard/></Row>
                </Col>
            </Row>
        </Col>
    );
}

export default Dashboard;
