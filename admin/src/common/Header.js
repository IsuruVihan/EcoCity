import React, {useEffect, useState} from 'react';
import {Col, Container, Image, Navbar, Row} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import '../assets/styles/common/Header.css';
import logo from '../assets/images/Logo1.png';
import logoutIcon from '../assets/images/icons/log-out.png';
import notificationIcon from '../assets/images/icons/notification.png';
import Notifications from "./Notifications/Notifications";

const Header = () => {
    const location = useLocation();
    const [url, setUrl] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const notificationCount = 4;
    const [isNotificationsVisible, setIsNotificationsVisible] = useState(false);

    //update the url when the location changes
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    const handleOnNotificationIconClicked = () => {
        setIsNotificationsVisible(!isNotificationsVisible);
    }

    if (isLoggedIn) {

        //Logged In header
        return (
            <Row className='py-0 mx-0 px-0 bg-transparent shadow-effect w-100 top-0 position-fixed'>
                <Navbar className='navigation-bar mx-0 fs-5 mt-0 pt-1'>
                    <Col className='ps-5' lg={2}>
                        <Navbar.Brand href="/">
                            <img
                                src={logo}
                                height="40"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                    </Col>
                    <Col lg={9} className='justify-content-end d-flex on-hover p-0 m-0'>
                        <Image src={notificationIcon} className='notification-icon'
                               onClick={handleOnNotificationIconClicked}/>
                        {notificationCount > 0 &&
                            <label className='notification-count position-absolute'>{notificationCount}</label>
                        }
                        {isNotificationsVisible && <Notifications/>}
                    </Col>
                    <Col lg={1} className='pe-2 d-flex align-items-center justify-content-evenly'>
                        <label className=' vertical-divider'/>
                        <Image src={logoutIcon} className='logout-icon me-4'/>
                    </Col>
                </Navbar>
            </Row>
        )
    }

    //Logged out header
    return (
        <Row className='bg-transparent shadow-effect top-0' fluid>
            <Row>
                <Navbar className='py-2 px-5 navigation-bar justify-content-end'>
                    <Link to='/' className={'me-3 px-4 py-2 link ' + (url === '/' ? 'active' : '')}>Home</Link>
                    <Link to='/login' className={'px-4 py-2 link ' + (url === '/login' ? 'active' : '')}>Login</Link>
                </Navbar>
            </Row>
        </Row>

    );
}

export default Header;
