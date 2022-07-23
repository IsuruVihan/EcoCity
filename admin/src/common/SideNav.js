import React , {useEffect, useState}  from 'react';
import {Col, Image, NavLink} from "react-bootstrap";
import '../assets/styles/common/SideNav.css';
import {Link, useLocation} from "react-router-dom";
import dashboardIcon from '../assets/images/icons/NavBar/selectedDashboard.png';
import databaseIcon from '../assets/images/icons/NavBar/selectedDatabase.png';
import areaMapIcon from '../assets/images/icons/NavBar/selectedAreaMap.png';
import complaintsIcon from '../assets/images/icons/NavBar/selectedComplaints.png';
import maintananceIcon from '../assets/images/icons/NavBar/selectedMaintanance.png';
import truckIcon from '../assets/images/icons/NavBar/selectedTruck.png';

const SideNav = () => {

    const location = useLocation();
    const [url, setUrl] = useState(null);

    //update the url when the location changes
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    return (
        <Col className='side-navigation shadow-effect p-3' lg={2}>
            <ul className='list-unstyled h-100 d-grid justify-content-evenly align-content-around '>
                <li className={url === '/dashboard' ? 'active-item' : 'inactive-item'}>
                    <Image src={dashboardIcon} fluid/>
                    <Link to='/dashboard'>Dashboard</Link>
                </li>
                <li className={url === '/database' ? 'active-item' : 'inactive-item'}>
                    <Image src={databaseIcon} fluid/>
                    <Link to='/database'>Database</Link>

                </li>
                <li className={url === '/area-map' ? 'active-item' : 'inactive-item'}>
                    <Image src={areaMapIcon} fluid/>
                    <Link to='/area-map'>Area Map</Link>

                </li>
                <li className={url === '/complaints' ? 'active-item' : 'inactive-item'}>
                    <Image src={complaintsIcon} fluid/>
                    <Link to='/complaints'>Complaints</Link>

                </li>
                <li className={url === '/maintenance' ? 'active-item' : 'inactive-item'}>
                    <Image src={maintananceIcon} fluid/>
                    <Link to='/maintenance'>Maintenance</Link>

                </li>
                <li className={url === '/garbage-collection' ? 'active-item' : 'inactive-item'}>
                    <Image src={truckIcon} fluid/>
                    <Link to='/garbage-collection'>Garbage Collection</Link>

                </li>
            </ul>
        </Col>
    );
}

export default SideNav;
