import React from 'react';
import {Container, Row} from "react-bootstrap";

import '../assets/styles/common/Footer.css';

const Footer = () => {
    return (
        <Row className='w-100 px-4  py-2 bottom-0 justify-content-center'>
            <div className='footer-line w-100 mb-3'/>
            <div className='footer-text mb-2'>
                &copy; EcoCity {(new Date().getFullYear())}
            </div>
        </Row>
    );
}

export default Footer;
