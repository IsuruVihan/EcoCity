import React, {useState} from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";

import SideNav from "../../../common/SideNav";
import NFCTagsTableFilter from "./filters/NFCTagsTableFilter";
import NFCTagsTable from "./tables/NFCTagsTable";
import NFCTagViewModal from "./modals/NFCTagViewModal";
import CreateNFCTagModal from "./modals/CreateNFCTagModal";
import UpdateNFCTagModal from "./modals/UpdateNFCTagModal";
import Header from "../../../common/Header";
import {FiFilter} from "react-icons/fi";
import HousesTableFilter from "../Houses/filters/HousesTableFilter";
import HousesTable from "../Houses/tables/HousesTable";
import CreateHouseModal from "../Houses/modals/CreateHouseModal";
import mapImage from "../../../assets/images/temp/databaseMaps.png";

const NFCTags = () => {
    const [isTableFilterVisible, setIsTableFilterVisible] = useState(false);

    const handleOnFilterButtonClicked = () => {
        const newState = !isTableFilterVisible;
        setIsTableFilterVisible(newState);
    }

    const [showCreateTagForm, setShowCreateTagForm] = useState(false);

    const handleClose = () => setShowCreateTagForm(false);
    const handleShow = () => setShowCreateTagForm(true);
    return (
        <Col className='' lg={10}>
            <Row className='mx-0 section-header '>NFC Tags</Row>
            <Row className='mx-0 section-contents px-0'>
                <Col lg={12} className='box-shadow me-3 px-5'>
                    <div className='mt-2 d-flex justify-content-end'>
                        <span className='filter-box px-2 me-3' onClick={handleOnFilterButtonClicked}>
                            Filter
                            <FiFilter color='#228693' size='20px'/>
                        </span>
                        {isTableFilterVisible && <NFCTagsTableFilter/>}
                    </div>
                    <NFCTagsTable onCreateClicked={setShowCreateTagForm}/>
                    <CreateNFCTagModal onHide={handleClose} show={showCreateTagForm}/>
                </Col>
            </Row>
        </Col>
    );
}

export default NFCTags;
