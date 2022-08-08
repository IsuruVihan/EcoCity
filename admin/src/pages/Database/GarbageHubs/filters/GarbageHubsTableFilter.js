import React from 'react';
import {Col, Form, FormCheck, Row} from "react-bootstrap";
import {FiFilter} from "react-icons/fi";

const GarbageHubsTableFilter = () => {
    return (
        <div className=' position-absolute garbage-hubs-table-filter-wrapper h-50 me-3'>
            <Row className='mx-0'>
                <Col lg={12}>Hub ID</Col>
                <Col lg={12}>Bin Type</Col>
            </Row>
            <Row className='mx-0'>
                <Form>
                    <FormCheck label='All'/>
                    <FormCheck label='Active'/>
                    <FormCheck label='Under Maintenance'/>
                    <FormCheck label='Unavailable'/>
                    <FormCheck label='Removed'/>
                </Form>
            </Row>
            <Row className='mx-0 d-flex justify-content-end px-1'>
                <div className='d-flex align-items-center justify-content-center filter-button px-2'>
                    <label>
                        <FiFilter color='white' size='16px'/>
                    </label>
                    <label className='ms-1'>Filter</label>
                </div>
            </Row>
        </div>
    );
}

export default GarbageHubsTableFilter;
