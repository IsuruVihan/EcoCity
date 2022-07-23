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
        <Container className='mx-0 px-0' fluid>
            <Header/>
            <Row className='mx-0'>
                <SideNav/>
                <Col>
                    Home Sweet Home
                </Col>
            </Row>
            <Footer/>
        </Container>
    );
}

export default Dashboard;
