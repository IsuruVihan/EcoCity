import React from 'react';
import {Col, Container, FormControl, FormSelect, Image, Row} from "react-bootstrap";
import NFCProfile from "../../../../assets/images/nfc.png";

const CreateNFCTagForm = () => {
    return (
        <Container>
            <Row>
                <Col lg={12} className='d-flex justify-content-center'><Image src={NFCProfile} fluid
                                                                              style={{width: "100px"}}/></Col>
                <Col lg={3} className='d-flex align-items-center '>
                    <div>User Type</div>
                </Col>
                <Col lg={9} className='my-2'>
                    <FormSelect>
                        <option value='Driver'>Driver</option>
                        <option value='Maintenance'>Maintenance</option>
                        <option value='House'>House</option>
                    </FormSelect>
                </Col>
                <Col lg={3} className='d-flex align-items-center '>
                    <div>User ID</div>
                </Col>
                <Col lg={9} className='my-2'>
                    <FormControl type={'text'} value={''}
                                 style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                </Col>
                <Col lg={3} className='d-flex align-items-center '>
                    <div>Unique Number</div>
                </Col>
                <Col lg={9} className='my-2'>
                    <FormControl type={'text'} value={''}
                                 style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                </Col>

                <Col lg={12} className='my-2 d-flex justify-content-center'>
                    <div className='modal-button cancel py-2 text-center me-3 c-pointer'>Cancel</div>
                    <div className='modal-button save py-2 text-center c-pointer'>Save</div>
                </Col>
            </Row>
        </Container>
    );
}

export default CreateNFCTagForm;
