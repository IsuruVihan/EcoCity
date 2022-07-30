import React from 'react';
import {Container, Row, Table} from "react-bootstrap";

import GarbageHubDetailsModal from "../modals/GarbageHubDetailsModal";
import UpdateGarbageHubModal from "../modals/UpdateGarbageHubModal";
import GarbageHubsTableItem from "./GarbageHubsTableItem";
import {FiEdit} from "react-icons/fi";

const GarbageHubsTable = () => {
    return (
        <Row className='mx-0'>
            <Table className='my-0 garbage-hubs-table' borderless>
                <thead>
                <tr className='fw-bold'>
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
                <tbody>
                <GarbageHubsTableItem/>
                <GarbageHubsTableItem/>
                <GarbageHubsTableItem/>
                </tbody>
            </Table>
        </Row>
    );
}

export default GarbageHubsTable;
