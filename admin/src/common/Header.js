import React, {useEffect, useState} from 'react';
import {Col, Container, Image, Navbar, Row} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import '../assets/styles/common/Header.css';
import logo from '../assets/images/Logo1.png';
import logoutIcon from '../assets/images/icons/log-out.png';
import notificationIcon from '../assets/images/icons/notification.png';

const Header = () => {
    const location = useLocation();
    const [url, setUrl] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
    const notificationCount = 4;

    //update the url when the location changes
    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    if (isLoggedIn) {

        //Logged In header
        return (
            <Container className='py-2 mx-0 bg-transparent position-absolute top-0' fluid>
                <Navbar className='navigation-bar mx-3 fs-5 mt-0 pt-1'>
                    <Col lg={2}>
                        <Navbar.Brand href="#home">
                            <img
                                src={logo}
                                height="110"
                                className="d-inline-block align-top"
                                alt="React Bootstrap logo"
                            />
                        </Navbar.Brand>
                    </Col>
                    <Col lg={7} className='justify-content-end d-flex on-hover'>
                        <Image src={notificationIcon} className='notification-icon' fluid/>
                        {notificationCount > 0 &&
                            <label
                                className='notification-count position-absolute me-2 fs-6'>{notificationCount}</label>
                        }
                    </Col>
                    <Col lg={2} className='d-flex align-items-center'>
                        <label className='ms-5 vertical-divider'/>
                    </Col>
                    <Col lg={1} className='d-flex align-items-center justify-content-end'>
                        <Image src={logoutIcon} className='logout-icon me-4' fluid/>
                    </Col>
                </Navbar>
            </Container>
        )
    }

    //Logged out header
    return (
        <Container className='py-2 mx-0 bg-transparent position-absolute top-0' fluid>
            <Row>
                <Navbar className='navigation-bar justify-content-end mx-5 fs-5 mt-2'>
                    <Link to='/' className={'me-3 px-4 py-2  ' + (url === '/' ? 'active' : '')}>Home</Link>
                    <Link to='/about-us' className={'px-4 py-2 ' + (url === '/about-us' ? 'active' : '')}>About
                        Us</Link>
                    <Link to='/login' className={'px-4 py-2 ' + (url === '/login' ? 'active' : '')}>Login</Link>
                </Navbar>
            </Row>
        </Container>

    );
}

export default Header;
