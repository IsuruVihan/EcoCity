import React from 'react';
import {Col, Container, Modal, Row} from "react-bootstrap";

import GarbageBinDetailsCard from "../cards/GarbageBinDetailsCard";
import GarbageHubLocationMap from "../maps/GarbageHubLocationMap";
import GarbageHubCollectedWeightsGraph from "../graphs/GarbageHubCollectedWeightsGraph";
import GarbageHubCollectedWeightsGraphFilter from "../filters/GarbageHubCollectedWeightsGraphFilter";
import {AiFillCloseCircle} from "react-icons/ai";

const GarbageHubDetailsModal = (props) => {
    const bins = props.hub.bins;
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Garbage Hub Details
                </Modal.Title>
            </Modal.Header>

            <Modal.Body>
                <Container>
                    <Row className='mx-0'>
                        <Col>
                            <div className='h4'>Hub Id</div>
                            <div className='h4'>Status</div>
                        </Col>
                    </Row>
                    <Row className='mx-0'>
                        <Col lg={12} className='h4'>Sensor Data</Col>
                        <Col lg={12}>
                            <Row>
                                <Col lg={6} className={'my-2'}><GarbageBinDetailsCard bin={bins[0]}/></Col>
                                <Col lg={6} className={'my-2'}><GarbageBinDetailsCard bin={bins[1]}/></Col>
                                <Col lg={6} className={'my-2'}><GarbageBinDetailsCard bin={bins[2]}/></Col>
                                <Col lg={6} className={'my-2'}><GarbageBinDetailsCard bin={bins[3]}/></Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row className='mx-0'>
                        <Col lg={12} className='h4'>Location</Col>
                        <Col lg={12}>
                            Map goes here
                        </Col>
                    </Row>
                    <Row className='mx-0'>
                        <Col lg={11} className='h4'>Collected Weight of garbage:</Col>
                        <Col lg={1}>Filter</Col>
                        <Col lg={12}>
                            Chart
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>

        </Modal>
    );
}

export default GarbageHubDetailsModal;
