import React from 'react';
import {Container, Row, Col, Image} from 'react-bootstrap';

import LoginForm from "./forms/LoginForm";

import sideImage from '../../assets/images/login-side-image.png';
import Header from "../../common/Header";

const Login = () => {
  return (
    <Container className="mx-0 px-0" fluid>
      <Row className="mx-0 border border-1 border-danger">
        <Header/>
      </Row>
      <Row className="mx-0">
        <Col className="px-0 border border-1 border-primary">
          <Image src={sideImage} width={'80%'}/>
        </Col>
        <Col className="px-0 border border-1 border-danger">

          <LoginForm/>
        </Col>
      </Row>
    </Container>
  );
}

export default Login;
