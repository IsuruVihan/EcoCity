import React from 'react';
import {Col, Container, FormControl, Image, Modal, Row} from "react-bootstrap";

import GarbageBinDetailsCard from "../cards/GarbageBinDetailsCard";
import GarbageHubLocationMap from "../maps/GarbageHubLocationMap";
import GarbageHubCollectedWeightsGraph from "../graphs/GarbageHubCollectedWeightsGraph";
import GarbageHubCollectedWeightsGraphFilter from "../filters/GarbageHubCollectedWeightsGraphFilter";
import {AiFillCloseCircle} from "react-icons/ai";
import '../../../../assets/styles/Comp1.css';

//temp imports
import popupMapImage from '../../../../assets/images/temp/popupMap.png';


const GarbageHubDetailsModal = (props) => {
    if (!props.hub) return;
    const bins = props.hub.Bins;
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
                    <Row className='mx-0 align-items-center d-flex'>
                        <Col lg={3}>
                            <div className='h4'>Hub Id</div>
                        </Col>
                        <Col lg={9}>
                            <FormControl type={'text'} disabled value={props.hub.id}
                                         style={{backgroundColor: "white"}} readOnly/>
                        </Col>
                        <Col lg={3} className='mt-1'>
                            <div className='h4'>Status</div>
                        </Col>
                        <Col lg={9} className='mt-1'>
                            <FormControl type={'text'} disabled value={props.hub.status}
                                         style={{backgroundColor: "white"}}/>
                        </Col>
                    </Row>
                    <Row className='mx-0 mt-3'>
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
                        <Col lg={12} className=' modal-map' style={{height: "300px", borderRadius: "15px"}}>

                        </Col>
                    </Row>
                    {/*<Row className='mx-0 my-5'>*/}
                    {/*    <Col lg={10} className='h5'>Collected Weight of garbage:</Col>*/}
                    {/*    <Col lg={2}><GarbageHubCollectedWeightsGraphFilter/></Col>*/}
                    {/*    <Col lg={12} className='mb-5'>*/}
                    {/*        <GarbageHubCollectedWeightsGraph/>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                </Container>
            </Modal.Body>

        </Modal>
    );
}

export default GarbageHubDetailsModal;
