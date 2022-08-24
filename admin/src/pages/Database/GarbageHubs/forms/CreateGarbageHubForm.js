import React from 'react';
import {Button, Col, Container, FormControl, Row} from "react-bootstrap";

import CreateGarbageHubMap from "../maps/CreateGarbageHubMap";

const CreateGarbageHubForm = () => {
    return (
        <Container>
            <Row>
                <Col lg={3}>
                    <div className='h5'>Hub Id</div>
                </Col>
                <Col lg={9}>
                    <FormControl type={'text'} value={''} style={{backgroundColor: "white"}}/>
                </Col>
                <Col lg={3} className='mt-2'>
                    <div className='h5'>status</div>
                </Col>
                <Col lg={9} className='mt-2'>
                    <FormControl type={'text'} value={''} style={{backgroundColor: "white"}}/>
                </Col>
                <Col lg={12} className='my-2'>
                    <h5>Current Location</h5>
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

export default CreateGarbageHubForm;
