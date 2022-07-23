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
        <Container className='mx-0 px-0 h-100 overflow-hidden' fluid>
            <Header/>
            <Row className='mx-0 mt-72 container-section' >
                <SideNav/>
                <Col className='' lg={10}>
                    Home Sweet Home
                </Col>
            </Row>
        </Container>
    );
}

export default Dashboard;
