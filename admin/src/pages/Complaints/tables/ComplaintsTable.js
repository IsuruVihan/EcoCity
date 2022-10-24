import React, {useEffect, useState} from 'react';
import {Col, Container, Image, Modal, Row, Table, Button} from "react-bootstrap";

import ViewComplaintModal from "../modals/ViewComplaintModal";

import leftarrow from "../../../assets/images/icons/leftarrow.png";
import rightarrow from "../../../assets/images/icons/rightarrow.png";
import close from "../../../assets/images/icons/close.png";
import RemarksForm from "../forms/RemarksForm";
import {FiArrowLeft, FiArrowRight, FiEdit} from "react-icons/fi";
import {useDispatch, useSelector} from "react-redux";
import {fetchAll} from "../../../redux/reducers/complaintsSlice";

const ComplaintsTable = () => {
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const teampArray = Array.from(Array(10).keys());
    const allComplaints = useSelector((state) => state.complaint.complaints);
    const isLoading = useSelector((state) => state.complaint.isLoading);
    const [complaintCount, setComplaintCount] = useState(0);
    const [selectedcomplaintId, setSelectedcomplaintId] = useState(0);
    const [selectedcomplaint, setSelectedcomplaint] = useState(null);
    //onload
    // const filteredComplaints = allComplaints.slice()
    //handle show complaint
    const handleShow = (id) => {
        setSelectedcomplaintId(id);
        setShow(true);
    }

    useEffect(() => {
        if (!allComplaints) return;
        const selected = allComplaints.filter((c) => c.id === selectedcomplaintId);
        setSelectedcomplaint(selected[0]);
    }, [selectedcomplaintId])

    useEffect(() => {
        if (!allComplaints) return;
        if (!isLoading) {
            setComplaintCount(allComplaints.length);
        }
    }, [isLoading])

    const complaintsPerPage = 10;
    const pageCount = Math.ceil(complaintCount / complaintsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(complaintsPerPage);
    const [filteredComplaints, setFilteredComplaints] = useState(allComplaints ? allComplaints.slice(0, complaintsPerPage) : null);

    useEffect(() => {
        allComplaints && allComplaints.slice(startIndex, complaintsPerPage)
    }, [startIndex])

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
                        filteredComplaints !== null && filteredComplaints.map((complaint, idx) => {
                            // const date = new Date(complaint.updatedAt);
                            return <tr style={{borderBottom: '1px solid #BFDDDE', cursor: 'pointer'}}
                                       onClick={() => {
                                           handleShow(complaint.id);
                                       }}>
                                <th scope="row">{idx + 1}</th>
                                <td>{complaint.id}</td>
                                <td>{complaint.House.firstname + ' ' + complaint.House.lastname}</td>
                                <td>{complaint.category}</td>
                                <td>{complaint.hubornfcid == null ? 'N/A' : complaint.hubornfcid}</td>
                                <td>{complaint.updatedAt}</td>
                            </tr>
                        })
                    }
                    </tbody>
                </Table>

                <Modal show={show && selectedcomplaint != null} onHide={handleClose}>
                    <Modal.Header style={{border: 'none'}}>
                        <Row>
                            <Col style={{marginLeft: 430}}>
                                <Image src={close} onClick={handleClose} width="70%"/>
                            </Col>
                        </Row>
                    </Modal.Header>
                    <Modal.Body>
                        <ViewComplaintModal complaint={selectedcomplaint}/>
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
