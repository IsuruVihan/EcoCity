import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

import JobMap from "../maps/JobMap";
import modelimage from "../../../assets/images/view-complaint.png";

const ViewJobModal = () => {
  return (
    <Container className={'m-0 p-0'}>
        <Row className={'m-0 p-0'}>
            <Col className={'m-0 p-0'} style={{textAlign:'center'}}>
                <Image src={modelimage} fluid style={{width:'20%'}}/>
            </Col>
        </Row>
        <Row className={'m-0 p-3 overflow-auto'} style={{fontSize:13, height:300}}>
          <Row className={'m-0 p-0'}>
            <Col className={'m-0 p-0 pb-3'} sm={2} 
            style={{ fontWeight:'bold', paddingBottom:5}}>Job Status
            </Col>
            <Col className={'m-0 p-0'} sm={10} 
            style={{ fontWeight:'bold'}}>
              <p style={{
                backgroundColor:'#E8F5F6', 
                width:'15%', padding:'5px',
                borderRadius:'10px',
                color:'#008BD1', 
                textAlign:'center'
              }}
                >Assigned</p>
            </Col>
          </Row>
          <Row className={'m-0 p-0 pb-3'}>
            <Col className={'m-0 p-0 pe-3'} sm={6} 
            style={{marginRight:15 , 
            marginLeft:15 , 
            fontWeight:'bold', 
            paddingBottom:5
            }}>
              <Row className={'m-0 p-0 pb-2'} style={{paddingBottom:5}}>Job ID</Row>
              <Row className={'m-0 p-0 '}>
                <input type="text"
                  style={{outline:'none', 
                  border:'2px solid #E8F5F6', 
                  borderRadius:8, 
                  paddingBottom:3,
                  paddingTop:3, 
                  fontSize:12
                  }}/>
              </Row>
            </Col>
            <Col className={'m-0 p-0 pe-2 ps-2'} sm={3}
            style={{ 
            marginRight:15 , 
            marginLeft:15 , 
            fontWeight:'bold', 
            paddingBottom:5
            }}>
              <Row className={'m-0 p-0 pb-2'} style={{paddingBottom:5}}>Garbage Hub ID</Row>
              <Row className={'m-0 p-0'}>
                <input type="text"
                  style={{outline:'none', 
                  border:'2px solid #E8F5F6', 
                  borderRadius:8, 
                  paddingBottom:3,
                  paddingTop:3, 
                  fontSize:12
                  }}/>
              </Row>
            </Col>
            <Col className={'m-0 p-0 pe-2 ps-2'}sm={3}
            style={{marginRight:15 , 
            marginLeft:15 , 
            fontWeight:'bold', 
            paddingBottom:5
            }}>
              <Row className={'m-0 p-0 pb-2'} style={{paddingBottom:5}}>Garbage Hub Type</Row>
              <Row className={'m-0 p-0'}>
                <input type="text"
                  style={{outline:'none', 
                  border:'2px solid #E8F5F6', 
                  borderRadius:8, 
                  paddingBottom:3,
                  paddingTop:3, 
                  fontSize:12
                  }}/>
              </Row>
            </Col>
          </Row>
          <Row className={'m-0 p-0 pb-3'}>
            <Col className={'m-0 p-0 pe-3'}sm={6} 
            style={{marginRight:15 , 
            marginLeft:15 , 
            fontWeight:'bold', 
            paddingBottom:5
            }}>
              <Row className={'m-0 p-0 pb-2'} style={{paddingBottom:5}}>Assigned Date</Row>
              <Row className={'m-0 p-0'}>
                <input type="date"
                  style={{outline:'none', 
                  border:'2px solid #E8F5F6', 
                  borderRadius:8, 
                  paddingBottom:3,
                  paddingTop:3, 
                  fontSize:12
                  }}/>
              </Row>
            </Col>
            <Col className={'m-0 p-0 ps-2 pe-2'} sm={6} 
            style={{marginRight:15 , 
            marginLeft:15 , 
            fontWeight:'bold', 
            paddingBottom:5
            }}>
              <Row className={'m-0 p-0 pb-2'} style={{paddingBottom:5}}>Description</Row>
              <Row className={'m-0 p-0'}>
                <textarea type="text" rows="1" cols="50"
                  style={{outline:'none', 
                  border:'2px solid #E8F5F6', 
                  borderRadius:8, 
                  paddingBottom:3,
                  paddingTop:3, 
                  fontSize:12
                  }}> 
                </textarea>
              </Row>
            </Col>
          </Row>
          <Row className={'m-0 p-0 pb-3'}>
            <Col className={'m-0 p-0 pe-3'} sm={6} 
            style={{marginRight:15 , 
            marginLeft:15 , 
            fontWeight:'bold', 
            paddingBottom:5
            }}>
              <Row className={'m-0 p-0 pb-2'} style={{paddingBottom:5}}>Assigned Crew Member</Row>
              <Row className={'m-0 p-0'}>
                <input type="text"
                  style={{outline:'none', 
                  border:'2px solid #E8F5F6', 
                  borderRadius:8, 
                  paddingBottom:3,
                  paddingTop:3, 
                  fontSize:12
                  }}/>
              </Row>
            </Col>
            <Col className={'m-0 p-0 ps-2 pe-2'} sm={6} 
            style={{marginRight:15 , 
            marginLeft:15 , 
            fontWeight:'bold', 
            paddingBottom:5
            }}>
              <Row className={'m-0 p-0 pb-2'} style={{paddingBottom:5}}>Crew Member ID</Row>
              <Row className={'m-0 p-0'}>
                <input type="text"
                  style={{outline:'none', 
                  border:'2px solid #E8F5F6', 
                  borderRadius:8, 
                  paddingBottom:3,
                  paddingTop:3, 
                  fontSize:12
                  }}/>
              </Row>
            </Col>
          </Row>
          <Row className={'m-0 p-0 pb-3'} 
          style={{ marginRight:15 , 
          marginLeft:15 , 
          fontWeight:'bold', 
          paddingBottom:5
          }}>Location</Row>
          <Row className={'m-0 p-0'} 
          style={{border:'1px solid black', 
          height:'300px', 
          borderRadius:'10px'
          }}><JobMap/></Row>
        </Row>
    </Container>
  );
}

export default ViewJobModal;
