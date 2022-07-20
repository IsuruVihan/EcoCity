import React from 'react';
import {Container, Row} from "react-bootstrap";
import '../assets/styles/common/Footer.css';

const Footer = () => {
    return (
        <Row className='w-100 px-4  py-2 position-absolute bottom-0 justify-content-center bor'>
            <div className='footer-line w-100 mb-3'/>
            &copy; EcoCity {(new Date().getFullYear())}
        </Row>
    );
}

export default Footer;
