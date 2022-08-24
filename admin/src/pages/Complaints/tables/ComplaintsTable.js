import React, {useState} from 'react';
import {Col, Container, Image, Modal, Row, Table, Button} from "react-bootstrap";

import ViewComplaintModal from "../modals/ViewComplaintModal";

import leftarrow from "../../../assets/images/icons/leftarrow.png";
import rightarrow from "../../../assets/images/icons/rightarrow.png";
import close from "../../../assets/images/icons/close.png";
import RemarksForm from "../forms/RemarksForm";
import {FiArrowLeft, FiArrowRight, FiEdit} from "react-icons/fi";

const ComplaintsTable = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const teampArray = Array.from(Array(10).keys());
    return (
        <Container>
            <Row>
                <Table borderless>
                    <thead>
                    <tr>
                        <th scope="col">#</th>
                        <th scope="col">Complaint ID</th>
                        <th scope="col">Name</th>
                        <th scope="col">Complaint Category</th>
                        <th scope="col">Hub ID</th>
                        <th scope="col">Date</th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        teampArray.map((num, idx) => {
                            return <tr style={{borderBottom: '1px solid #BFDDDE', cursor: 'pointer'}}
                                       onClick={handleShow}>
                                <th scope="row">{idx + 1}</th>
                                <td>1234</td>
                                <td>Harith kumar</td>
                                <td>hub</td>
                                <td>CMB-7-12</td>
                                <td>CMB-7-12</td>
                            </tr>
                        })
                    }

                    </tbody>
                </Table>

                <Modal show={show} onHide={handleClose}>
                    <Modal.Header style={{border: 'none'}}>
                        <Row>
                            <Col style={{marginLeft: 430}}>
                                <Image src={close} onClick={handleClose} width="70%"/>
                            </Col>
                        </Row>
                    </Modal.Header>
                    <Modal.Body>
                        <ViewComplaintModal/>
                    </Modal.Body>
                </Modal>
            </Row>
            {/*<Row style={{border: '1px solid red'}}>*/}
            {/*    <Col style={{border: '1px solid blue'}} xs={9}></Col>*/}
            {/*    <Col style={{border: '1px solid green'}}>*/}
            {/*        <Row>*/}
            {/*            <Col style={{textAlign: 'right', cursor: 'pointer'}}>*/}
            {/*                <Image width='80%' src={leftarrow}/>*/}
            {/*            </Col>*/}
            {/*            <Col xs={7}>*/}
            {/*                <Row>*/}
            {/*                    <Col style={{*/}
            {/*                        border: '1px solid #BFDDDE',*/}
            {/*                        marginTop: 2,*/}
            {/*                        marginBottom: 2,*/}
            {/*                        marginLeft: 5,*/}
            {/*                        marginRight: 5,*/}
            {/*                        textAlign: 'center',*/}
            {/*                        borderRadius: 10*/}
            {/*                    }}>*/}
            {/*                        1*/}
            {/*                    </Col>*/}
            {/*                    <Col style={{*/}
            {/*                        marginTop: 2,*/}
            {/*                        marginBottom: 2,*/}
            {/*                        marginLeft: 5,*/}
            {/*                        marginRight: 5,*/}
            {/*                        textAlign: 'center'*/}
            {/*                    }}>*/}
            {/*                        2*/}
            {/*                    </Col>*/}
            {/*                    <Col style={{*/}
            {/*                        marginTop: 2,*/}
            {/*                        marginBottom: 2,*/}
            {/*                        marginLeft: 5,*/}
            {/*                        marginRight: 5,*/}
            {/*                        textAlign: 'center'*/}
            {/*                    }}>*/}
            {/*                        3*/}
            {/*                    </Col>*/}
            {/*                </Row>*/}
            {/*            </Col>*/}
            {/*            <Col style={{textAlign: 'left', cursor: 'pointer'}}>*/}
            {/*                <Image width='80%' src={rightarrow}/>*/}
            {/*            </Col>*/}
            {/*        </Row>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            <Row className='bottom-0 mb-3 w-75 d-flex pe-0 position-absolute align-items-end'>
                <Col className='' lg={2}>
                    {/*<Button onClick={props.onCreateClicked}><FiEdit/> Create</Button>*/}
                </Col>
                <Col className='d-flex justify-content-end pe-5 pagination-group' lg={10}>
                    <FiArrowLeft color='#228693' size='23px' id='prev'/>
                    <label className={'single-page-number mx-1 active-page-number px-2'}> 1 </label>
                    <label className={'single-page-number mx-1 px-2'}> 2 </label>
                    <label className={'single-page-number mx-1 px-2'}> 3 </label>

                    <FiArrowRight color='#228693' size='23px' id='next'/>
                </Col>
            </Row>
        </Container>


    );
}

export default ComplaintsTable;
