import React from 'react';
import {Container , Row , Col } from "react-bootstrap";

import loginSideImg from '../../assets/images/login-side-image.png'
import forgotPwd from '../../assets/images/forgot-password.png'
import ForgotPasswordForm from "./forms/ForgotPasswordForm";

const ForgotPassword = () => {
  return (
    <Container className="p-0" style={{border:'2px solid red'}} fluid>
      <Row className='p-0 m-0' style={{border:'2px solid orange'}}>
        <Col sm={6} className="p-0 m-0" style={{border:'2px solid black'}}><img src={loginSideImg} width='100%'/></Col>
        <Col sm={6} className='p-0 m-0' style={{border:'2px solid black'}}>
          <Row className='p-0 m-0' style={{border:'2px solid orange'}}><div className='firstHeading' style={{textAlign:'center', marginTop:'100px', fontSize:30, fontWeight:900, color:'#042434'}}><h1>Forgot Password?</h1></div></Row>
          <Row className='p-0 m-0' style={{border:'2px solid orange', display:'flex', alignItems:'center', justifyContent:'center', marginTop:'30px'}}><img src={forgotPwd} style={{border:'2px solid black',width:'280px'}}/></Row>
          <Row className='p-0' style={{border:'2px solid orange', marginLeft:'10em', marginRight:'10em', marginTop:'20px'}}><ForgotPasswordForm/></Row>
        </Col> 
      </Row>
    </Container>
  );
}
export default ForgotPassword;

