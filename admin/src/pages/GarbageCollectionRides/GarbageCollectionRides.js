import React, {useState} from 'react';
import {Col, Container, Row, Collapse, Image} from "react-bootstrap";

import SideNav from "../../common/SideNav";
import RidesTableFilter from "./filters/RidesTableFilter";
import RidesTable from "./tables/RidesTable";
import ViewRideModal from "./modals/ViewRideModal";
import AssignRideModal from "./modals/AssignRideModal";
import Header from "../../common/Header";
import filtericon from "../../assets/images/icons/filter.png";
import {FiFilter} from "react-icons/fi";

const GarbageCollectionRides = () => {
    const [open, setOpen] = useState(false);
    return (
        <Col lg={10}>
            <Row className="p-0 m-0 mt-4 ps-3">
                <Col className=" p-0 m-0"
                     style={{textAlign: 'left', fontSize: 30, fontWeight: '900', color: '#042434',}}>
                    Garbage Collection Rides
                </Col>
            </Row>
            <Row>
                <Col style={{border: "1px solid #BFDDDE", borderRadius: 10, height: "550px"}}
                     className="m-2">
                    <Row className="d-flex">
                        <Row className="d-flex">
                            <Col>
                                <div className='mt-2 d-flex justify-content-end'>
                        <span className='filter-box px-2 me-1' onClick={() => {
                            setOpen(!open)
                        }}>
                            Filter
                            <FiFilter color='#228693' size='20px'/>
                        </span>
                                </div>
                            </Col>
                        </Row>
                    </Row>
                    <Row style={{position: 'absolute', right: 25, paddingTop: 8, zIndex: 2}}>
                        <Collapse in={open}>
                            <Container id="example-collapse-text" style={{backgroundColor: '#fff'}}>
                                <RidesTableFilter/>
                            </Container>
                        </Collapse>
                    </Row>
                    <Row>
                        <Col className="m-4">
                            <RidesTable/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    );
}

export default GarbageCollectionRides;
