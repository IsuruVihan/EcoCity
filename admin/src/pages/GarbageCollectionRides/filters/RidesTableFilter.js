import React from 'react';
import { Row, Col, Image} from "react-bootstrap";

import filtericonbutton from "../../../assets/images/icons/filterwhite.png";
import from_date from "../../../assets/images/icons/from-date.png";
import to_date from "../../../assets/images/icons/to-date.png";

const RidesTableFilter = () => {
  return (
    <Row style={{borderBottomRightRadius: 15, borderBottomLeftRadius: 15, boxShadow: `0px 4px 8px #707070`, width:420, paddingLeft:10, paddingRight:5}} >
        <Col>
            <Row style={{borderBottom: '2px solid #BFDDDE',paddingBottom:10}}>
                <Col xs={7}>
                    <Row>
                        <Col>
                            <label style={{fontSize:14}}>Job ID</label>
                            <input style={{width:120, marginLeft:15, border: 'none', outline: 'none', borderBottom: '2px solid #E9E8EF'}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label style={{fontSize:14}}>First Name</label>
                        </Col>
                        <Col>
                            <label style={{fontSize:14}}>Last Name</label>
                        </Col>
                    </Row>
                    <Row>
                        <Col >
                            <input style={{width:80, border: 'none', outline: 'none', borderBottom: '2px solid #E9E8EF'}}/>
                        </Col>
                        <Col >
                            <input style={{width:80, border: 'none', outline: 'none', borderBottom: '2px solid #E9E8EF'}}/>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <label style={{fontSize:14}}>Hub ID</label>
                            <input style={{width:120, marginLeft:15, border: 'none', outline: 'none', borderBottom: '2px solid #E9E8EF'}}/>
                        </Col>
                    </Row>
                </Col>
                <Col style={{fontSize:14,}}>
                    <Row style={{marginBottom:5, marginTop:8}}>
                        <Col>
                            Status
                        </Col>
                    </Row>
                    <Row style={{paddingBottom:3}}>
                        <Col>
                            <input type='checkbox' style={{cursor: 'pointer'}}/>
                            <label style={{ marginLeft: 5}}>
                                Assigned
                            </label>
                        </Col>
                    </Row>
                    <Row style={{paddingBottom:3}}>
                        <Col>
                            <input type='checkbox' style={{cursor: 'pointer'}}/>
                            <label style={{ marginLeft: 5}}>
                                In-Progress
                            </label>
                        </Col>
                    </Row>
                    <Row style={{paddingBottom:3}}>
                        <Col>
                            <input type='checkbox' style={{cursor: 'pointer'}}/>
                            <label style={{ marginLeft: 5}}>
                                Resolved
                            </label>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row style={{borderBottom: '2px solid #BFDDDE',paddingBottom:10}}>
                <Col xs={7}>
                    <Row style={{marginLeft:1, marginBottom:2}}>
                        Bin Type
                    </Row>
                    <Row style={{marginBottom:2}}>
                        <Col>
                            <input type='checkbox' style={{cursor: 'pointer'}}/>
                            <label style={{fontSize:14, marginLeft:5}}>
                                Organic
                            </label>
                        </Col>
                        <Col>
                            <input type='checkbox' style={{cursor: 'pointer'}}/>
                            <label style={{fontSize:14, marginLeft:5}}>
                                Glass
                            </label>
                        </Col>
                    </Row>
                    <Row style={{marginBottom:2}}>
                        <Col>
                            <input type='checkbox' style={{cursor: 'pointer'}}/>
                            <label style={{fontSize:14, marginLeft:5}}>
                                Plastic
                            </label>
                        </Col>
                        <Col>
                            <input type='checkbox' style={{cursor: 'pointer'}}/>
                            <label style={{fontSize:14, marginLeft:5}}>
                                Paper
                            </label>
                        </Col>
                    </Row>
                </Col>
                <Col style={{marginTop:3}}>
                    <Row style={{ marginTop:7, marginBottom:5}}>
                        <Col xs={4}>
                            <Image src={from_date} width='65%'/>
                        </Col>
                        <Col>
                            <Row>
                                <label style={{fontSize:12,fontWeight: 'bold', color: '#BFDDDE'}}>
                                    From date
                                </label>
                                <input type="date" style={{fontSize:9, width:105, border:'none', outline:'none', color:'#228693'}}/>
                            </Row>
                        </Col>
                    </Row>
                    <Row style={{marginTop:7, marginBottom:5}}>
                        <Col xs={4}>
                            <Image src={to_date} width='65%'/>
                        </Col>
                        <Col>
                            <Row>
                                <label style={{fontSize:12,fontWeight: 'bold', color: '#BFDDDE'}}>
                                    To date
                                </label>
                                <input type="date" style={{fontSize:9, width:105, border:'none', outline:'none',color: '#BFDDDE'}}/>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className=" mt-2 mb-1 pe-1 px-1">
                <Col>
                    <Row>
                        <Col xs={9} ></Col>
                        <Col>
                            <Row style={{backgroundColor:'#228693', borderRadius:10, paddingBottom:5, paddingTop:5}}>
                                <Col xs={4}>
                                    <Image src={filtericonbutton} width='180%' />
                                </Col>
                                <Col style={{color:'#fff'}}>
                                    Filter
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Col>
    </Row>
  );
}

export default RidesTableFilter;
