import React from 'react';
import { Container, Row, Col, Image } from 'react-bootstrap';
import sideImage from '../../assets/images/login-side-image.png';
import LoginForm from "./forms/LoginForm";


const Login = () => {
  return (
    <Container className="mx-0 " fluid  >
        <Row>
            <Col className="border border-3 border-primary">

                <Image src={sideImage} fluid/>
            </Col>
            <Col className="border border-3 border-danger">
                form
                {/*<LoginForm/>*/}
            </Col>
        </Row>

    </Container>

  );
}

export default Login;
