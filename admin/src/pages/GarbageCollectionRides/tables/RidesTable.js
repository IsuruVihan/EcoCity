import React, {useState} from 'react';
import {Col, Container, Image, Modal, Row, Table} from "react-bootstrap";

import AssignRideModal from "../modals/AssignRideModal";
import "../../../assets/styles/GarbageCollectionRides/tables/table.css";
import ViewRideModal from "../modals/ViewRideModal";

import leftarrow from "../../../assets/images/icons/leftarrow.png";
import rightarrow from "../../../assets/images/icons/rightarrow.png";
import create from "../../../assets/images/icons/create.png";
import close from "../../../assets/images/icons/close.png";


const RidesTable = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);

    const [showassign, setShowassign] = useState(false);
    const handleassignClose = () => setShowassign(false);
    const handleassingShow = () => setShowassign(true);
    let status = 'assigned';
    const changeColor=(status)=>{
        let classes = 'pt-1 pb-1 pe-2 px-2 label ' ;
        if(status === 'assigned') {
            classes += 'state-assigned'
        }
        else if(status === 'completed') {
            classes += 'state-completed'
        }
        else {
            classes += 'state-ongoing'
        }
        return  classes;
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Table>
                            <thead>
                            <tr style={{borderBottom:'1px solid #BFDDDE'}}>
                                <th scope="col">#</th>
                                <th scope="col">Job ID</th>
                                <th scope="col">Driver Name</th>
                                <th scope="col">Plate Number</th>
                                <th scope="col">Job Status</th>
                                <th scope="col">Date</th>
                                <th scope="col">Bin Type</th>
                                <th scope="col">Bin Count</th>
                                <th scope="col">Weight</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}} onClick={handleShow}>
                                <th scope="row" style={{color:'#B9B9B9'}}>1.</th>
                                <td>1234</td>
                                <td>Harith Kumar</td>
                                <td>NC-5205</td>
                                <td><label className={changeColor(status)}>{status}</label></td>
                                <td>06/07/2022</td>
                                <td>paper</td>
                                <td>0/2</td>
                                <td>-</td>
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
                                    <ViewRideModal/>
                                </Modal.Body>
                            </Modal>
                            </tbody>
                        </Table>
                    </Row>
                    <Row>
                        <Col xs={9}>
                            <Row style={{width:110, textAlign:'center', backgroundColor:'#228693',borderRadius:8,boxShadow: `0px 4px 8px #BFDDDE`}}>
                                <Col style={{textAlign:'center',color:'#fff', paddingTop:10,paddingBottom:10,cursor:'pointer'}} onClick={handleassingShow}>
                                    <Image src={create} width='20%'/>
                                    Assign
                                </Col>
                            </Row>
                            <Modal show={showassign} onHide={handleassignClose}>
                                <Modal.Header style={{border:'none'}}>
                                    <Row>
                                        <Col style={{ marginLeft:430}}>
                                            <Image src={close} onClick={handleassignClose} width="70%"/>
                                        </Col>
                                    </Row>
                                </Modal.Header>
                                <Modal.Body>
                                    <AssignRideModal/>
                                </Modal.Body>
                            </Modal>
                        </Col>
                        <Col style={{border:'1px solid green',paddingTop:5}}>
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

export default RidesTable;
