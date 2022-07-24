import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

import AtSign from '../../../assets/images/icons/email.png';
import LockSign from '../../../assets/images/icons/password.png';
import EyeSign from '../../../assets/images/icons/eye.png';

import "../../../assets/styles/LoginForm.css";

const LoginForm = () => {
  return (
    <Container className="p-0" style={{border: '2px solid orange'}}>
      <Row className="m-0 mb-5" style={{border: '2px solid blue'}}>
        <Col className="p-0" style={{border: '2px solid green', textAlign: 'center', fontSize: 30, fontWeight: '900', color: '#042434'}}>Login</Col>
      </Row>
      <Row style={{border: '2px solid blue', marginLeft: '6em', marginRight: '6em'}}>
        <Col className="p-0 mb-3" style={{border: '2px solid green'}} sm={12}>
          <Row className="m-0" style={{border: '2px solid pink'}}>
            <Col className="p-0" style={{border: '2px solid yellow', fontWeight: 500, fontSize: 17, color: '#075061'}} sm={12}>Email</Col>
            <Col className="p-0" style={{border: '2px solid yellow'}} sm={12}>
              <Row className="m-0" style={{border: '2px solid black'}}> {/*Border bottom*/}
                <Col className="p-0" style={{border: '2px solid red', display: 'flex', alignItems: 'center'}} sm={1}>
                  <Image src={AtSign} width='50%' style={{border: '2px solid purple'}}/>
                </Col>
                <Col className="p-0" style={{border: '2px solid red'}} sm={11}>
                  <input className='input-field' type='email' style={{border: '2px solid purple', width: '100%'}}/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="p-0 pb-2" style={{border: '2px solid green'}} sm={12}>
          <Row className="m-0" style={{border: '2px solid pink'}}>
            <Col className="p-0" style={{border: '2px solid yellow', fontWeight: 500, fontSize: 17, color: '#075061'}} sm={12}>Password</Col>
            <Col className="p-0" style={{border: '2px solid yellow'}} sm={12}>
              <Row className="m-0" style={{border: '2px solid black'}}> {/*Border bottom*/}
                <Col className="p-0" style={{border: '2px solid red', display: 'flex', alignItems: 'center'}} sm={1}>
                  <Image src={LockSign} width='50%' style={{border: '2px solid purple'}}/>
                </Col>
                <Col className="p-0" style={{border: '2px solid red'}} sm={10}>
                  <input className='input-field' type='password' style={{border: '2px solid purple', width: '100%'}}/>
                </Col>
                <Col className="p-0" style={{border: '2px solid red', display: 'flex', alignItems: 'center', justifyContent: 'center'}} sm={1}> {/*Border left*/}
                  <Image src={EyeSign} width='50%' style={{border: '2px solid purple'}}/>
                </Col>
              </Row>
            </Col>
          </Row>
        </Col>
        <Col className="p-0 pb-4" style={{border: '2px solid green'}} sm={12}>
          <Row className="m-0" style={{border: '2px solid pink'}}>
            <Col className="p-0 d-flex align-items-center" style={{border: '2px solid yellow'}}>
              <input type='checkbox' style={{border: '2px solid black'}}/>
              <label className='ms-1' style={{color: '#BFDDDE', border: '2px solid black', fontSize: 12}}>Remember me</label>
            </Col>
            <Col className="p-0 d-flex justify-content-end align-items-center" style={{border: '2px solid yellow'}}>
              <label className='ms-1' style={{color: '#BFDDDE', border: '2px solid black', fontSize: 12}}>Forgot password?</label> {/*Border bottom*/}
            </Col>
          </Row>
        </Col>
        <Col className="p-0 d-flex justify-content-center" style={{border: '2px solid green'}} sm={12}>
          <button style={{background: '#228693', color: 'white', borderRadius: '10px', width: '70%', height: '3em', fontWeight: '600', boxShadow: `1px 2px 4px rgba(34, 134, 147, 45)`}}>Sign in</button>
        </Col>
      </Row>
    </Container>
  );
}

export default LoginForm;
