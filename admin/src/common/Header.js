import React, {useEffect, useState} from 'react';
import {Col, Container, Image, Navbar, Row} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import '../assets/styles/common/Header.css';
import logo from '../assets/images/Logo1.png';
import logoutIcon from '../assets/images/icons/log-out.png';

const Header = () => {
    const location = useLocation();
    const [url, setUrl] = useState(null);
    const [isLoggedIn, setIsLoggedIn] = useState(true);
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
                    <Col lg={7} className='justify-content-end d-flex pe-lg-5'>

                    </Col>
                    <Col lg={3} className='vertical-divider ps-lg-5  d-flex align-items-center justify-content-end'>
                        <Image src={logoutIcon} className='logout-icon' fluid/>
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
