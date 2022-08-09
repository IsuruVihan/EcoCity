import React, {useState} from 'react';
import { Col, Container, Image, Modal, Row, Table, Button} from "react-bootstrap";

import ViewComplaintModal from "../modals/ViewComplaintModal";

import leftarrow from "../../../assets/images/icons/leftarrow.png";
import rightarrow from "../../../assets/images/icons/rightarrow.png";
import close from "../../../assets/images/icons/close.png";
import RemarksForm from "../forms/RemarksForm";

const ComplaintsTable = () => {
        const [show, setShow] = useState(false);
        const handleClose = () => setShow(false);
        const handleShow = () => setShow(true);
        return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Table>
                            <thead>
                            <tr style={{borderBottom:'1px solid #BFDDDE'}}>
                                <th scope="col">#</th>
                                <th scope="col">Complaint ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Complaint Category</th>
                                <th scope="col">Hub ID</th>
                                <th scope="col">Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}} onClick={handleShow}>
                                <th scope="row" >1</th>
                                <td>1234</td>
                                <td>Harith kumar</td>
                                <td>hub</td>
                                <td>CMB-7-12</td>
                                <td>CMB-7-12</td>
                            </tr>
                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header style={{border:'none'}}>
                                    <Row>
                                        <Col style={{ marginLeft:430}}>
                                            <Image src={close} onClick={handleClose} width="70%"/>
                                        </Col>
                                    </Row>
                                </Modal.Header>
                                <Modal.Body>
                                    <ViewComplaintModal/>
                                </Modal.Body>
                            </Modal>
                            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}}>
                                <th scope="row" >2</th>
                                <td>1234</td>
                                <td>Harith kumar</td>
                                <td>hub</td>
                                <td>CMB-7-12</td>
                                <td>CMB-7-12</td>
                            </tr>
                            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}}>
                                <th scope="row" >3</th>
                                <td>1234</td>
                                <td>Harith kumar</td>
                                <td>hub</td>
                                <td>CMB-7-12</td>
                                <td>CMB-7-12</td>
                            </tr>
                            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}}>
                                <th scope="row" >4</th>
                                <td>1234</td>
                                <td>Harith kumar</td>
                                <td>hub</td>
                                <td>CMB-7-12</td>
                                <td>CMB-7-12</td>
                            </tr>
                            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}}>
                                <th scope="row" >5</th>
                                <td>1234</td>
                                <td>Harith kumar</td>
                                <td>hub</td>
                                <td>CMB-7-12</td>
                                <td>CMB-7-12</td>
                            </tr>
                            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}}>
                                <th scope="row" >6</th>
                                <td>1234</td>
                                <td>Harith kumar</td>
                                <td>hub</td>
                                <td>CMB-7-12</td>
                                <td>CMB-7-12</td>
                            </tr>
                            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}}>
                                <th scope="row" >7</th>
                                <td>1234</td>
                                <td>Harith kumar</td>
                                <td>hub</td>
                                <td>CMB-7-12</td>
                                <td>CMB-7-12</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <Row style={{border:'1px solid red'}}>
                        <Col style={{border:'1px solid blue'}} xs={9}></Col>
                        <Col style={{border:'1px solid green'}}>
                            <Row>
                                <Col style={{textAlign:'right', cursor:'pointer'}}>
                                    <Image width='80%' src={leftarrow}/>
                                </Col>
                                <Col xs={7}>
                                    <Row>
                                        <Col style={{border:'1px solid #BFDDDE', marginTop:2, marginBottom:2, marginLeft:5, marginRight:5, textAlign:'center', borderRadius:10}}>
                                            1
                                        </Col>
                                        <Col style={{marginTop:2, marginBottom:2, marginLeft:5, marginRight:5, textAlign:'center'}}>
                                            2
                                        </Col>
                                        <Col style={{marginTop:2, marginBottom:2, marginLeft:5, marginRight:5, textAlign:'center'}}>
                                            3
                                        </Col>
                                    </Row>
                                </Col>
                                <Col style={{textAlign:'left' , cursor:'pointer'}}>
                                    <Image width='80%' src={rightarrow}/>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>


  );
}

export default ComplaintsTable;
