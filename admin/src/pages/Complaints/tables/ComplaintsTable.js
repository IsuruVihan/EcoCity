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
                            <tr style={{borderBottom:'1px solid #BFDDDE', fontSize: 18}}>
                                <th scope="col">#</th>
                                <th scope="col">Complaint ID</th>
                                <th scope="col">Name</th>
                                <th scope="col">Complaint Category</th>
                                <th scope="col">ID</th>
                                <th scope="col">Date</th>
                            </tr>
                            </thead>
                            <tbody>
                            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}} onClick={handleShow}>
                                <th scope="row" style={{color:'#d6d6c2'}}>1.</th>
                                <td>1234</td>
                                <td>Harith kumar</td>
                                <td>Hub</td>
                                <td>CMB-7-12</td>
                                <td>10/08/2022</td>
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
                                <th scope="row" style={{color:'#d6d6c2'}}>2.</th>
                                <td>1221</td>
                                <td>Shan Perera</td>
                                <td>Hub</td>
                                <td>CMB-7-1</td>
                                <td>11/08/2022</td>
                            </tr>
                            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}}>
                                <th scope="row" style={{color:'#d6d6c2'}}>3.</th>
                                <td>1211</td>
                                <td>Dasun Hathiyaldeniya</td>
                                <td>Hub</td>
                                <td>CMB-2-1</td>
                                <td>15/08/2022</td>
                            </tr>
                            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}}>
                                <th scope="row" style={{color:'#d6d6c2'}}>4.</th>
                                <td>1144</td>
                                <td>Waruna Gihan</td>
                                <td>Hub</td>
                                <td>CMB-1-12</td>
                                <td>16/08/2022</td>
                            </tr>
                            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}}>
                                <th scope="row" style={{color:'#d6d6c2'}}>5.</th>
                                <td>1245</td>
                                <td>Sanath Weerakoon</td>
                                <td>NFC</td>
                                <td>-</td>
                                <td>16/08/2022</td>
                            </tr>
                            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}}>
                                <th scope="row" style={{color:'#d6d6c2'}}>6.</th>
                                <td>1233</td>
                                <td>Harith kumar</td>
                                <td>NFC</td>
                                <td>-</td>
                                <td>18/08/2022</td>
                            </tr>
                            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}}>
                                <th scope="row" style={{color:'#d6d6c2'}}>7.</th>
                                <td>1234</td>
                                <td>Ajith Bandara</td>
                                <td>NFC</td>
                                <td>-</td>
                                <td>20/08/2022</td>
                            </tr>
                            </tbody>
                        </Table>
                    </Row>
                    <Row>
                        <Col xs={9}></Col>
                        <Col>
                            <Row>
                                <Col style={{textAlign:'right', cursor:'pointer'}}>
                                    <Image width='50%' src={leftarrow}/>
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

export default ComplaintsTable;
