import React, {Fragment, useEffect, useState} from 'react';
import {Container, Row, Table} from "react-bootstrap";

import GarbageHubDetailsModal from "../modals/GarbageHubDetailsModal";
import UpdateGarbageHubModal from "../modals/UpdateGarbageHubModal";
import GarbageHubsTableItem from "./GarbageHubsTableItem";
import {FiEdit} from "react-icons/fi";

//Temporary json file to render hub details
import hubsDetails from '../../../../data/HubDetails.json';

const GarbageHubsTable = () => {
    const hubs = hubsDetails.hubs;
    console.log(hubs);
    const hubCount = hubs.length;
    const hubsPerPage = 3;
    const pageCount = Math.ceil(hubCount / hubsPerPage);
    const [currentPage, setCurrentPage] = useState(2);
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

    useEffect(() => {
        calculateStartIndex();
    }, [currentPage]);

    useEffect(() => {
        calculateEndIndex();
    }, [startIndex])

    useEffect(() => {
        if (startIndex > endIndex) {
            return;
        }
        setFilteredHubs(hubs.slice(startIndex, endIndex));
    }, [endIndex]);

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
        </Row>
    );
}

export default GarbageHubsTable;
