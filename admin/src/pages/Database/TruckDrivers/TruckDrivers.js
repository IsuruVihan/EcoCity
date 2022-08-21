import React, {useState} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";

import SideNav from "../../../common/SideNav";
import TruckDriversMap from "./maps/TruckDriversMap";
import TruckDriversTable from "./tables/TruckDriversTable";
import TruckDriversTableFilter from "./filters/TruckDriversTableFilter";
import CreateTruckDriverModal from "./modals/CreateTruckDriverModal";
import ViewTruckDriverModal from "./modals/ViewTruckDriverModal";
import UpdateTruckDriverModal from "./modals/UpdateTruckDriverModal";
import Header from "../../../common/Header";

import {FiFilter} from "react-icons/fi";
import GarbageHubsTable from "../GarbageHubs/tables/GarbageHubsTable";
import CreateGarbageHubModal from "../GarbageHubs/modals/CreateGarbageHubModal";
import GarbageHubsTableFilter from "../GarbageHubs/filters/GarbageHubsTableFilter";

//Temporary imports
import mapImage from '../../../assets/images/temp/databaseMaps.png';

const TruckDrivers = () => {
    const [isTableFilterVisible, setIsTableFilterVisible] = useState(false);

    const handleOnFilterButtonClicked = () => {
        const newState = !isTableFilterVisible;
        setIsTableFilterVisible(newState);
    }

    const [showCreateHubForm, setShowCreateHubForm] = useState(false);

    const handleClose = () => setShowCreateHubForm(false);
    const handleShow = () => setShowCreateHubForm(true);
    return (
        <Col className='' lg={10}>
            <Row className='mx-0 section-header '>Garbage Hubs</Row>
            <Row className='mx-0 section-contents d-flex px-0 justify-content-evenly'>
                <Col lg={8} className='column-left box-shadow me-3'>
                    <div className='mt-2 d-flex justify-content-end'>
                        <span className='filter-box px-2 me-3' onClick={handleOnFilterButtonClicked}>
                            Filter
                            <FiFilter color='#228693' size='20px'/>
                        </span>
                        {isTableFilterVisible && <GarbageHubsTableFilter/>}
                    </div>
                    <GarbageHubsTable onCreateClicked={setShowCreateHubForm}/>
                    <CreateGarbageHubModal onHide={handleClose} show={showCreateHubForm}/>
                </Col>
                <Col lg={4} className='box-shadow px-0'>
                    <Image src={mapImage} fluid/>
                </Col>
            </Row>
        </Col>
  );
}

export default TruckDrivers;
