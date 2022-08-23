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
                            <tr style={{borderBottom:'1px solid #BFDDDE', fontSize: 18}}>
                                <th scope="col">#</th>
                                <th scope="col">Job ID</th>
                                <th scope="col">Driver Name</th>
                                <th scope="col">Plate Number</th>
                                <th scope="col">Job Status</th>
                                <th scope="col">Date</th>
                                <th scope="col">Bin Type</th>
                                <th scope="col">Bin Count</th>
                                <th scope="col">Weight(Kg)</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}} onClick={handleShow}>
                                <th scope="row" style={{color:'#B9B9B9'}}>1.</th>
                                <td>1234</td>
                                <td>Harith Kumar</td>
                                <td>NC-5205</td>
                                <td style={{textAlign:'center'}}><p className='m-0 p-1'
                                    style={{color:'#008BD1', backgroundColor:'#E1F0FF', width:'100px', borderRadius:'8px',
                                    fontWeight: 700}}>Assigned</p></td>
                                <td>06/07/2022</td>
                                <td>Paper</td>
                                <td>0/2</td>
                                <td>-</td>
                            </tr>
                            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}} onClick={handleShow}>
                                <th scope="row" style={{color:'#B9B9B9'}}>2.</th>
                                <td>1235</td>
                                <td>Ashen Perera</td>
                                <td>XA-0808</td>
                                <td style={{textAlign:'center'}}><p className='m-0 p-1'
                                    style={{color:'#00C186', backgroundColor:'#E0F8E3', width:'100px', borderRadius:'8px',
                                    fontWeight: 700}}>Completed</p></td>
                                <td>30/06/2022</td>
                                <td>Paper</td>
                                <td>2/2</td>
                                <td>1.4</td>
                            </tr>
                            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}} onClick={handleShow}>
                                <th scope="row" style={{color:'#B9B9B9'}}>2.</th>
                                <td>1235</td>
                                <td>Andrew Heshan</td>
                                <td>LB-7644</td>
                                <td style={{textAlign:'center'}}><p className='m-0 p-1'
                                    style={{color:'#FF9900', backgroundColor:'#FFF6E9', width:'100px', borderRadius:'8px',
                                    fontWeight: 700}}>On Going</p></td>
                                <td>29/06/2022</td>
                                <td>Plastic</td>
                                <td>1/3</td>
                                <td>-</td>
                            </tr>
                            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}} onClick={handleShow}>
                                <th scope="row" style={{color:'#B9B9B9'}}>2.</th>
                                <td>1235</td>
                                <td>Dasun Hathiyaldeniya</td>
                                <td>CAC-0207</td>
                                <td style={{textAlign:'center'}}><p className='m-0 p-1'
                                    style={{color:'#FF9900', backgroundColor:'#FFF6E9', width:'100px', borderRadius:'8px',
                                    fontWeight: 700}}>On Going</p></td>
                                <td>29/06/2022</td>
                                <td>Organic</td>
                                <td>2/4</td>
                                <td>2.3</td>
                            </tr>
                            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}} onClick={handleShow}>
                                <th scope="row" style={{color:'#B9B9B9'}}>1.</th>
                                <td>1532</td>
                                <td>Dasun Hathiyaldeniya</td>
                                <td>LB-7644</td>
                                <td style={{textAlign:'center'}}><p className='m-0 p-1'
                                    style={{color:'#008BD1', backgroundColor:'#E1F0FF', width:'100px', borderRadius:'8px',
                                    fontWeight: 700}}>Assigned</p></td>
                                <td>29/06/2022</td>
                                <td>Organic</td>
                                <td>0/5</td>
                                <td>-</td>
                            </tr>
                            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}} onClick={handleShow}>
                                <th scope="row" style={{color:'#B9B9B9'}}>2.</th>
                                <td>1221</td>
                                <td>Waruna Gihan</td>
                                <td>CBA-0001</td>
                                <td style={{textAlign:'center'}}><p className='m-0 p-1'
                                    style={{color:'#00C186', backgroundColor:'#E0F8E3', width:'100px', borderRadius:'8px',
                                    fontWeight: 700}}>Completed</p></td>
                                <td>15/06/2022</td>
                                <td>Glass</td>
                                <td>1/1</td>
                                <td>1.1</td>
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
                            <Row style={{width:110, textAlign:'center', backgroundColor:'#228693',
                                         borderRadius:8,boxShadow: `0px 4px 8px #BFDDDE`}}>
                                <Col style={{textAlign:'center',color:'#fff', paddingTop:10,
                                             paddingBottom:10,cursor:'pointer'}} onClick={handleassingShow}>
                                    <Image src={create} width='20%'/>
                                    Assign
                                </Col>
                            </Row>
                            <Modal show={showassign} onHide={handleassignClose}>
                                <Modal.Header style={{border:'none'}}>
                                    <Row>
                                        <Col style={{ marginLeft:430}}>
                                            <Image src={close} onClick={handleassignClose} width="50%" style={{cursor: "pointer"}}/>
                                        </Col>
                                    </Row>
                                </Modal.Header>
                                <Modal.Body>
                                    <AssignRideModal/>
                                </Modal.Body>
                            </Modal>
                        </Col>
                        <Col style={{paddingTop:5}}>
                            <Row>
                                <Col style={{textAlign:'right', cursor:'pointer'}}>
                                    <Image width='50%' src={leftarrow}/>
                                </Col>
                                <Col xs={7}>
                                    <Row>
                                        <Col className="p-0" style={{border:'1px solid #BFDDDE', textAlign:'center',
                                             borderRadius: 10, cursor:'pointer', marginTop:2, marginBottom:2, marginLeft:5, marginRight:5}}>
                                            1
                                        </Col>
                                        <Col style={{marginTop:2, marginBottom:2, marginLeft:5, marginRight:5,
                                             textAlign: 'center', cursor:'pointer'}}>
                                            2
                                        </Col>
                                        <Col style={{marginTop:2, marginBottom:2, marginLeft:5, marginRight:5,
                                             textAlign:'center', cursor:'pointer'}}>
                                            3
                                        </Col>
                                    </Row>
                                </Col>
                                <Col style={{textAlign:'left' , cursor:'pointer'}}>
                                    <Image width='50%' src={rightarrow}/>
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

