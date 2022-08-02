import React from 'react';
import {Col, Container, Row , Image} from "react-bootstrap";

import SideNav from "../../common/SideNav";
import ComplaintsTableFilter from "./filters/ComplaintsTableFilter";
import ComplaintsdTable from "./tables/ComplaintsTable";
import ViewComplaintModal from "./modals/ViewComplaintModal";
import Header from "../../common/Header";

import filtericon from '../../assets/images/icons/filter.png';

const Complaints = () => {
  return (
      <Col className='border border-1 border-primary' lg={10} >
          <Row className="ps-3 pb-3 pt-2">
              <Col className="border border-1 border-danger p-0 m-0"
                   style={{textAlign: 'left',
                       fontSize: 30,
                       fontWeight: '900',
                       color: '#042434' ,}}>
                  Complaints
              </Col>
          </Row>
          <Row
              style={{  border:'2px solid red'}}>
              <Col
                  style={{border:"1px solid #BFDDDE" , borderRadius:10}} className="m-2">
                  <Row className="d-flex">
                      <Col xs={10}></Col>
                      <Col  className='pt-3 px-4' >
                          <Row xs="2"
                               style={{border:'2px solid #BFDDDE', borderRadius:10 }} >
                              <Col
                                  style={{ cursor:'pointer' }} xs="6">
                                  Filter
                              </Col>
                              <Col
                                  style={{ textAlign:'right'}}>
                                  <Image src={filtericon} width="50%"/>
                              </Col>
                          </Row>
                      </Col>
                  </Row>
                  <Row>
                      <Col
                          style={{border:"1px solid #BFDDDE" , }} className="m-4">
                          table
                      </Col>
                  </Row>

              </Col>
          </Row>
      </Col>


      // <Container className='mx-0 px-0 h-100 overflow-hidden' fluid>
      //     <Header/>
      //     <Row className='mx-0 mt-72 container-section' >
      //         <SideNav/>
      //         <Col className='' lg={10}>
      //             Complaints
      //         </Col>
      //     </Row>
      // </Container>

  );
}

export default Complaints;
