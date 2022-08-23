import React, {useState} from 'react';
import { Col, Container, Image, Modal, Row, Table, Button} from "react-bootstrap";

import {FiArrowLeft, FiArrowRight, FiEdit} from "react-icons/fi";
import ViewJobModal from '../modals/ViewJobModal';
import close from "../../../assets/images/icons/close.png";
import AssignJobModal from '../modals/AssignJobModal';

import "../../../assets/styles/Maintenance/table/table.css";
import create from "../../../assets/images/icons/create.png";

const JobsTable = () => {
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [showassign, setShowassign] = useState(false);
  const handleassignClose = () => setShowassign(false);
  const handleassingShow = () => setShowassign(true);


  let status = 'In-Progress';
  const changeColor=(status)=>{
    let classes = 'pt-1 pb-1 pe-2 px-2 label ' ;
    if(status === 'assigned') {
      classes += 'state-assigned'
    }
    else if(status === 'In-Progress') {
      classes += 'state-inprogress'
    }
    else {
      classes += 'state-resolved'
    }
    return  classes;
  }
  return (
    <Container>
      <Row className='p-2 m-0'>
        <Table>
          <thead>
            <tr style={{borderBottom:'1px solid #BFDDDE'}}>
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
              <td><label className={changeColor(status)}>{status}</label></td>
              <td>01/07/2022</td>
              <td>Paper</td>
            </tr>
            <Modal className={'m-0 p-0'} show={show} onHide={handleClose}
                   style={{width:'100%', border:'none',paddingLeft:10, paddingRight:10}} size='lg'>
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
            <tr style={{borderBottom:'1px solid #BFDDDE', cursor:'pointer'}} onClick={handleShow}>
              <th scope="row" style={{color:'#d6d6c2'}}>1.</th>
              <td>123</td>
              <td>Harith Kumar</td>
              <td>CMB-7-12</td>
              <td><label className={changeColor(status)}>{status}</label></td>
              <td>01/07/2022</td>
              <td>Paper</td>
            </tr>
          </tbody>
        </Table>
      </Row>
      <Row classname='p-2 m-0' style={{dislay:'flex',alignItems:'center',justifyContent:'center'}}>
        <Col className=' m-2' lg={9}>
            <Row style={{width:110, textAlign:'center',marginLeft:1, backgroundColor:'#228693',borderRadius:8,boxShadow: `0px 4px 8px #BFDDDE`}}>
              <Col style={{textAlign:'center',color:'#fff', paddingTop:10,paddingBottom:10,cursor:'pointer'}} onClick={handleassingShow}>
                <Image src={create} width='20%'/>
                Assign
              </Col>
            </Row>
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
                style={{border:'1px solid #BFDDDE', marginTop:2, marginBottom:2, marginLeft:5, marginRight:5, textAlign:'center', borderRadius:10, cursor:'pointer'}}>
                  1
                </Col>
                <Col lg={2} className='p-0 m-0' 
                style={{marginTop:2, marginBottom:2, marginLeft:5, marginRight:5, textAlign:'center', cursor:'pointer'}}>
                  2
                </Col>
                <Col lg={2} className='p-0 m-0' 
                style={{marginTop:2, marginBottom:2, marginLeft:5, marginRight:5, textAlign:'center', cursor:'pointer'}}>
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
