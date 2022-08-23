import React from 'react';
import {Col, Container, FormCheck, Row} from "react-bootstrap";
import {FiFilter} from "react-icons/fi";

const TrucksTableFilter = () => {
    const handleOnFilterButtonClicked = () => {
        const form = document.getElementById('garbageHubTableFilter');
        // const statusDiv = document.getElementById('binStatus');

        const filterFormData = new FormData(form);
        var object = {};
        filterFormData.forEach(function (value, key) {
            object[key] = value;
        });

        console.log(object)
    }

    return (
        <div className='position-absolute garbage-hubs-table-filter-wrapper me-3'>
            <form id='garbageHubTableFilter'>
                <Row className='mx-0 filter-inputs my-2'>
                    <Col lg={12} className='d-flex mt-2 align-items-center'>
                        <label className='me-1'>ID</label>
                        <input type='text' name='id'/>
                    </Col>
                    <Col lg={12} className='d-flex mt-2 align-items-center'>
                        <label className='me-1'>Number Plate</label>
                        <input type='text' name='id'/>
                    </Col>

                </Row>
                <Row className='mx-0 filters-section my-3'>
                    <div>Status</div>
                    <div className='ms-2 w-auto' id={'binStatus'}>
                        <FormCheck name={'binStatus'} id='all' label='All'/>
                        <FormCheck name={'binStatus'} id='available' label='Available' style={{color: '#00C186'}}/>
                        <FormCheck name={'binStatus'} id='unavailable' label='Unavailable'
                                   style={{color: '#FF9900'}}/>
                        <FormCheck name={'binStatus'} id='onARide' label='On a ride' style={{color: '#A3A3A3'}}/>
                    </div>
                </Row>
                <Row className='mx-0 my-3 d-flex justify-content-center'>
                    <div className='hr'/>
                </Row>

                <Row className='mx-0 d-flex justify-content-end px-2 mb-2'>
                    <div className='d-flex align-items-center justify-content-center filter-button px-2'>
                        <label>
                            <FiFilter color='white' size='16px'/>
                        </label>
                        <label className='ms-1'>Filter</label>
                        <div className='filter-button-mask position-absolute' onClick={handleOnFilterButtonClicked}/>
                    </div>
                </Row>
            </form>
        </div>
    );
}

export default TrucksTableFilter;
