import React from 'react';
import {Button, Col, Container, FormControl, Image, Row} from "react-bootstrap";

import GarbageHubCurrentLocationMap from "../maps/GarbageHubCurrentLocationMap";
import GarbageHubNewLocationMap from "../maps/GarbageHubNewLocationMap";

//Temporary imports
import mapImage from '../../../../assets/images/temp/popupMap.png';

const UpdateGarbageHubForm = () => {
    return (
        <Container>
            <Row>
                <Col lg={3}>
                    <div className='h5'>Hub Id</div>
                </Col>
                <Col lg={9}>
                    <FormControl type={'text'} disabled value={''} style={{backgroundColor: "white"}}/>
                </Col>
                <Col lg={3} className='mt-2'>
                    <div className='h5'>status</div>
                </Col>
                <Col lg={9} className='mt-2'>
                    <FormControl type={'text'} disabled value={''} style={{backgroundColor: "white"}}/>
                </Col>
                <Col lg={12} className='my-2'>
                    <h5>Current Location</h5>
                    <div style={{height: "200px", borderRadius: "15px"}} className=' modal-map'>

                    </div>
                </Col>
                <Col lg={12} className='my-2 '>
                    <h5 className='mb-3'>New Location</h5>
                    <Row>
                        <Col lg={3}>
                            <div className='h5'>Latitude</div>
                        </Col>
                        <Col lg={9}>
                            <FormControl type={'text'} disabled value={''} style={{backgroundColor: "white"}}/>
                        </Col>
                        <Col lg={3} className='my-2'>
                            <div className='h5'>Longitude</div>
                        </Col>
                        <Col lg={9} className='my-2'>
                            <FormControl type={'text'} disabled value={''} style={{backgroundColor: "white"}}/>
                        </Col>
                    </Row>
                    <div style={{height: "200px", borderRadius: "15px"}} className=' modal-map'>

                    </div>
                </Col>
                <Col lg={12} className='my-2 d-flex justify-content-end px-0'>
                    <Button style={{backgroundColor: "#228693"}} className='px-3'>Save</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default UpdateGarbageHubForm;
