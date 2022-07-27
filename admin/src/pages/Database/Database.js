import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Outlet} from 'react-router-dom';

import Footer from "../../common/Footer";
import {Route, Routes} from "react-router";
import GarbageHubs from "./GarbageHubs/GarbageHubs";
import TruckDrivers from "./TruckDrivers/TruckDrivers";
import GarbageTrucks from "./GarbageTrucks/GarbageTrucks";
import MaintenanceJobs from "../MaintenanceJobs/MaintenanceJobs";
import Houses from "./Houses/Houses";
import NFCTags from "./NFCTags/NFCTags";
import Header from "../../common/Header";
import SideNav from "../../common/SideNav";

const Database = () => {
    return (
        <Container className='mx-0 px-0 h-100 overflow-hidden' fluid>
            <Header/>
            <Row className='mx-0 mt-72 container-section'>
                <SideNav/>
                <Outlet/>
            </Row>
        </Container>
    );
}

export default Database;
