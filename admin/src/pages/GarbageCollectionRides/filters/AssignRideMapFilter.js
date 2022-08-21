import React from 'react';
import {Row, Col} from "react-bootstrap";
import "../../../assets/styles/GarbageCollectionRides/forms/assignrideform.css";

const AssignRideMapFilter = () => {
  return (
    <Row style={{border:'1px solid red', marginRight:5, paddingLeft:6, paddingRight:6}}>
        <Col>
            <Row style={{fontSize:14}}>
                Bin Type
            </Row>
            <Row style={{borderBottom:'2px solid #E9E8EF'}}>
                <select className='filter-select'>
                    <option value='organic' style={{backgroundColor:'#fff'}}>
                        Organic
                    </option>
                    <option value='glass'>
                        Glass
                    </option>
                    <option value='paper'>
                        Paper
                    </option>
                    <option value='plastic'>
                        Plastic
                    </option>
                </select>
            </Row>
            <Row>
                <Col>
                    <input type='checkbox' style={{cursor: 'pointer'}}/>
                    <label style={{ marginLeft: 10, fontSize:14}}>
                        0-25
                    </label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input type='checkbox' style={{cursor: 'pointer'}}/>
                    <label style={{ marginLeft: 10, fontSize:14}}>
                        26-50
                    </label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input type='checkbox' style={{cursor: 'pointer'}}/>
                    <label style={{ marginLeft: 10, fontSize:14}}>
                        51-75
                    </label>
                </Col>
            </Row>
            <Row>
                <Col>
                    <input type='checkbox' style={{cursor: 'pointer'}}/>
                    <label style={{ marginLeft: 10, fontSize:14}}>
                        76-100
                    </label>
                </Col>
            </Row>
        </Col>

    </Row>
  );
}

export default AssignRideMapFilter;
