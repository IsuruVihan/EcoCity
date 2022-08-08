import React from 'react';
import {Col, Form, FormCheck, FormControl, FormLabel, Row} from "react-bootstrap";
import {FiFilter} from "react-icons/fi";
import Select from "react-select";

const GarbageHubsTableFilter = () => {

    const handleOnFilterButtonClicked = () => {
        console.log('filterrrr');
    }

    const binTypeOptions = [
        {value: 'chocolate', label: 'Chocolate'},
        {value: 'strawberry', label: 'Strawberry'},
        {value: 'vanilla', label: 'Vanilla'}
    ]

    return (
        <div className='position-absolute garbage-hubs-table-filter-wrapper me-3'>
            <Row className='mx-0 filter-inputs my-2'>
                <Col lg={12} className='d-flex align-items-center'>
                    <label className='me-1'>Hub ID</label>
                    <input type='text'/>
                </Col>
                <Col lg={12} className='d-flex align-items-center'>
                    <label className='me-1'>Bin Type</label>
                    <Select/>
                </Col>
            </Row>
            <Row className='mx-0 filters-section mt-2 mb-2'>
                <Form className='ms-2 w-auto'>
                    <FormCheck id='all' label='All'/>
                    <FormCheck id='active' label='Active' style={{color: '#00C186'}}/>
                    <FormCheck id='underMaintenance' label='Under Maintenance' style={{color: '#FF9900'}}/>
                    <FormCheck id='unavailable' label='Unavailable' style={{color: '#A3A3A3'}}/>
                    <FormCheck id='removed' label='Removed' style={{color: '#E73838'}}/>
                </Form>
            </Row>
            <Row className='mx-0 my-3 d-flex justify-content-center'>
                <div className='hr'/>
            </Row>

            <Row className='mx-0 d-flex justify-content-end px-1 mb-2'>
                <div className='d-flex align-items-center justify-content-center filter-button px-2'>
                    <label>
                        <FiFilter color='white' size='16px'/>
                    </label>
                    <label className='ms-1'>Filter</label>
                    <div className='filter-button-mask position-absolute' onClick={handleOnFilterButtonClicked}/>
                </div>
            </Row>
        </div>
    );
}

export default GarbageHubsTableFilter;
