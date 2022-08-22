import React, {useState} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";

import SideNav from "../../../common/SideNav";
import TrucksMap from "./maps/TrucksMap";
import TrucksTable from "./tables/TrucksTable";
import TrucksTableFilter from "./filters/TrucksTableFilter";
import TruckDetailsModal from "./modals/TruckDetailsModal";
import CreateTruckModal from "./modals/CreateTruckModal";
import UpdateTruckModal from "./modals/UpdateTruckModal";
import Header from "../../../common/Header";
import {FiFilter} from "react-icons/fi";
import GarbageHubsTableFilter from "../GarbageHubs/filters/GarbageHubsTableFilter";
import TruckDriversTable from "../TruckDrivers/tables/TruckDriversTable";
import CreateTruckDriverModal from "../TruckDrivers/modals/CreateTruckDriverModal";
import mapImage from "../../../assets/images/temp/databaseMaps.png";

const GarbageTrucks = () => {
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
            <Row className='mx-0 section-header '>Garbage Trucks</Row>
            <Row className='mx-0 section-contents d-flex px-0 justify-content-evenly'>
                <Col lg={8} className='column-left box-shadow me-3'>
                    <div className='mt-2 d-flex justify-content-end'>
                        <span className='filter-box px-2 me-3' onClick={handleOnFilterButtonClicked}>
                            Filter
                            <FiFilter color='#228693' size='20px'/>
                        </span>
                        {isTableFilterVisible && <GarbageHubsTableFilter/>}
                    </div>
                    <TrucksTable onCreateClicked={setShowCreateHubForm}/>
                    <CreateTruckDriverModal onHide={handleClose} show={showCreateHubForm}/>
                </Col>
                <Col lg={4} className='box-shadow px-0'>
                    <Image src={mapImage} fluid/>
                </Col>
            </Row>
        </Col>
    );
}

export default GarbageTrucks;
