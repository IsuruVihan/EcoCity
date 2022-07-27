import React from 'react';
import {Container,Row, Col} from "react-bootstrap";

import loginSideImg2 from '../../assets/images/login-side-image.png'
import checkEmail from '../../assets/images/check-your-mail.png'
import './CheckYourEmail.css'

const CheckYourEmail = () => {
  return (
    <Container className="p-0"fluid>
      <Row className='p-0 m-0'>
        <Col sm={6} className="p-0 m-0"><img src={loginSideImg2} width='100%'/></Col>
        <Col sm={6} className='p-0 m-0'>
          <Row className='p-0 m-0'><div className='firstHeading' style={{textAlign:'center', marginTop:'120px', fontSize:30, fontWeight:900, color:'#042434'}}><h1>Check your e-mail</h1></div></Row>
          <Row className='p-0 m-0' style={{ display:'flex', alignItems:'center', justifyContent:'center' }}><img src={checkEmail} style={{width:'280px'}}/></Row>
          <Row><div className='check-email-row1' style={{color:'#707070'}}><p>We have sent a password recovery instructions to your email</p></div></Row>
          <Row><div className='check-email-row2' style={{color:'#707070'}}><p>Did not receive the email? Check your spam filter,<label style={{cursor:'pointer', color:'#228693'}}> or try another email address</label></p></div></Row>
        </Col>
      </Row>
    </Container>
  );
}

export default CheckYourEmail;