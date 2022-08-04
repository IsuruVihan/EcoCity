import React, {Fragment} from 'react';
import {Container, Row, Table} from "react-bootstrap";

import GarbageHubDetailsModal from "../modals/GarbageHubDetailsModal";
import UpdateGarbageHubModal from "../modals/UpdateGarbageHubModal";
import GarbageHubsTableItem from "./GarbageHubsTableItem";
import {FiEdit} from "react-icons/fi";

//Temporary json file to render hub details
import hubsDetails from '../../../../data/HubDetails.json';

const GarbageHubsTable = () => {
    const hubs = hubsDetails.hubs;

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
                        hubs.map((hub, index) => {
                            return <GarbageHubsTableItem key={index} hub={hub} index={index}/>
                        })
                    }
                </Fragment>
            </Table>
        </Row>
    );
}

export default GarbageHubsTable;
