import React , {useState} from 'react';
import {Col, Container, Image, Row , Collapse , Button } from "react-bootstrap";

import SideNav from "../../common/SideNav";
import ComplaintsTableFilter from "./filters/ComplaintsTableFilter";
import ComplaintsdTable from "./tables/ComplaintsTable";
import ViewComplaintModal from "./modals/ViewComplaintModal";
import Header from "../../common/Header";

import filtericon from "../../assets/images/icons/filter.png";
import ComplaintsTable from "./tables/ComplaintsTable";


const Complaints = () => {
    const [open, setOpen] = useState(false);

    return (
        <Col lg={10}>
          <Row className="ps-3 pb-3 pt-2">
            <Col className=" p-0 m-0" style={{textAlign: 'left', fontSize: 30, fontWeight: '900', color: '#042434',}}>
              Complaints
            </Col>
          </Row>
          <Row>
            <Col style={{border:"1px solid #BFDDDE" , borderRadius:10}} className="m-2">
              <Row className="d-flex border">
                <Col xs={10}></Col>
                <Col className='pt-3 mx-3 me-2'>
                  <Row xs="2" className="mx-2" style={{border:'2px solid #BFDDDE', borderRadius:10 , textAlign:'right',}}>
                    <Col onClick={() => setOpen(!open)} style={{cursor:'pointer',}} aria-controls="example-collapse-text" aria-expanded={open} xs="6">
                      Filter
                    </Col>
                    <Col style={{textAlign:'right',}}>
                      <Image src={filtericon} width="50%"></Image>
                    </Col>
                  </Row>
                </Col>
              </Row>
              <Row style={{position: 'absolute', right: 25, paddingTop: 8}}>
                <Collapse in={open}>
                  <Container id="example-collapse-text">
                    <ComplaintsTableFilter/>
                  </Container>
                </Collapse>
              </Row>
              <Row>
                <Col style={{border:"1px solid #BFDDDE",}} className="m-4">
                  <ComplaintsTable/>
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
