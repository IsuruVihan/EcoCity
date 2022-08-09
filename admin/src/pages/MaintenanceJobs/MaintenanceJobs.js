import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import SideNav from "../../common/SideNav";
import JobsTableFilter from "./filters/JobsTableFilter";
import JobsTable from "./tables/JobsTable";
import ViewJobModal from "./modals/ViewJobModal";
import AssignJobModal from "./modals/AssignJobModal";
import Header from "../../common/Header";

const MaintenanceJobs = () => {
  return (
      <Col lg={10} className='p-0 '>
        <Row className='p-0 m-0 mt-4 ps-3' style={{ 
        fontSize: 35, 
        fontWeight: 900, 
        color:'#042434'}} >
          Maintenance Jobs
        </Row>
        <Row className='p-0 m-0' style={{border: "1px solid #BFDDDE", borderRadius: 10}}>
          <Row className='p-0 m-0'>
            <Col sm={10} className='p-0 m-0'></Col>
            <Col sm={2} className='p-0 m-0 ps-3'>
              <JobsTableFilter/>
            </Col>
          </Row>
          {/* <Row className='p-0 m-0 mt-2' style={{border: '2px solid blue'}}><JobsTable/></Row>
          <Row className='p-0 m-0 mt-2' style={{border: '2px solid blue'}}>
            <Col sm={2} className='p-0 m-0 ps-3' style={{border: '2px solid green'}}>
              Assign Button
            </Col>
            <Col sm={8} className='p-0 m-0' style={{border: '2px solid green'}}></Col>
            <Col sm={2} className='p-0 m-0' style={{border: '2px solid green'}}>Page numbers</Col>

          </Row> */}

        </Row>
      </Col>
      // <Container className='mx-0 px-0 h-100 overflow-hidden' fluid>
      //     <Header/>
      //     <Row className='mx-0 mt-72 container-section' >
      //         <SideNav/>
      //         <Col className='' lg={10}>
      //             Maintenance
      //         </Col>
      //     </Row>
      // </Container>
  );
}

export default MaintenanceJobs;
