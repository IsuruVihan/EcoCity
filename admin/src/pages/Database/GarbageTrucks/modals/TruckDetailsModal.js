import React, {Fragment} from 'react';
import {Col, Container, FormControl, Modal, Row, Table} from "react-bootstrap";

import CollectionRidesTable from "../tables/CollectionRidesTable";
import CollectionRidesTableFilter from "../filters/CollectionRidesTableFilter";
import JobsPieGraph from "../graphs/JobsPieGraph";
import JobsLineGraph from "../graphs/JobsLineGraph";
import JobsGraphFilter from "../filters/JobsGraphFilter";
import JobsGraph from "../../TruckDrivers/graphs/JobsGraph";
import '../../../../assets/styles/Database/Truck Driver/truckDriver.css';
import CollectionRidesFilter from "../../TruckDrivers/filters/CollectionRidesFilter";

const TruckDetailsModal = (props) => {
    const truck = props.truck;
    const collectionArr = Array.from(Array(7).keys());
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="modal-60w"
        >
            <Modal.Header closeButton>
                <Modal.Title id="contained-modal-title-vcenter">
                    Truck Details
                </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Row className="mx-0 ">
                    <Col lg={6} className='px-0 '>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>Number Plate</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={truck.numberPlate}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 px-0 mt-1'>
                            <Col lg={3} className='px-0 d-flex align-items-center'>
                                <div>State</div>
                            </Col>
                            <Col lg={9} className='px-0'>
                                <FormControl type={'text'} disabled value={truck.status}
                                             style={{backgroundColor: "white", color: "#a3a3a3"}}/>
                            </Col>
                        </Row>
                        <Row className='mx-0 mt-3'>
                            <Col className='px-0 fw-bold' lg={10}>Collection Rides</Col>
                            <Col className='px-0' lg={2}><CollectionRidesFilter/></Col>
                            <Table borderless>
                                <thead>
                                <tr>
                                    <td>#</td>
                                    <td>Job ID</td>
                                    <td>Date</td>
                                    <td>Status</td>
                                    <td>View</td>
                                </tr>
                                </thead>
                                <tbody>
                                <Fragment>

                                    {
                                        collectionArr.map((item, idx) => {
                                            return <tr>
                                                <td>{idx + 1}</td>
                                                <td>J-001</td>
                                                <td>22/08/2022</td>
                                                <td>
                                                    <div className='status status-active py-1 '>Ongoing</div>
                                                </td>
                                                <td>
                                                    <div className='status view py-1 px-3 c-pointer'>View</div>
                                                </td>
                                            </tr>
                                        })
                                    }
                                </Fragment>


                                </tbody>
                            </Table>
                        </Row>
                    </Col>
                    <Col lg={6} className=''>
                        <Row className='mx-0'>
                            <Col className='px-0 fw-bold' lg={10}>Job Details</Col>
                            <Col className='px-0' lg={2}><JobsGraphFilter/></Col>
                        </Row>
                        <Row className='mx-0 mt-3'>
                            <Col lg={6} className='p-3'>
                                <JobsPieGraph/>
                                <div className='position-absolute ms-5  fw-bolder'
                                     style={{color: "#042434", top: "22%", right: "31%", fontSize: "65px"}}>
                                    <label className='ms-4 mb-5'>76</label><label className='fs-5'>%</label>
                                </div>
                            </Col>
                            <Col lg={6} className='px-0 d-flex fs-3 align-items-center'>Completed Job Percentage</Col>
                        </Row>

                        <Row className='mx-0'>
                            <div>Total number of collected jobs</div>
                            <JobsLineGraph/>
                        </Row>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default TruckDetailsModal;
