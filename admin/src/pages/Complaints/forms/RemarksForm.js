import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

import remarks from "../../../assets/images/icons/remarks.png";

const RemarksForm = () => {
  return (
    <Container>
        <Row>
            <Col>
                <Row>
                    <Col style={{marginRight:15 , marginLeft:15 , fontSize:13, fontWeight:'bold', paddingBottom:5}}>
                        <Row style={{paddingBottom:5}}>Complained Date</Row>
                        <Row>
                            <input type="text"
                                   style={{outline:'none', border:'1px solid #E8F5F6', borderRadius:8, paddingBottom:5, fontSize:12}}/>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col style={{marginRight:15 , marginLeft:15, fontSize:13, fontWeight:'bold', paddingBottom:5}}>
                        <Row style={{paddingBottom:5}}>Description</Row>
                        <Row>
                            <input type="text"
                                   style={{outline:'none', border:'1px solid #E8F5F6', borderRadius:8, paddingBottom:5, fontSize:12}}/>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col style={{marginRight:15 , marginLeft:15, fontSize:13, fontWeight:'bold', paddingBottom:5}}>
                        <Row style={{paddingBottom:5}}>Uploaded Files</Row>
                        <Row>
                            <input type="text"
                                   style={{outline:'none', border:'1px solid #E8F5F6', paddingBottom:5, fontSize:12}}/>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col style={{marginRight:15 , marginLeft:15, fontSize:13, fontWeight:'bold', paddingBottom:5}}>
                        <Row style={{paddingBottom:5}}>Remarks</Row>
                        <Row  style={{outline:'none', border:'1px solid #E8F5F6', borderRadius:8, paddingBottom:5, fontSize:12}}>
                            <Col xs={10}>
                                <input type="text" style={{border:'none', outline:'none' , width:350}}/>
                            </Col>
                            <Col style={{marginTop:2 , textAlign:'right'}}>
                                <Image src={remarks} width='50%'/>
                            </Col>

                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col
                        style={{border:'1px solid green', marginLeft:110, marginRight:110, display:'flex', justifyContent:'space-evenly'}}>
                        <button
                            style={{width:100 ,fontSize:15, padding:5, borderRadius:8, border:'none'}}>
                            Reject
                        </button>
                        <button
                            style={{width:100 ,fontSize:15, padding:5, borderRadius:8, border:'none', backgroundColor:'#228693', color:'#fff', fontWeight:'bold'}}>
                            Resolve
                        </button>
                    </Col>
                </Row>
            </Col>
        </Row>
    </Container>
  );
}

export default RemarksForm;
