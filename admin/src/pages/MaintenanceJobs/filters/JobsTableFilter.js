import React, {useState} from 'react';
import {Col, Container, Image, Row, Collapse, Button} from "react-bootstrap";

import filterIcon from '../../../assets/images/icons/filter.png';
import from_date from "../../../assets/images/icons/from-date.png";
import to_date from "../../../assets/images/icons/to-date.png";
import filtericonbutton from "../../../assets/images/icons/filterwhite.png";

const JobsTableFilter = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Col lg={8}  className='pt-3 mx-3 me-2 '>
        <Row sm="2" className="p-0 m-0" onClick={() => setOpen(!open)}
          style={{
            border: '2px solid #BFDDDE',
            borderRadius: 10,
            textAlign: 'right',
            cursor: 'pointer'
            }}>
          <Col aria-controls="example-collapse-text" aria-expanded={open} sm="6">
            Filter
          </Col>
          <Col style={{textAlign: 'right'}}>
            <img src={filterIcon} width='20px'/>
          </Col>
        </Row>
        <Row style={{
          position: 'absolute',
          right: 100,
          paddingTop: 8,
          width:'400px',
          zIndex:1}}>
          <Collapse in={open}>
            <Container  id="example-collapse-text" style={{backgroundColor: 'white', boxShadow: '0px 8px 24px rgba(149, 157, 165, 0.2)'}}>
              <Row >
                <Col style={{
                  borderBottomRightRadius: 15,
                  borderBottomLeftRadius: 15,
                  boxShadow: `0px 4px 8px #707070`
                  }}>
                  <Row className="m-1">
                    <Col sm={8}>
                      <Row>
                        <Col className="p-0 m-0" sm={3}>
                          <label style={{fontSize: 13, fontWeight:600}}>
                            Job ID
                          </label>
                        </Col>
                        <Col className="p-0 m-0" sm={9}>
                          <input style={{
                            width: 157,
                            outline: 'none',
                            border:'none',
                            borderBottom: '2px solid #E9E8EF'}}/>
                        </Col>
                      </Row>
                      <Row>
                        <Col sm={6}>
                          <Row>
                            <Col className="p-0 m-0" sm={12}>
                              <label style={{fontSize: 13, fontWeight:600}}>
                                First Name
                              </label>
                            </Col>
                            <Col className="p-0 m-0">
                              <input style={{
                                width: 95,
                                outline: 'none',
                                border:'none',
                                borderBottom: '2px solid #E9E8EF'}}/>
                            </Col>
                          </Row>
                        </Col>
                        <Col sm={6}>
                          <Row>
                            <Col className="p-0 m-0" sm={12}>
                              <label style={{fontSize: 13, fontWeight:600}}>
                                Last Name
                              </label>
                            </Col>
                            <Col className="p-0 m-0">
                              <input style={{
                                width: 95,
                                outline: 'none',
                                border:'none',
                                borderBottom: '2px solid #E9E8EF'}}/>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                      <Row>
                        <Col className="p-0 m-0" sm={3}>
                          <label style={{fontSize: 13, fontWeight:600}}>
                            Hub ID
                          </label>
                        </Col>
                        <Col className="p-0 m-0" sm={9}>
                          <input style={{
                            width: 157,
                            outline: 'none',
                            border:'none',
                            borderBottom: '2px solid #E9E8EF'}}/>
                        </Col>
                      </Row>
                    </Col>
                    <Col sm={4} className="p-0 m-0">
                      <Row className="p-0 m-0">Status</Row>
                      <Row>
                        <Col style={{
                          display:'flex',
                          textAlign:'center',
                          alignItems:'center',
                          marginBottom: '10px',
                          marginTop:'10px'
                          }}>
                          <input type='checkbox'
                            style={{cursor: 'pointer'}}/>
                            <label
                              style={{fontSize: 11, marginLeft: 5, fontWeight:600}}>
                                Assigned
                            </label>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{
                          display:'flex',
                          textAlign:'center',
                          alignItems:'center',
                          marginBottom: '10px'
                          }}>
                          <input type='checkbox'
                            style={{cursor: 'pointer'}}/>
                            <label
                              style={{fontSize: 11, marginLeft: 5, fontWeight:600}}>
                                In-Progress
                            </label>
                        </Col>
                      </Row>
                      <Row>
                        <Col style={{
                          display:'flex',
                          textAlign:'center',
                          alignItems:'center',
                          }}>
                          <input type='checkbox'
                            style={{cursor: 'pointer'}}/>
                            <label
                              style={{fontSize: 11, marginLeft: 5, fontWeight:600}}>
                                Resolved
                            </label>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row style={{
                    borderTop: '2px solid #BFDDDE',
                    borderBottom: '2px solid #BFDDDE',
                    marginLeft: .5,
                    marginRight: .5,
                    paddingBottom: 10,
                    marginTop: 15
                    }}>
                    <Col>
                      <Row className='mt-1'>Bin Type</Row>
                      <Row>
                        <Col className="p-0 m-0" sm={7} style={{
                          display:'flex',
                          textAlign:'center',
                          alignItems:'center'
                          }}>
                          <Row className="p-0 m-0">
                            <Col className="p-0 m-0">
                              <Row className="p-0 m-0">
                                <Col className="p-0 m-0 mb-2" style={{
                                  display:'flex',
                                  textAlign:'center',
                                  alignItems:'center'
                                  }}>
                                  <input type='checkbox'
                                        style={{cursor: 'pointer'}}/>
                                  <label
                                    style={{fontSize: 12, marginLeft: 10}}>
                                    Organic
                                  </label>
                                </Col>
                              </Row>
                              <Row className="p-0 m-0">
                                <Col className="p-0 m-0" style={{
                                  display:'flex',
                                  textAlign:'center',
                                  alignItems:'center'
                                  }}>
                                  <input type='checkbox'
                                        style={{cursor: 'pointer'}}/>
                                  <label
                                    style={{fontSize: 12, marginLeft: 10}}>
                                    Plastic
                                  </label>
                                </Col>
                              </Row>
                            </Col>
                            <Col className="p-0 m-0">
                              <Row className="p-0 m-0">
                                <Col className="p-0 m-0 mb-2 mx-3" style={{
                                  display:'flex',
                                  textAlign:'center',
                                  alignItems:'center'
                                  }}>
                                  <input type='checkbox'
                                        style={{cursor: 'pointer'}}/>
                                  <label
                                    style={{fontSize: 12, marginLeft: 10}}>
                                    Glass
                                  </label>
                                </Col>
                              </Row>
                              <Row className="p-0 m-0">
                                <Col className="p-0 m-0 mx-3"
                                  style={{display:'flex', textAlign:'center', alignItems:'center'}}>
                                  <input type='checkbox'
                                        style={{cursor: 'pointer'}}/>
                                  <label
                                    style={{fontSize: 12, marginLeft: 10}}>
                                    Paper
                                  </label>
                                </Col>
                              </Row>
                            </Col>
                          </Row>
                        </Col>
                        <Col className="p-0 m-0" sm={5}>
                          <Row className="p-0 m-0">
                            <Col className="p-0 m-0" style={{textAlign: 'left',paddingTop:'5px'}} sm={3}>
                              <Image src={from_date} width="80%"/>
                            </Col>
                            <Col className="p-0 m-0" style={{
                              textAlign: 'left',
                              fontSize: 13,
                              color: '#BFDDDE',
                              fontWeight: 'bold'
                            }} sm={9}>
                              From date
                              <input type="date"
                                    style={{
                                      border: 'none',
                                      color: '#228693',
                                      outline: 'none'
                                    }}/>
                            </Col>
                          </Row>
                          <Row className="m-0 p-0 mt-2" >
                            <Col className="p-0 m-0" style={{textAlign: 'left', paddingTop:'5px'}} sm={3}>
                              <Image src={to_date} width="80%"/>
                            </Col>
                            <Col className="p-0 m-0" style={{
                              textAlign: 'left',
                              fontSize: 13,
                              fontWeight: 'bold',
                              color: '#BFDDDE'
                            }} sm={9}>
                              To date
                              <input type="date"
                                    style={{
                                      border: 'none',
                                      color: '#BFDDDE',
                                      outline: 'none'
                                    }}/>
                            </Col>
                          </Row>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                  <Row style={{marginLeft: .5,marginRight: .5,paddingBottom: 10, paddingTop:10}}>
                    <Col sm={9}></Col>
                    <Col className="p-0" sm={3} style={{padding:3}}>
                      <Row className="p-1 m-0" style={{
                        backgroundColor: '#228693',
                        borderRadius: 8,
                        marginRight:4,
                        width:'80px',
                        marginLeft:5
                            }}>
                        <Col className="p-0 m-0" style={{textAlign: 'right',}} sm={4}>
                          <Image src={filtericonbutton} width="23px"/>
                        </Col>
                        <Col className="p-0 m-0" sm={8} style={{
                              color: '#fff',
                              textAlign: 'center',
                              fontSize: 15,
                              fontWeight: 500,
                              paddingTop: 2,
                              cursor: 'pointer'
                            }}>
                              Filter
                            </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Collapse>
        </Row>
      </Col>
    </Container>
  );
}
export default JobsTableFilter;
