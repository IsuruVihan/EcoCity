import React, {useEffect, useState} from 'react';
import {Col, Image, Row} from "react-bootstrap";
import '../../../assets/styles/Database/database.css';
import '../../../assets/styles/Database/GarbageHubs/GarbageHubs.css';

import GarbageHubsTable from "./tables/GarbageHubsTable";
import GarbageHubsTableFilter from "./filters/GarbageHubsTableFilter";
import GarbageHubsMap from "./maps/GarbageHubsMap";
import CreateGarbageHubModal from "./modals/CreateGarbageHubModal";
import GarbageHubDetailsModal from "./modals/GarbageHubDetailsModal";
import UpdateGarbageHubModal from "./modals/UpdateGarbageHubModal";
import Header from "../../../common/Header";
import {FiFilter} from "react-icons/fi";

//Temporary imports
import mapImage from '../../../assets/images/temp/databaseMaps.png';
import {useDispatch} from "react-redux";
import {fetchHubs} from "../../../redux/reducers/databaseSlice";

const GarbageHubs = () => {

    const [isTableFilterVisible, setIsTableFilterVisible] = useState(false);

    const handleOnFilterButtonClicked = () => {
        const newState = !isTableFilterVisible;
        setIsTableFilterVisible(newState);
    }

    const [showCreateHubForm, setShowCreateHubForm] = useState(false);

    const handleClose = () => setShowCreateHubForm(false);
    const handleShow = () => setShowCreateHubForm(true);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchHubs());
    }, []);

    return (

        <Col className='' lg={10}>
            <Row className='mx-0 section-header'>Garbage Hubs</Row>
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
                <Col lg={4} className='box-shadow px-0' >
                    {/*<GarbageHubsMap style={{height: "50px"}}/>*/}
                    <Image src={mapImage} fluid/>
                </Col>
            </Row>
        </Col>

    );
}

export default GarbageHubs;
