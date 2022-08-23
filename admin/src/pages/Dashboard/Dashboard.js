import React from 'react';
import {Col, Row} from "react-bootstrap";

import CountCard from "./cards/CountCard";
import WeightCard from "./cards/WeightCard";
import GarbageCollectionWeightGraph from "./graphs/GarbageCollectionWeightGraph";
import GarbageCollectionWeightFilter from "./filters/GarbageCollectionWeightFilter";
import Moment from 'moment';
import SideNav from "../../common/SideNav";
import Header from "../../common/Header";
import Footer from "../../common/Footer";

const Dashboard = () => {
    const formatDate = Moment().format('MMMM Do, YYYY');

    return (
        <Col lg={10}>
            <Row className="m-0">
                <Col className="p-0 mt-4" style={{
                    fontWeight: 800, fontSize: 30, color: '#075061'
                }} sm={12}>Hello Nisal,</Col>
                <Col className="p-0 mb-3" sm={12}>This is what we have got for you today - {formatDate}</Col>
                <Col lg={10} className="p-0" style={{border: '2px solid #BFDDDE', borderRadius: '20px'}}>
                    <Row className="m-0">
                        <Col lg={12} className="p-0 mt-3 ms-3"
                             style={{fontWeight: 600, fontSize: 20, color: '#042434'}}>Garbage Collection Weight</Col>
                        <Col lg={12} className="p-0"><GarbageCollectionWeightFilter/></Col>
                        <Col lg={12} className="p-0">
                            <Row className="m-0">
                                <Col lg={4} className="p-0"><WeightCard/></Col>
                                <Col lg={8} className="p-0 mt-3"><GarbageCollectionWeightGraph/></Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col lg={2} className="p-0" style={{display: "flex", flexDirection: "column"}}>
                    <Row className="m-0 ms-3">
                        <CountCard/>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
}

export default Dashboard;
