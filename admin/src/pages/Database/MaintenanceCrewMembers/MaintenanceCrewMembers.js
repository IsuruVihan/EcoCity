import React, {useState} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";

import SideNav from "../../../common/SideNav";
import MaintenanceCrewMap from "./maps/MaintenanceCrewMap";
import MaintenanceCrewTable from "./tables/MaintenanceCrewTable";
import MaintenanceCrewTableFilter from "./filters/MaintenanceCrewTableFilter";
import MaintenanceCrewMemberViewModal from "./modals/MaintenanceCrewMemberViewModal";
import CreateMaintenanceCrewMemberModal from "./modals/CreateMaintenanceCrewMemberModal";
import UpdateMaintenanceCrewMemberModal from "./modals/UpdateMaintenanceCrewMemberModal";
import Header from "../../../common/Header";

import {FiFilter} from "react-icons/fi";
import TrucksTableFilter from "../GarbageTrucks/filters/TrucksTableFilter";
import TrucksTable from "../GarbageTrucks/tables/TrucksTable";
import CreateTruckModal from "../GarbageTrucks/modals/CreateTruckModal";
import mapImage from "../../../assets/images/temp/databaseMaps.png";
import JobsTable from "../../MaintenanceJobs/tables/JobsTable";

const MaintenanceCrewMembers = () => {
    const [isTableFilterVisible, setIsTableFilterVisible] = useState(false);

    const handleOnFilterButtonClicked = () => {
        const newState = !isTableFilterVisible;
        setIsTableFilterVisible(newState);
    }

    const [showCreateCrewMemberForm, setShowCreateCrewMemberForm] = useState(false);

    const handleClose = () => setShowCreateCrewMemberForm(false);
    const handleShow = () => setShowCreateCrewMemberForm(true);
    return (
        <Col className='' lg={10}>
            <Row className='mx-0 section-header '>Maintenance Crew</Row>
            <Row className='mx-0 section-contents d-flex px-0 justify-content-evenly'>
                <Col lg={8} className='column-left box-shadow me-3'>
                    <div className='mt-2 d-flex justify-content-end'>
                        <span className='filter-box px-2 me-3' onClick={handleOnFilterButtonClicked}>
                            Filter
                            <FiFilter color='#228693' size='20px'/>
                        </span>
                        {isTableFilterVisible && <MaintenanceCrewTableFilter/>}
                    </div>
                    <MaintenanceCrewTable onCreateClicked={setShowCreateCrewMemberForm}/>
                    <CreateMaintenanceCrewMemberModal onHide={handleClose} show={showCreateCrewMemberForm}/>
                </Col>
                <Col lg={4} className='box-shadow px-0'>
                    <Image src={mapImage} fluid/>
                </Col>
            </Row>
        </Col>
    );
}

export default MaintenanceCrewMembers;
