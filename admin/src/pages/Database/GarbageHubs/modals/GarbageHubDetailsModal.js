import React from 'react';
import {Col, Container, Modal, Row} from "react-bootstrap";

import GarbageBinDetailsCard from "../cards/GarbageBinDetailsCard";
import GarbageHubLocationMap from "../maps/GarbageHubLocationMap";
import GarbageHubCollectedWeightsGraph from "../graphs/GarbageHubCollectedWeightsGraph";
import GarbageHubCollectedWeightsGraphFilter from "../filters/GarbageHubCollectedWeightsGraphFilter";
import {AiFillCloseCircle} from "react-icons/ai";
import '../../../../assets/styles/Comp1.css';

const GarbageHubDetailsModal = (props) => {
    const bins = props.hub.bins;
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            scrollable={true}
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
                    <Row className='mx-0 mb-5'>
                        <Col lg={10} className='h5'>Collected Weight of garbage:</Col>
                        <Col lg={2}><GarbageHubCollectedWeightsGraphFilter/></Col>
                        <Col lg={12} className='mb-5'>
                            <GarbageHubCollectedWeightsGraph/>
                        </Col>
                    </Row>
                </Container>
            </Modal.Body>

        </Modal>
    );
}

export default GarbageHubDetailsModal;
