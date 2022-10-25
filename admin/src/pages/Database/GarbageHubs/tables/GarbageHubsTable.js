import React, {Fragment, useEffect, useState} from 'react';
import {Button, Col, Container, Row, Table} from "react-bootstrap";

import GarbageHubDetailsModal from "../modals/GarbageHubDetailsModal";
import UpdateGarbageHubModal from "../modals/UpdateGarbageHubModal";
import GarbageHubsTableItem from "./GarbageHubsTableItem";
import {FiArrowLeft, FiArrowRight, FiEdit} from "react-icons/fi";
import {useSelector} from "react-redux";

//Temporary json file to render hub details
// import hubsDetails from '../../../../data/HubDetails.json';

const GarbageHubsTable = (props) => {
    const dbHubs = useSelector((state) => state.database.hubs);
    const [hubsDetails, setHubsDetails] = useState(null);
    const hubs = hubsDetails ? hubsDetails.hubs : [];
    const hubCount = hubs ? hubs.length : 0;
    const hubsPerPage = 3;
    const pageCount = Math.ceil(hubCount / hubsPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(hubsPerPage);
    const [filteredHubs, setFilteredHubs] = useState(hubs ? hubs.slice(startIndex, endIndex) : []);
    const [isHubDetailsVisible, setIsHubDetailsVisible] = useState(false);
    const [currentSelectedHubID, setCurrentSelectedHubID] = useState('');
    const [currentSelectedHub, setCurrentSelectedHub] = useState(filteredHubs[0]);

    useEffect(() => {
        if (!dbHubs) return;
        setHubsDetails(dbHubs);
    }, [dbHubs])

    useEffect(() => {
        console.log(hubsDetails)
    }, [hubsDetails])

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
        // return Array.from({length}, (_, idx) => idx + start);
        return [...Array(end - start + 1).keys()].map(x => x + start);
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
        setFilteredHubs(hubs ? hubs.slice(startIndex, endIndex) : []);
    }, [endIndex]);

    const pageNumbers = range(1, pageCount).map((item) => {
        return parseInt(item, 10);
    });

    //Set new page number when clicked on pages
    const handleOnPageNumberChange = (e) => {
        const valueReceived = e.target.id;
        if (valueReceived === '') return;

        if (!isNaN(valueReceived)) {
            const newPageNumber = e.target.id;
            setCurrentPage(newPageNumber);
        } else {
            let newPageNumber = currentPage;
            switch (valueReceived) {
                case 'prev':
                    if (currentPage === 1) break;
                    newPageNumber = currentPage - 1;
                    setCurrentPage(newPageNumber);
                    break;
                case 'next':
                    if (currentPage === pageNumbers[pageCount - 1]) break;
                    newPageNumber = currentPage + 1;
                    setCurrentPage(newPageNumber);
                    break;
                default:
            }
        }

    }

    useEffect(() => {
        changeActivePageNumberClasses();
        // changeNextPrevButtonSelection();
    }, [currentPage]);

    const changeActivePageNumberClasses = () => {
        let currentPageNumberElement = document.getElementById(currentPage.toString());
        if (!currentPageNumberElement) return;
        //remove active classes
        let elements = document.getElementsByClassName('active-page-number');
        for (let i = 0; i < elements.length; i++) {
            elements[i].classList.remove('active-page-number');
        }

        //add active class to current page number
        currentPageNumberElement.classList.add('active-page-number');
    }

    // const changeNextPrevButtonSelection = () => {
    //     let next = document.getElementById('next');
    //     let prev = document.getElementById('prev');
    //
    //     if(prev.classList.contains('inactive-pagination-arrow')){
    //         prev.classList.remove('inactive-pagination-arrow');
    //     }
    //
    //     if(next.classList.contains('inactive-pagination-arrow')){
    //         next.classList.remove('inactive-pagination-arrow');
    //     }
    //
    //     if (currentPage === pageCount) {
    //         next.classList.add('inactive-pagination-arrow');
    //         console.log('added 1')
    //     }
    //     if(currentPage === 1){
    //         prev.classList.add('inactive-pagination-arrow');
    //         console.log('added 2')
    //
    //     }
    // }

    const handleOnHubClicked = (hubId) => {
        console.log(hubId)
        setCurrentSelectedHubID(hubId);
        const newState = !isHubDetailsVisible;
        setIsHubDetailsVisible(newState);
    }

    useEffect(() => {
        for (let i = 0; i < filteredHubs.length; i++) {
            if (currentSelectedHubID === filteredHubs[i].id) {
                setCurrentSelectedHub(filteredHubs[i]);
            }
        }
    }, [currentSelectedHubID])

    const handleOnHubCloseClicked = () => {
        setIsHubDetailsVisible(false);
    }
    console.log(typeof filteredHubs)
    return (
        <Row className='mx-0'>
            <GarbageHubDetailsModal show={isHubDetailsVisible} onHide={() => setIsHubDetailsVisible(false)}
                                    hub={currentSelectedHub}/>
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
                            return <GarbageHubsTableItem key={index + startIndex} hub={hub} index={index + startIndex}
                                                         onClick={handleOnHubClicked}/>
                        })
                    }
                </Fragment>

            </Table>
            <Row className='bottom-0 mb-3 w-50 d-flex pe-0 position-absolute align-items-end'>
                <Col className='' lg={2}>
                    <Button onClick={props.onCreateClicked}><FiEdit/> Create</Button>
                </Col>
                <Col className='d-flex justify-content-end pe-1 pagination-group' lg={10}>
                    <FiArrowLeft color='#228693' size='23px' id='prev' onClick={handleOnPageNumberChange}/>
                    {
                        pageNumbers.map((pageNumber, idx) => {
                            return <label
                                className={'single-page-number mx-1 px-2'}
                                id={pageNumber} key={pageNumber}
                                onClick={handleOnPageNumberChange}>
                                {pageNumber}
                            </label>;
                        })
                    }
                    <FiArrowRight color='#228693' size='23px' id='next' onClick={handleOnPageNumberChange}/>
                </Col>
            </Row>
        </Row>
    );
}

export default GarbageHubsTable;
