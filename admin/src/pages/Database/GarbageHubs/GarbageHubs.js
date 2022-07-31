import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import '../../../assets/styles/Database/database.css';

import SideNav from "../../../common/SideNav";
import GarbageHubsTable from "./tables/GarbageHubsTable";
import GarbageHubsTableFilter from "./filters/GarbageHubsTableFilter";
import GarbageHubsMap from "./maps/GarbageHubsMap";
import CreateGarbageHubModal from "./modals/CreateGarbageHubModal";
import GarbageHubDetailsModal from "./modals/GarbageHubDetailsModal";
import UpdateGarbageHubModal from "./modals/UpdateGarbageHubModal";
import Header from "../../../common/Header";

const GarbageHubs = () => {
    return (
        <Col className='' lg={10}>
            <Row className='mx-0 section-header '>Garbage Hubs</Row>
            <Row className='mx-0 section-contents d-flex px-0 justify-content-evenly'>
                <Col lg={8} className='column-left me-3 border-red'>Details</Col>
                <Col lg={4} className='border-red'>Map</Col>
            </Row>
        </Col>

    );
}

export default GarbageHubs;
