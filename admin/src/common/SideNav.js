import React from 'react';
import {Col, Image, NavLink} from "react-bootstrap";
import '../assets/styles/common/SideNav.css';
import {Link} from "react-router-dom";
import dashboardIcon from '../assets/images/icons/NavBar/selectedDashboard.png';
import databaseIcon from '../assets/images/icons/NavBar/selectedDatabase.png';
import areaMapIcon from '../assets/images/icons/NavBar/selectedAreaMap.png';
import complaintsIcon from '../assets/images/icons/NavBar/selectedComplaints.png';
import maintananceIcon from '../assets/images/icons/NavBar/selectedMaintanance.png';
import truckIcon from '../assets/images/icons/NavBar/selectedTruck.png';

const SideNav = () => {
    return (
        <Col className='side-navigation shadow-effect p-3' lg={2}>
            <ul className='list-unstyled h-100 d-grid justify-content-evenly align-content-around '>
                <li className='active-item'>
                    <Image src={dashboardIcon} fluid/>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li className='inactive-item'>
                    <Image src={databaseIcon} fluid/>
                    <Link to='/database'>Database</Link>

                </li >
                <li className='inactive-item'>
                    <Image src={areaMapIcon} fluid/>
                    <Link to='/area-map'>Area Map</Link>

                </li>
                <li className='inactive-item'>
                    <Image src={complaintsIcon} fluid/>
                    <Link to='/complaints'>Complaints</Link>

                </li>
                <li className='inactive-item'>
                    <Image src={maintananceIcon} fluid/>
                    <Link to='/maintenance'>Maintenance</Link>

                </li>
                <li className='inactive-item'>
                    <Image src={truckIcon} fluid/>
                    <Link to='/garbage-collection'>Garbage Collection</Link>

                </li>
            </ul>
        </Col>
    );
}

export default SideNav;
