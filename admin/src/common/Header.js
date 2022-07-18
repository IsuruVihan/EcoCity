import React, {useEffect, useState} from 'react';
import {Container, Navbar} from "react-bootstrap";
import {Link, useLocation} from "react-router-dom";
import '../assets/styles/common/Header.css';

const Header = () => {
    const location = useLocation();
    const [url, setUrl] = useState(null);

    useEffect(() => {
        setUrl(location.pathname);
    }, [location]);

    return (
        <Container className='py-2 px-0'>
            <Navbar className='navigation-bar justify-content-end'>
               <Link to='/' className={'me-4 '+(url==='/' ? 'active' : '')}>Home</Link>
               <Link to='/login' className={url==='/login' ? 'active' : ''}>Login</Link>
            </Navbar>
        </Container>

    );
}

export default Header;
