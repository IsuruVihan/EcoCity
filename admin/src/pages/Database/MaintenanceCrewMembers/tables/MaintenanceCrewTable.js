import React, {Fragment, useEffect, useState} from 'react';
import {Button, Col, Container, Row, Table} from "react-bootstrap";
import memberDetails from "../../../../data/CrewMembers.json";
import TruckDetailsModal from "../../GarbageTrucks/modals/TruckDetailsModal";
import TrucksTableItem from "../../GarbageTrucks/tables/TrucksTableItem";
import {FiArrowLeft, FiArrowRight, FiEdit} from "react-icons/fi";
import MaintennaceCrewTableItem from "./MaintennaceCrewTableItem";
import MaintenanceCrewMemberViewModal from "../modals/MaintenanceCrewMemberViewModal";

const MaintenanceCrewTable = (props) => {
    const trucks = memberDetails.crew;
    const truckCount = trucks.length;
    const trucksPerPage = 9;
    const pageCount = Math.ceil(truckCount / trucksPerPage);
    const [currentPage, setCurrentPage] = useState(1);
    const [startIndex, setStartIndex] = useState(0);
    const [endIndex, setEndIndex] = useState(trucksPerPage);
    const [filteredMembers, setFilteredMembers] = useState(trucks.slice(startIndex, endIndex));
    const [isMemberDetailsVisible, setIsMemberkDetailsVisible] = useState(false);
    const [currentSelectedMemberID, setCurrentSelectedMemberID] = useState('');
    const [currentSelectedMember, setCurrentSelectedMember] = useState(filteredMembers[0]);

    const calculateStartIndex = () => {
        setStartIndex((currentPage - 1) * trucksPerPage);
    }
    const calculateEndIndex = () => {
        if ((startIndex + trucksPerPage) > trucksPerPage) {
            setEndIndex(truckCount);
        } else {
            setEndIndex(startIndex + trucksPerPage);
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
        setFilteredMembers(trucks.slice(startIndex, endIndex));
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

    const handleOnMemberClicked = (hubId) => {
        setCurrentSelectedMemberID(hubId);
        const newState = !isMemberDetailsVisible;
        setIsMemberkDetailsVisible(newState);
    }

    useEffect(() => {
        for (let i = 0; i < filteredMembers.length; i++) {
            if (currentSelectedMemberID === filteredMembers[i].id) {
                setCurrentSelectedMember(filteredMembers[i]);
            }
        }
    }, [currentSelectedMemberID])

    const handleOnHubCloseClicked = () => {
        setIsMemberkDetailsVisible(false);
    }

    return (
        <Row className='mx-0'>
            <MaintenanceCrewMemberViewModal show={isMemberDetailsVisible}
                                            onHide={() => setIsMemberkDetailsVisible(false)}
                                            truck={currentSelectedMember}/>
            <Table className='my-0 garbage-hubs-table' borderless>
                <thead>
                <tr className='table-header'>
                    <td>#</td>
                    <td>ID</td>
                    <td>Name</td>
                    <td>NIC</td>
                    <td>Email</td>
                    <td>Jobs</td>
                    <td>Status</td>
                    <td>Action</td>
                </tr>
                </thead>
                <Fragment>

                {
                        filteredMembers.map((member, index) => {
                            return <MaintennaceCrewTableItem member={member} index={index}
                                                             onClick={handleOnMemberClicked}/>
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

export default MaintenanceCrewTable;
