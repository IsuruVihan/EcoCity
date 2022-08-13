import React from 'react';
import { Col, Container, Image, Modal, Row, Table, Button} from "react-bootstrap";

import {FiArrowLeft, FiArrowRight, FiEdit} from "react-icons/fi";

const JobsTable = () => {
  return (
    <Container>
      <Row className='p-2 m-0'>
        <Table>
          <thead>
            <tr style={{borderBottom:'1px solid #BFDDDE'}}>
              <th scope="col">#</th>
              <th scope="col">job ID</th>
              <th scope="col">Name</th>
              <th scope="col">Hub ID</th>
              <th scope="col">Job Status</th>
              <th scope="col">Date</th>
              <th scope="col">Bin Type</th>
              </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}}>
              <th scope="row" style={{color:'#d6d6c2'}}>1.</th>
              <td>123</td>
              <td>Harith Kumar</td>
              <td>CMB-7-12</td>
              <td style={{textAlign:'center'}}><p className='m-0 p-1' style={{color:'#3377ff', backgroundColor:'#BFDDDE', width:'100px', borderRadius:'8px', fontWeight: 700}}>Assigned</p></td>
              <td>01/07/2022</td>
              <td>Paper</td>
            </tr>
            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}}>
              <th scope="row" style={{color:'#d6d6c2'}}>2.</th>
              <td>123</td>
              <td>Harith Kumar</td>
              <td>CMB-7-12</td>
              <td style={{textAlign:'center'}}><p className='m-0 p-1' style={{color:'#00b300', backgroundColor:'#ccffcc', width:'100px', borderRadius:'8px', fontWeight: 700}}>Resolved</p></td>
              <td>01/07/2022</td>
              <td>Paper</td>
            </tr>
            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}}>
              <th scope="row" style={{color:'#d6d6c2'}}>3.</th>
              <td>123</td>
              <td>Harith Kumar</td>
              <td>CMB-7-12</td>
              <td style={{textAlign:'center'}}><p className='m-0 p-1' style={{color:'#ffa64d', backgroundColor:'#ffe0cc', width:'100px', borderRadius:'8px', fontWeight: 700}}>In progress</p></td>
              <td>01/07/2022</td>
              <td>Paper</td>
            </tr>
            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}}>
              <th scope="row" style={{color:'#d6d6c2'}}>5.</th>
              <td>123</td>
              <td>Harith Kumar</td>
              <td>CMB-7-12</td>
              <td style={{textAlign:'center'}}><p className='m-0 p-1' style={{color:'#3377ff', backgroundColor:'#BFDDDE', width:'100px', borderRadius:'8px', fontWeight: 700}}>Assigned</p></td>
              <td>01/07/2022</td>
              <td>Paper</td>
            </tr>
            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}}>
              <th scope="row" style={{color:'#d6d6c2'}}>6.</th>
              <td>123</td>
              <td>Harith Kumar</td>
              <td>CMB-7-12</td>
              <td style={{textAlign:'center'}}><p className='m-0 p-1' 
              style={{
                color:'#00b300', 
                backgroundColor:'#ccffcc', 
                width:'100px', 
                borderRadius:'8px', 
                fontWeight: 700
                }}>
                  Resolved</p></td>
              <td>01/07/2022</td>
              <td>Paper</td>
            </tr> 
          </tbody>
        </Table>
      </Row>
      <Row classname='p-2 m-0' style={{dislay:'flex',alignItems:'center',justifyContent:'center'}}>
        <Col className=' m-2' lg={9}>
          <Button className=' p-2' style={{borderRadius:'10px',boxShadow: `5px 6px 8px #9999ff`,}}><FiEdit/> Assign</Button>
        </Col>
        <Col classname='p-0 m-0' style={{dislay:'flex',alignItems:'center',justifyContent:'center'}}>
          <Row classname='p-0 m-0' style={{dislay:'flex',alignItems:'center',justifyContent:'center'}}>
            <Col xs={10}>
              <Row className='p-0 m-0'>
                <Col lg={4}><FiArrowLeft color='#228693' size='23px' /></Col>
                <Col lg={2} className='p-0 m-0' 
                style={{
                  border:'1px solid #BFDDDE', 
                  marginTop:2, marginBottom:2, 
                  marginLeft:5, 
                  marginRight:5, 
                  textAlign:'center', 
                  borderRadius:10, 
                  cursor:'pointer' 
                  }}>
                  1
                </Col>
                <Col lg={2} className='p-0 m-0' 
                style={{
                  marginTop:2, 
                  marginBottom:2, 
                  marginLeft:5, 
                  marginRight:5, 
                  textAlign:'center', 
                  cursor:'pointer' 
                  }}>
                  2
                </Col>
                <Col lg={2} className='p-0 m-0' 
                style={{
                  marginTop:2, 
                  marginBottom:2, 
                  marginLeft:5, 
                  marginRight:5, 
                  textAlign:'center', 
                  cursor:'pointer'
                  }}>
                  3
                </Col>
                <Col lg={2}><FiArrowRight color='#228693' size='23px'/></Col>
              </Row>
            </Col>
          </Row>
        </Col>
      </Row>
    </Container>
  );
}

export default JobsTable;
