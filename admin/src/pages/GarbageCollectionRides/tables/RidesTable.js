import React, {useEffect, useState} from 'react';
import {Col, Container, Image, Modal, Row, Table} from "react-bootstrap";
import AssignRideModal from "../modals/AssignRideModal";
import "../../../assets/styles/GarbageCollectionRides/tables/table.css";
import ViewRideModal from "../modals/ViewRideModal";

import leftarrow from "../../../assets/images/icons/leftarrow.png";
import rightarrow from "../../../assets/images/icons/rightarrow.png";
import create from "../../../assets/images/icons/create.png";
import close from "../../../assets/images/icons/close.png";
import {FiArrowLeft, FiArrowRight} from "react-icons/fi";
import {getAllGCJobs} from "../api/api";
import {useSelector} from "react-redux";

const RidesTable = () => {
    const loggedUser = useSelector((state) => state.auth.loggedUser);
    const [allGCJ, setAllGCJ] = useState(null);
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [showassign, setShowassign] = useState(false);
    const handleassignClose = () => setShowassign(false);
    const handleassingShow = () => setShowassign(true);

    useEffect(() => {
        getAllGCJobs(loggedUser.accessToken, loggedUser.refreshToken).then((res) => {
            console.log(res.data.gcjs);
            setAllGCJ(res.data.gcjs);
        })
    }, [])
    let status = 'assigned';
    const changeColor = (status) => {
        let classes = 'pt-1 pb-1 pe-2 px-2 label ';
        if (status === 'assigned') {
            classes += 'state-assigned'
        } else if (status === 'completed') {
            classes += 'state-completed'
        } else {
            classes += 'state-ongoing'
        }
        return classes;
    }
    const getTextColor = (status) => {
        switch (status) {
            case 'Not started':
                return '#008BD1';
            case 'Finished':
                return '#00C186';
            case 'Ongoing':
                return '#FF9900';
            default:
                return '';
        }
    }
    const getBGColor = (status) => {
        switch (status) {
            case 'Not started':
                return '#E1F0FF';
            case 'Finished':
                return '#E0F8E3';
            case 'Ongoing':
                return '#FFF6E9';
            default:
                return '';
        }
    }
    if (!allGCJ) return;

    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Table>
                            <thead>
                            <tr style={{borderBottom: '1px solid #BFDDDE', fontSize: 18}}>
                                <th scope="col">#</th>
                                <th scope="col">Job ID</th>
                                <th scope="col">Driver Name</th>
                                <th scope="col">Plate Number</th>
                                <th scope="col">Job Status</th>
                                <th scope="col">Date</th>
                                <th scope="col">Bin Type</th>
                                <th scope="col">Bin Count</th>
                            </tr>
                            </thead>
                            <tbody>
                            {
                                allGCJ.map((gcj, index) => {
                                    return <tr style={{borderBottom: '1px solid #BFDDDE', cursor: 'pointer'}}
                                               onClick={handleShow}>
                                        <th scope="row" style={{color: '#B9B9B9'}}>{index + 1}</th>
                                        <td>{gcj.id}</td>
                                        <td>{gcj.Driver.firstname + ' ' + gcj.Driver.lastname}</td>
                                        <td>{gcj.Truck.numberplate}</td>
                                        <td style={{textAlign: 'center'}}>
                                            <p className='m-0 p-1'
                                               style={{
                                                   color: getTextColor(gcj.status),
                                                   backgroundColor: getBGColor(gcj.status),
                                                   width: '100px',
                                                   borderRadius: '8px',
                                                   fontWeight: 700
                                               }}
                                            >
                                                {gcj.status}
                                            </p>
                                        </td>
                                        <td>{gcj.date}</td>
                                        <td>{gcj.bintype}</td>
                                        <td>0/2</td>
                                    </tr>
                                })
                            }

                            <Modal show={show} onHide={handleClose}>
                                <Modal.Header style={{border: 'none'}}>
                                    <Row>
                                        <Col style={{marginLeft: 430}}>
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

                    <Row className='bottom-0 mb-5 w-75 d-flex pe-0 position-absolute align-items-end'
                         style={{bottom: "50px"}}>
                        <Col className='' lg={2}>
                            <Row style={{
                                width: 110, textAlign: 'center', backgroundColor: '#228693',
                                borderRadius: 8, boxShadow: `0px 4px 8px #BFDDDE`
                            }}>
                                <Col style={{
                                    textAlign: 'center', color: '#fff', paddingTop: 10,
                                    paddingBottom: 10, cursor: 'pointer'
                                }} onClick={handleassingShow}>
                                    <Image src={create} width='20%'/>
                                    Assign
                                </Col>
                            </Row>
                        </Col>
                        <Col className='d-flex justify-content-end pe-2 pagination-group' lg={10}>
                            <FiArrowLeft color='#228693' size='23px' id='prev'/>
                            <label className={'single-page-number mx-1 active-page-number px-2'}> 1 </label>
                            <label className={'single-page-number mx-1 px-2'}> 2 </label>
                            <label className={'single-page-number mx-1 px-2'}> 3 </label>
                            <FiArrowRight color='#228693' size='23px' id='next'/>
                        </Col>
                    </Row>
                    {/*<Row>*/}
                    {/*    <Col xs={9}>*/}

                    {/*        */}
                    {/*    </Col>*/}
                    {/*    <Col style={{paddingTop:5}}>*/}
                    {/*        <Row>*/}
                    {/*            <Col style={{textAlign:'right', cursor:'pointer'}}>*/}
                    {/*                <Image width='50%' src={leftarrow}/>*/}
                    {/*            </Col>*/}
                    {/*            <Col xs={7}>*/}
                    {/*                <Row>*/}
                    {/*                    <Col style={{border:'1px solid #BFDDDE', marginTop:2, marginBottom:2,*/}
                    {/*                         marginLeft:5, marginRight:5, textAlign:'center',*/}
                    {/*                         borderRadius: 10, cursor:'pointer'}}>*/}
                    {/*                        1*/}
                    {/*                    </Col>*/}
                    {/*                    <Col style={{marginTop:2, marginBottom:2, marginLeft:5, marginRight:5,*/}
                    {/*                         textAlign: 'center', cursor:'pointer'}}>*/}
                    {/*                        2*/}
                    {/*                    </Col>*/}
                    {/*                    <Col style={{marginTop:2, marginBottom:2, marginLeft:5, marginRight:5,*/}
                    {/*                         textAlign:'center', cursor:'pointer'}}>*/}
                    {/*                        3*/}
                    {/*                    </Col>*/}
                    {/*                </Row>*/}
                    {/*            </Col>*/}
                    {/*            <Col style={{textAlign:'left' , cursor:'pointer'}}>*/}
                    {/*                <Image width='50%' src={rightarrow}/>*/}
                    {/*            </Col>*/}
                    {/*        </Row>*/}
                    {/*    </Col>*/}
                    {/*</Row>*/}
                    <Modal show={showassign} onHide={handleassignClose}>
                        <Modal.Header style={{border: 'none'}}>
                            <Row>
                                <Col style={{marginLeft: 430}}>
                                    <Image src={close} onClick={handleassignClose} width="50%"
                                           style={{cursor: "pointer"}}/>
                                </Col>
                            </Row>
                        </Modal.Header>
                        <Modal.Body>
                            <AssignRideModal hide={handleassignClose}/>
                        </Modal.Body>
                    </Modal>
                </Col>
            </Row>
        </Container>
    );
}

export default RidesTable;

