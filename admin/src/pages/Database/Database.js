import React, {useEffect} from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Outlet} from 'react-router-dom';
import Header from "../../common/Header";
import SideNav from "../../common/SideNav";

const Database = () => {

    return (
        <Container className='mx-0 px-0 h-100 overflow-hidden' fluid>
            <Header/>
            <Row className='mx-0 mt-72 container-section'>
                <SideNav/>
                <Outlet/>
            </Row>
        </Container>
    );
}

export default Database;
