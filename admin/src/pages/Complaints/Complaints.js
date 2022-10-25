import React, {useEffect, useState} from 'react';
import {Col, Container, Image, Row, Collapse, Button} from "react-bootstrap";

import SideNav from "../../common/SideNav";
import ComplaintsTableFilter from "./filters/ComplaintsTableFilter";
import ComplaintsdTable from "./tables/ComplaintsTable";
import ViewComplaintModal from "./modals/ViewComplaintModal";
import Header from "../../common/Header";

import filtericon from "../../assets/images/icons/filter.png";
import ComplaintsTable from "./tables/ComplaintsTable";
import {FiFilter} from "react-icons/fi";
import GarbageHubsTableFilter from "../Database/GarbageHubs/filters/GarbageHubsTableFilter";
import {useDispatch} from "react-redux";
import {fetchAll, test} from "../../redux/reducers/complaintsSlice";


const Complaints = () => {
    const [open, setOpen] = useState(false);
    const dispatch = useDispatch();

    useEffect(() => {
        console.log('disptahcing')
        dispatch(fetchAll());
    }, []);

    return (
        <Col lg={10}>
            <Row className="px-3 pb-3 pt-2 d-flex align-items-center">
                <Col className=" p-0 m-0"
                     style={{textAlign: 'left', fontSize: 30, fontWeight: '800', color: '#042434',}}>
                    Complaints
                </Col>
            </Row>
            <Row>
                <Col style={{border: "1px solid #BFDDDE", borderRadius: 10, height: "555px"}} className="m-2">
                    <Row className="d-flex">
                        <Col>
                            <div className='mt-2 d-flex justify-content-end'>
                        <span className='filter-box px-2 me-2' onClick={() => {
                            setOpen(!open)
                        }}>
                            Filter
                            <FiFilter color='#228693' size='20px'/>
                        </span>
                            </div>
                        </Col>
                    </Row>
                    <Row style={{position: 'absolute', right: 25, paddingTop: 8}}>
                        <Collapse in={open}>
                            <Container id="example-collapse-text">
                                <ComplaintsTableFilter/>
                            </Container>
                        </Collapse>
                    </Row>
                    <Row>
                        <Col className="m-4">
                            <ComplaintsTable/>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>


    );
}

export default Complaints;
