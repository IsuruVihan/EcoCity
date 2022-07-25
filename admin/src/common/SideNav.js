import React, {useEffect, useState} from 'react';
import {Col, Image} from "react-bootstrap";
import '../assets/styles/common/SideNav.css';
import {Link, useLocation} from "react-router-dom";
import dashboardIcon from '../assets/images/icons/NavBar/selectedDashboard.png';
import databaseIcon from '../assets/images/icons/NavBar/selectedDatabase.png';
import areaMapIcon from '../assets/images/icons/NavBar/selectedAreaMap.png';
import complaintsIcon from '../assets/images/icons/NavBar/selectedComplaints.png';
import maintenanceIcon from '../assets/images/icons/NavBar/selectedMaintanance.png';
import truckIcon from '../assets/images/icons/NavBar/selectedTruck.png';

import unselectedDashboardIcon from '../assets/images/icons/NavBar/unselectedDashboard.png';
import unselectedDatabaseIcon from '../assets/images/icons/NavBar/unselectedDatabse.png';
import unselectedAreaMapIcon from '../assets/images/icons/NavBar/unSelectedAreaMap.png';
import unselectedComplaintsIcon from '../assets/images/icons/NavBar/unselectedComplaints.png';
import unselectedMaintenanceIcon from '../assets/images/icons/NavBar/unselectedMaintenance.png';
import unselectedTruckIcon from '../assets/images/icons/NavBar/unselectedTruck.png';
import {useEffectOnce} from "../helpers/hooks";


const SideNav = () => {

    const location = useLocation();
    const [url, setUrl] = useState('');
    const [showSubNav, setShowSubNav] = useState(false);

    //update the url when the location changes
    useEffect(() => {
        const newURL = location.pathname;
        setUrl(newURL);
    }, [location]);

    useEffect(() => {
        if (url === '') {
            return;
        }

        if (url.includes('/database/')) {
            setShowSubNav(true);
            console.log('true');
        } else {
            console.log('false');
            setShowSubNav(false);
        }
    }, [url]);

    // Add the css class on selection of submenu
    useEffect(() => {
        if (showSubNav) {
            let lists = document.getElementById('subNav').querySelectorAll('li');
            for (let li of lists) {
                li.classList.add('active-left-line');
                if (li.classList.contains('active-sub-item')) {
                    break;
                }
            }
        }
    }, [showSubNav]);


    const handleOnDBClicked = () => {
        const newState = !showSubNav;
        setShowSubNav(newState);
    }


    return (
        <Col className='side-navigation shadow-effect p-3' lg={2}>
            <ul className='list-unstyled h-100 d-grid justify-content-evenly align-content-around '>
                <Link to='/dashboard'>
                    <li className={url === '/dashboard' ? 'active-item' : 'inactive-item'}>
                        <Image src={url === '/dashboard' ? dashboardIcon : unselectedDashboardIcon} fluid/>
                        Dashboard
                    </li>
                </Link>

                <Link to='/database/garbage-hubs'>
                    <li className={url.includes('/database') ? 'active-item' : 'inactive-item'}
                        onClick={handleOnDBClicked}>
                        <Image src={url.includes('/database') ? databaseIcon : unselectedDatabaseIcon} fluid/>
                        Database
                    </li>
                </Link>

                {
                    showSubNav &&
                    <ul className={'list-unstyled sub-navigation    pt-4 pb-4 ms-2'}
                        id='subNav'>
                        <li className={url === '/database/garbage-hubs' ? 'active-sub-item' : 'inactive-sub-item'}>
                            <label/>
                            <hr/>
                            <Link to='/database/garbage-hubs'> Garbage hubs</Link>
                        </li>
                        <li className={url === '/database/truck-drivers' ? 'active-sub-item' : 'inactive-sub-item'}>
                            <label/>
                            <hr/>
                            <Link to='/database/truck-drivers'>Truck Drivers</Link>
                        </li>
                        <li className={url === '/database/garbage-trucks' ? 'active-sub-item' : 'inactive-sub-item'}>
                            <label/>
                            <hr/>
                            <Link to='/database/garbage-trucks'> Garbage Trucks</Link>
                        </li>
                        <li className={url === '/database/maintenance' ? 'active-sub-item' : 'inactive-sub-item'}>
                            <label/>
                            <hr/>
                            <Link to='/database/maintenance'>Maintenance</Link>
                        </li>
                        <li className={url === '/database/house' ? 'active-sub-item' : 'inactive-sub-item'}>
                            <label/>
                            <hr/>
                            <Link to='/database/house'>Houses</Link>
                        </li>
                        <li className={url === '/database/nfc-tags' ? 'active-sub-item' : 'inactive-sub-item'}>
                            <label/>
                            <hr/>
                            <Link to='/database/nfc-tags'>NFC Tags</Link>
                        </li>
                    </ul>
                }


                <Link to='/area-map'>
                    <li className={url === '/area-map' ? 'active-item' : 'inactive-item'}>
                        <Image src={url === '/area-map' ? areaMapIcon : unselectedAreaMapIcon} fluid/>
                        Area Map
                    </li>
                </Link>

                <Link to='/complaints'>
                    <li className={url === '/complaints' ? 'active-item' : 'inactive-item'}>
                        <Image src={url === '/complaints' ? complaintsIcon : unselectedComplaintsIcon} fluid/>
                        Complaints
                    </li>
                </Link>

                <Link to='/maintenance'>
                    <li className={url === '/maintenance' ? 'active-item' : 'inactive-item'}>
                        <Image src={url === '/maintenance' ? maintenanceIcon : unselectedMaintenanceIcon} fluid/>
                        Maintenance
                    </li>
                </Link>

                <Link to='/garbage-collection'>
                    <li className={url === '/garbage-collection' ? 'active-item' : 'inactive-item'}>
                        <Image src={url === '/garbage-collection' ? truckIcon : unselectedTruckIcon} fluid/>
                        Garbage Collection
                    </li>
                </Link>
            </ul>
        </Col>
    );
}

export default SideNav;
