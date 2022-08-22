import React from 'react';
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
    console.log(truck);
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            dialogClassName="modal-70w"
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
                                <tr>
                                    <td>1</td>
                                    <td>J-001</td>
                                    <td>22/08/2022</td>
                                    <td>
                                        <div className='status status-active py-1'>Ongoing</div>
                                    </td>
                                    <td>
                                        <div className='status view py-1 px-3 c-pointer'>View</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>J-001</td>
                                    <td>22/08/2022</td>
                                    <td>
                                        <div className='status status-active py-1'>Ongoing</div>
                                    </td>
                                    <td>
                                        <div className='status view py-1 px-3 c-pointer'>View</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>J-001</td>
                                    <td>22/08/2022</td>
                                    <td>
                                        <div className='status status-active py-1'>Ongoing</div>
                                    </td>
                                    <td>
                                        <div className='status view py-1 px-3 c-pointer'>View</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>J-001</td>
                                    <td>22/08/2022</td>
                                    <td>
                                        <div className='status status-active py-1'>Ongoing</div>
                                    </td>
                                    <td>
                                        <div className='status view py-1 px-3 c-pointer'>View</div>
                                    </td>
                                </tr>
                                <tr>
                                    <td>1</td>
                                    <td>J-001</td>
                                    <td>22/08/2022</td>
                                    <td>
                                        <div className='status status-active py-1 '>Ongoing</div>
                                    </td>
                                    <td>
                                        <div className='status view py-1 px-3 c-pointer'>View</div>
                                    </td>
                                </tr>

                                </tbody>
                            </Table>
                        </Row>

                    </Col>
                    {/*<Col lg={6} className=''>*/}
                    {/*    <Row className='mx-0 fs-6'>*/}
                    {/*        <div className='fs-6 px-0'>NFC Tags</div>*/}
                    {/*        <Col className='px-0'>*/}
                    {/*            <Table className='my-0 fs-6 driver-table' borderless>*/}
                    {/*                <thead>*/}
                    {/*                <tr className='table-header'>*/}
                    {/*                    <td>#</td>*/}
                    {/*                    <td>ID</td>*/}
                    {/*                    <td>Serial Number</td>*/}
                    {/*                    <td>Status</td>*/}
                    {/*                </tr>*/}
                    {/*                </thead>*/}
                    {/*                <tbody>*/}
                    {/*                <tr>*/}
                    {/*                    <td>1</td>*/}
                    {/*                    <td>001</td>*/}
                    {/*                    <td>NFC-1</td>*/}
                    {/*                    <td>*/}
                    {/*                        <div className='status status-active'>Active</div>*/}
                    {/*                    </td>*/}
                    {/*                </tr>*/}
                    {/*                <tr>*/}
                    {/*                    <td>2</td>*/}
                    {/*                    <td>002</td>*/}
                    {/*                    <td>NFC-2</td>*/}
                    {/*                    <td>*/}
                    {/*                        <div className='status status-active'>Active</div>*/}
                    {/*                    </td>*/}

                    {/*                </tr>*/}
                    {/*                </tbody>*/}
                    {/*            </Table>*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}
                    {/*    <Row className='mx-0 mt-2'>*/}
                    {/*        <div className='fs-6 px-0'>Job Details</div>*/}
                    {/*        <Table className='my-0 driver-table' borderless>*/}
                    {/*            <thead>*/}
                    {/*            <tr className='table-header'>*/}
                    {/*                <td>#</td>*/}
                    {/*                <td>ID</td>*/}
                    {/*                <td>Date</td>*/}
                    {/*                <td>Status</td>*/}
                    {/*                <td>Action</td>*/}
                    {/*            </tr>*/}
                    {/*            </thead>*/}
                    {/*            <tbody>*/}
                    {/*            <tr>*/}
                    {/*                <td>1</td>*/}
                    {/*                <td>001</td>*/}
                    {/*                <td>2022/08/24</td>*/}
                    {/*                <td>*/}
                    {/*                    <div className='status status-ongoing'>Ongoing</div>*/}
                    {/*                </td>*/}
                    {/*                <td>*/}
                    {/*                    <div className='status view'>View</div>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            <tr>*/}
                    {/*                <td>2</td>*/}
                    {/*                <td>002</td>*/}
                    {/*                <td>2022/08/25</td>*/}
                    {/*                <td>*/}
                    {/*                    <div className='status status-assigned'>Assigned</div>*/}
                    {/*                </td>*/}
                    {/*                <td>*/}
                    {/*                    <div className='status view'>View</div>*/}
                    {/*                </td>*/}
                    {/*            </tr>*/}
                    {/*            </tbody>*/}
                    {/*        </Table>*/}
                    {/*    </Row>*/}
                    {/*    <Row className='mx-0 mt-2'>*/}
                    {/*        <Col lg={10} className='h6 px-0'>Total number of collected jobs:</Col>*/}
                    {/*        <Col lg={2} className={'px-0'}><JobsGraphFilter/></Col>*/}
                    {/*        <Col lg={12} className='mb-5'>*/}
                    {/*            <JobsGraph/>*/}
                    {/*        </Col>*/}
                    {/*    </Row>*/}
                    {/*</Col>*/}
                </Row>
            </Modal.Body>
        </Modal>
    );
}

export default TruckDetailsModal;
