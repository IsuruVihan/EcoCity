import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import GarbageBinDetailsCard from "../cards/GarbageBinDetailsCard";
import GarbageHubLocationMap from "../maps/GarbageHubLocationMap";
import GarbageHubCollectedWeightsGraph from "../graphs/GarbageHubCollectedWeightsGraph";
import GarbageHubCollectedWeightsGraphFilter from "../filters/GarbageHubCollectedWeightsGraphFilter";
import {AiFillCloseCircle} from "react-icons/ai";

const GarbageHubDetailsModal = () => {
    return (
        <Container
            className='position-absolute border-red garbage-hub-details-wrapper d-flex justify-content-center align-items-center'>
            <Row className='garbage-hub-details border-red h-75 w-35'>
                <Row className='mx-0 border-red h-10'>
                    <span>Garbage Hub Details</span>
                    <AiFillCloseCircle/>
                </Row>
                <Row className='mx-0 border-red h-90 garbage-hub-details-body'>
                    <div>Hub Id</div>
                    <div>Status</div>
                    <div>Sensor data section</div>
                    <div>Location</div>
                    <div>Collected weight of garbage section</div>
                </Row>
            </Row>
        </Container>
    );
}

export default GarbageHubDetailsModal;
