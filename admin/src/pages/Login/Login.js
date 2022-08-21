import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';
import LoginForm from "./forms/LoginForm";
import sideImage from '../../assets/images/login-side-image.png';
import vh from '../../assets/images/harsha.png';
import Header from "../../common/Header";
import '../../assets/styles/Login/login.css';

const Login = () => {
    return (
        <Container className=' login-container px-0' fluid>
            <Header/>
            <Row className='login-content mx-0'>
                <Col lg={6} className='login-background'/>
                <Col lg={6} className='d-flex align-items-center'>
                    <LoginForm/>
                </Col>
            </Row>
        </Container>
        // <Container className="mx-0 px-0 overflow-hidden login-container" fluid>
        //     {/*<Header/>*/}
        //     <Row className="mx-0 login-content">
        //
        //     </Row>
        // </Container>
    );
}

export default Login;
