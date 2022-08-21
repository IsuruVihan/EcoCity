import React from 'react';
import {Container, Row} from "react-bootstrap";
import Header from "../common/Header";
import SideNav from "../common/SideNav";
import {Outlet} from "react-router-dom";
import '../assets/styles/temp.css';

const Home = () => {
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

export default Home;
