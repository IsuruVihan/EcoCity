import React from 'react';
import {Container, Row, Col} from "react-bootstrap";

import staticImg from '../../../assets/images/staitstics-dump.png'
import plastic from '../../../assets/images/plastic.png'
import glass from '../../../assets/images/glass.png'
import organic from '../../../assets/images/organic.png'
import paper from '../../../assets/images/paper.png'

const BinTypeStatus = () => {
  return (
    <Container className="p-0"fluid>
      <p style={{textAlign:'center', fontSize:'20px', color:'#042434', fontWeight:'600'}}> Garbage Collection Weight</p>
      <Row className="p-0 m-0">
        <Col sm={8} className='p-0 m-0' style={{display:'flex', alignItems:'center'}}>
          <Row className='p-0 m-0'>
            <Col sm={12} style={{display:'flex', alignItems:'center',justifyContent:'center'}}><img src={staticImg} width='100%' className='p-0 ' style={{width:'100px'}}/></Col>
            <Col sm={12} style={{textAlign:'center', color:'#042434'}}><h1 className='weightTag'><strong>630</strong><small>kg</small></h1></Col>
            <Col sm={12} style={{textAlign:'center', color:'#042434'}}><h5 className='weightTag'>Total</h5></Col>
          </Row>
        </Col>
        <Col sm={4} className='p-0 m-0'>
          <Row className="p-0 m-0" style={{display:'flex', alignItems:'center'}} xs={3}><img src={plastic} className='p-1' alt='...'/><strong>100</strong></Row>
          <Row className="p-0 m-0" style={{display:'flex', alignItems:'center'}} xs={3}><img src={glass} className='p-1' alt='...'/><strong>100</strong></Row>
          <Row className="p-0 m-0" style={{display:'flex', alignItems:'center'}} xs={3}><img src={organic} className='p-1' alt='...'/><strong>100</strong></Row>
          <Row className="p-0 m-0" style={{display:'flex', alignItems:'center'}} xs={3}><img src={paper} className='p-1' alt='...'/><strong>100</strong></Row>
        </Col>
      </Row>
    </Container>
  );
}
export default BinTypeStatus;
