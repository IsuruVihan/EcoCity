import React, {Fragment, useEffect, useState} from 'react';
import {Button, Col, Container, Row, Table} from "react-bootstrap";

import GarbageHubDetailsModal from "../modals/GarbageHubDetailsModal";
import UpdateGarbageHubModal from "../modals/UpdateGarbageHubModal";
import GarbageHubsTableItem from "./GarbageHubsTableItem";
import {FiArrowLeft, FiArrowRight, FiEdit} from "react-icons/fi";

//Temporary json file to render hub details
import hubsDetails from '../../../../data/HubDetails.json';

const GarbageHubsTable = () => {
    const hubs = hubsDetails.hubs;
    const hubCount = hubs.length;
    const hubsPerPage = 3;
    const pageCount = Math.ceil(hubCount / hubsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(hubsPerPage);
    const [filteredHubs, setFilteredHubs] = useState(hubs.slice(startIndex, endIndex));

    const calculateStartIndex = () => {
        setStartIndex((currentPage - 1) * hubsPerPage);
    }
    const calculateEndIndex = () => {
        if ((startIndex + hubsPerPage) > hubCount) {
            setEndIndex(hubCount);
        } else {
            setEndIndex(startIndex + hubsPerPage);
        }
    }
    const range = (start, end) => {
        let length = end - start + 1;
        /*
            Create an array of certain length and set the elements within it from
          start value to end value.
        */
        return Array.from({length}, (_, idx) => idx + start);
    };

    //Update start index on page number change
    useEffect(() => {
        calculateStartIndex();
    }, [currentPage]);

    //Update end index on start index change
    useEffect(() => {
        calculateEndIndex();
    }, [startIndex])

    //update hubs array to display on end index change
    useEffect(() => {
        if (startIndex > endIndex) {
            return;
        }
        setFilteredHubs(hubs.slice(startIndex, endIndex));
    }, [endIndex]);

    const pageNumbers = range(1, pageCount);

    const handleOnPageNumberChange = (e) => {
        const newPageNumber = e.target.id;
        setCurrentPage(newPageNumber);
    }
    return (
        <Row className='mx-0'>
            <Table className='my-0 garbage-hubs-table' borderless>
                <thead>
                <tr className='table-header'>
                    <td>#</td>
                    <td>Hub ID</td>
                    <td>Type</td>
                    <td>Status</td>
                    <td>Temp</td>
                    <td>Humidity</td>
                    <td>Level</td>
                    <td>Actions</td>
                </tr>
                </thead>
                <Fragment>
                    {
                        filteredHubs.map((hub, index) => {
                            return <GarbageHubsTableItem key={index + startIndex} hub={hub} index={index + startIndex}/>
                        })
                    }
                </Fragment>

            </Table>
            <Row className='bottom-0 mb-3 w-100 d-flex align-items-end'>
                <Col className='' lg={2}>
                    <Button><FiEdit/> Create</Button>
                </Col>
                <Col className='d-flex justify-content-end pe-3' lg={10}>
                    <FiArrowLeft color='#228693' size='23px'/>
                    {
                        pageNumbers.map((pageNumber, idx) => {
                            return <label className='single-page-number mx-1 px-2' id={pageNumber} key={pageNumber}
                                          onClick={handleOnPageNumberChange}>
                                {pageNumber}
                            </label>;
                        })
                    }
                    <FiArrowRight color='#228693' size='23px'/>
                </Col>
            </Row>
        </Row>
    );
}

export default GarbageHubsTable;
