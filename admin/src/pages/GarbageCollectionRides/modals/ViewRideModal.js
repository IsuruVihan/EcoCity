import React from 'react';
import {Container, Col, Row, Image} from "react-bootstrap";

import RideMap from "../maps/RideMap";
import "../../../assets/styles/GarbageCollectionRides/tables/table.css";

import view_collection_ride from "../../../assets/images/view-collection-ride.png";

const ViewRideModal = () => {
    const ride = {
        job_status:'assigned',
        garbage_hub_id:'CMB-7-12',
        driver_id:'Harith Kumar',
        bin_type:'paper',
        job_id:'1234',
        date:'06/07/2022',
        truck_plate_number:'NC-5205',
        collected_weight:'-'
    }
    let status = 'assigned';
    const changeColor=(status)=>{
        let classes = ' label ' ;
        if(status === 'assigned') {
            classes += 'state-assigned'
        }
        else if(status === 'completed') {
            classes += 'state-completed'
        }
        else {
            classes += 'state-ongoing'
        }
        return  classes;
    }

    return (
        <Container style={{border:'1px solid red'}}>
            <Row style={{border:'1px solid green'}}>
                <Col style={{textAlign:'center'}}>
                    <Image src={view_collection_ride} width='35%'/>
                </Col>
            </Row>
            <Row>
                <RideMap/>
            </Row>
            <Row>
                <Col style={{ marginRight:12}}>
                    <Row>
                        <Col>
                            <Row>
                                <label style={{fontSize:14, fontWeight:'bold',paddingBottom:4, }}>Job Status</label>
                            </Row>
                            <Row style={{ marginLeft:1}}>
                                <label className={changeColor(status)}
                                       style={{border:'2px solid #E8F5F6', borderRadius:8,paddingTop:2, paddingBottom:4,width:80, fontSize:13,marginBottom:4 }}>
                                    {status}
                                </label>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <label style={{fontSize:14, fontWeight:'bold',paddingBottom:4}}>Garbage Hub ID</label>
                            </Row>
                            <Row style={{ marginLeft:1}}>
                                <label style={{border:'2px solid #E8F5F6', borderRadius:8,paddingTop:2, paddingBottom:4, color:'#042434', fontSize:13,marginBottom:4  }}>
                                    {ride.garbage_hub_id}
                                </label>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <label style={{fontSize:14, fontWeight:'bold',paddingBottom:4}}>Driver ID</label>
                            </Row>
                            <Row style={{ marginLeft:1}}>
                                <label style={{border:'2px solid #E8F5F6', borderRadius:8,paddingTop:2, paddingBottom:4, color:'#042434', fontSize:13,marginBottom:4  }}>
                                    {ride.driver_id}
                                </label>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <label style={{fontSize:14, fontWeight:'bold',paddingBottom:4}}>Bin Type</label>
                            </Row>
                            <Row style={{ marginLeft:1}}>
                                <label style={{border:'2px solid #E8F5F6', borderRadius:8,paddingTop:2, paddingBottom:4, color:'#042434', fontSize:13,marginBottom:4  }}>
                                    {ride.bin_type}
                                </label>
                            </Row>
                        </Col>
                    </Row>
                </Col>
                <Col style={{marginLeft:12}}>
                    <Row>
                        <Col>
                            <Row>
                                <label style={{fontSize:14, fontWeight:'bold',paddingBottom:4}}>Job ID</label>
                            </Row>
                            <Row style={{ marginLeft:1}}>
                                <label style={{border:'2px solid #E8F5F6', borderRadius:8,paddingTop:2, paddingBottom:4, color:'#042434', fontSize:13,marginBottom:4  }}>
                                    {ride.job_id}
                                </label>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <label style={{fontSize:14, fontWeight:'bold',paddingBottom:4}}>Date</label>
                            </Row>
                            <Row style={{ marginLeft:1}}>
                                <label style={{border:'2px solid #E8F5F6', borderRadius:8,paddingTop:2, paddingBottom:4, color:'#042434', fontSize:13,marginBottom:4  }}>
                                    {ride.date}
                                </label>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <label style={{fontSize:14, fontWeight:'bold',paddingBottom:4}}>Truck Plate Number</label>
                            </Row>
                            <Row style={{ marginLeft:1}}>
                                <label style={{border:'2px solid #E8F5F6', borderRadius:8,paddingTop:2, paddingBottom:4, color:'#042434', fontSize:13,marginBottom:4  }}>
                                    {ride.truck_plate_number}
                                </label>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col>
                            <Row>
                                <label style={{fontSize:14, fontWeight:'bold',paddingBottom:4}}>Collected Weight</label>
                            </Row>
                            <Row style={{ marginLeft:1}}>
                                <label style={{border:'2px solid #E8F5F6', borderRadius:8,paddingTop:2, paddingBottom:4, color:'#042434', fontSize:13,marginBottom:4  }}>
                                    {ride.collected_weight}
                                </label>
                            </Row>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default ViewRideModal;