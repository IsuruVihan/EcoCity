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
      <Col lg={10} className='p-0' style={{border:'1px solid red'}}>
        <Row className='p-0 m-0 mt-4 ps-3 ms-2'
             style={{fontSize: 35, fontWeight: 900, color:'#042434'}} >
          Maintenance Jobs
        </Row>
        <Row className='pt-2 m-3' style={{border:"1px solid #BFDDDE" , borderRadius:10}}>
          <Row className='p-0 m-0' d-flex border>
            <Col sm={10} className='p-0 m-0'></Col>
            <Col sm={2} className='p-0 m-0 ps-2'>
              <JobsTableFilter/>
            </Col>
          </Row>
          <Row className='p-0 m-0 mt-2' >
              <JobsTable/>
          </Row>
        </Row>
      </Col>
  );
}

export default MaintenanceJobs;
