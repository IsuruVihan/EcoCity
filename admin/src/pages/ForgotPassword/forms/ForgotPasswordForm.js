import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import atSign from '../../../assets/images/icons/email.png'
import './ForgotPasswordForm.css'

const ForgotPasswordForm = () => {
  return (
    <Container className="p-0" fluid>
      <Row className='p-0 m-0' style={{marginLeft:'6em', marginRight:'6em', textAlign:'center'}}>
        <center>Password Recovery Form</center>

      </Row>
    </Container>
  );
}

export default ForgotPasswordForm;
