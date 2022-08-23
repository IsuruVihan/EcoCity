import React, {useState} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";

import SideNav from "../../../common/SideNav";
import HousesMap from "./maps/HousesMap";
import HousesTableFilter from "./filters/HousesTableFilter";
import HousesTable from "./tables/HousesTable";
import ViewHouseModal from "./modals/ViewHouseModal";
import CreateHouseModal from "./modals/CreateHouseModal";
import UpdateHouseModal from "./modals/UpdateHouseModal";
import Header from "../../../common/Header";
import {FiFilter} from "react-icons/fi";
import MaintenanceCrewTableFilter from "../MaintenanceCrewMembers/filters/MaintenanceCrewTableFilter";
import MaintenanceCrewTable from "../MaintenanceCrewMembers/tables/MaintenanceCrewTable";
import CreateMaintenanceCrewMemberModal from "../MaintenanceCrewMembers/modals/CreateMaintenanceCrewMemberModal";
import mapImage from "../../../assets/images/temp/databaseMaps.png";

const Houses = () => {
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
            <Row className='mx-0 section-header '>Houses</Row>
            <Row className='mx-0 section-contents d-flex px-0 justify-content-evenly'>
                <Col lg={8} className='column-left box-shadow me-3'>
                    <div className='mt-2 d-flex justify-content-end'>
                        <span className='filter-box px-2 me-3' onClick={handleOnFilterButtonClicked}>
                            Filter
                            <FiFilter color='#228693' size='20px'/>
                        </span>
                        {isTableFilterVisible && <HousesTableFilter/>}
                    </div>
                    <HousesTable onCreateClicked={setShowCreateCrewMemberForm}/>
                    <CreateMaintenanceCrewMemberModal onHide={handleClose} show={showCreateCrewMemberForm}/>
                </Col>
                <Col lg={4} className='box-shadow px-0'>
                    <Image src={mapImage} fluid/>
                </Col>
            </Row>
        </Col>
    );
}

export default Houses;
