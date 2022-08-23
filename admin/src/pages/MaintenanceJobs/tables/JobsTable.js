import React, {useState} from 'react';
import { Col, Container, Image, Modal, Row, Table, Button} from "react-bootstrap";

import {FiArrowLeft, FiArrowRight, FiEdit} from "react-icons/fi";
import ViewJobModal from '../modals/ViewJobModal';
import close from "../../../assets/images/icons/close.png";
import AssignJobModal from '../modals/AssignJobModal';
//import './JobsTable.css'

const JobsTable = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showassign, setShowassign] = useState(false);
  const handleassignClose = () => setShowassign(false);
  const handleassingShow = () => setShowassign(true);

  return (
    <Container>
      <Row className='p-2 m-0'>
        <Table>
          <thead>
            <tr style={{borderBottom:'1px solid #BFDDDE', fontSize: 18}}>
              <th scope="col">#</th>
              <th scope="col">Job ID</th>
              <th scope="col">Name</th>
              <th scope="col">Hub ID</th>
              <th scope="col">Job Status</th>
              <th scope="col">Date</th>
              <th scope="col">Bin Type</th>
            </tr>
          </thead>
          <tbody>
            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}} onClick={handleShow}> 
              <th scope="row" style={{color:'#d6d6c2'}}>1.</th>
              <td>123</td>
              <td>Harith Kumar</td>
              <td>CMB-7-12</td>
              <td style={{textAlign:'center'}}><p className='m-0 p-1' style={{color:'#008BD1', backgroundColor: '#E1F0FF', width:'100px', borderRadius:'8px', fontWeight: 700}}>Assigned</p></td>
              <td>01/07/2022</td>
              <td>Paper</td>
            </tr>
            <Modal className={'m-0 p-0'} show={show} onHide={handleClose} style={{width:'100%', margin:'auto', border:'none'}} size='lg'>
              <Modal.Header className={'m-0 p-0'} style={{border:'none'}}>
                <Row className={'m-0 p-0 mt-3'}>
                  <Col style={{marginLeft:430, display:'flex', alignItems:'center', justifyContent:'right'}}>
                    <Image src={close} onClick={handleClose} width="10%" style={{cursor:'pointer'}}/>
                  </Col>
                </Row>
              </Modal.Header>
              <Modal.Body className={'m-0 p-0'}>
                <ViewJobModal/>
              </Modal.Body>
            </Modal>
            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}}>
              <th scope="row" style={{color:'#d6d6c2'}}>2.</th>
              <td>122</td>
              <td>Ashen Deshapriya</td>
              <td>CMB-1-11</td>
              <td style={{textAlign:'center'}}><p className='m-0 p-1' style={{color: '#00C186', backgroundColor: '#E0F8E3', width:'100px', borderRadius:'8px', fontWeight: 700}}>Resolved</p></td>
              <td>19/08/2022</td>
              <td>Organic</td>
            </tr>
            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}}>
              <th scope="row" style={{color:'#d6d6c2'}}>3.</th>
              <td>121</td>
              <td>Nishath Perera</td>
              <td>CMB-5-1</td>
              <td style={{textAlign:'center'}}><p className='m-0 p-1' style={{color: '#FF9900', backgroundColor: '#FFF6E9', width:'100px', borderRadius:'8px', fontWeight: 700}}>In progress</p></td>
              <td>20/08/2022</td>
              <td>Organic</td>
            </tr>
            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}}>
              <th scope="row" style={{color:'#d6d6c2'}}>5.</th>
              <td>119</td>
              <td>Hasitha Bandara</td>
              <td>CMB-2-12</td>
              <td style={{textAlign:'center'}}><p className='m-0 p-1' style={{color:'#008BD1', backgroundColor: '#E1F0FF', width:'100px', borderRadius:'8px', fontWeight: 700}}>Assigned</p></td>
              <td>19/08/2022</td>
              <td>Glass</td>
            </tr>
            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}}>
              <th scope="row" style={{color:'#d6d6c2'}}>6.</th>
              <td>113</td>
              <td>Nisal Dias</td>
              <td>CMB-1-12</td>
              <td style={{textAlign:'center'}}><p className='m-0 p-1' 
              style={{
                color:'#00C186',
                backgroundColor:'#E0F8E3',
                width:'100px', 
                borderRadius:'8px', 
                fontWeight: 700
                }}>
                  Resolved</p></td>
              <td>23/08/2022</td>
              <td>Paper</td>
            </tr> 
          </tbody>
        </Table>
      </Row>
      <Row classname='p-2 m-0' style={{dislay: 'flex',alignItems: 'center',justifyContent: 'center'}}>
        <Col className=' m-2' lg={9}>
          <Button className=' p-2' style={{border: 'none', borderRadius:'10px',boxShadow: `5px 6px 8px #8FCFD8`, backgroundColor: '#228693'}} onClick={handleassingShow}><FiEdit/>Assign</Button>
        </Col>
        <Modal show={showassign} onHide={handleassignClose} size='lg'>
          <Modal.Header className='p-0 m-0' style={{border:'none'}}>
            <Row>
              <Col style={{ marginLeft:740, marginTop:10}}>
                <Image src={close} onClick={handleassignClose} width="50%"/>
              </Col>
            </Row>
          </Modal.Header>
          <Modal.Body className='p-0 m-0'>
            <AssignJobModal/>
          </Modal.Body>
        </Modal>
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
