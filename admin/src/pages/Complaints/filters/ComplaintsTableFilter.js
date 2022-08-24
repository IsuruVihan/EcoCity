import React from 'react';
import {Col, Container, Image, Row} from "react-bootstrap";
import from_date from "../../../assets/images/icons/from-date.png";
import to_date from "../../../assets/images/icons/to-date.png";
import filtericonbutton from "../../../assets/images/icons/filterwhite.png";

const ComplaintsTableFilter = () => {
  return (
    <Row className=" ">
      <Col></Col>
      <Col style={{
        borderBottomRightRadius: 15,
        borderBottomLeftRadius: 15,
        boxShadow: `0px 4px 8px #707070`,
        backgroundColor: 'white',
      }} lg={5}>
        <Row className="m-1">
          <Col>
            <Row>
              <Col>
                <input type='checkbox'
                       style={{cursor: 'pointer'}}/>
                <label
                  style={{fontSize: 11, marginLeft: 5}}>
                  All
                </label>
              </Col>
            </Row>
            <Row>
              <Col>
                <input type='checkbox'
                       style={{cursor: 'pointer'}}/>
                <label
                  style={{fontSize: 11, marginLeft: 5}}>
                  Resolved
                </label>
              </Col>
            </Row>
            <Row>
              <Col>
                <input type='checkbox'
                       style={{cursor: 'pointer'}}/>
                <label
                  style={{fontSize: 11, marginLeft: 5}}>
                  Removed
                </label>
              </Col>
            </Row>
          </Col>
          <Col>
            <Row>
              <Col>
                <input type='checkbox'
                       style={{cursor: 'pointer'}}/>
                <label
                  style={{fontSize: 11, marginLeft: 5}}>
                  Viewed
                </label>
              </Col>
            </Row>
            <Row>
              <Col>
                <input type='checkbox'
                       style={{cursor: 'pointer'}}/>
                <label
                  style={{fontSize: 11, marginLeft: 5}}>
                  In-progress
                </label>
              </Col>
            </Row>
            <Row>
              <Col>
                <input type='checkbox'
                       style={{cursor: 'pointer'}}/>
                <label
                  style={{fontSize: 11, marginLeft: 5}}>
                  Open
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
          paddingBottom: 10
        }}>
          <Col>
            <Row>
              <Col>
                <label
                  style={{fontSize: 12}}>
                  ComplaintID
                </label>
              </Col>
              <Col xs={8}>
                <input
                  style={{
                    width: 130,
                    border: 'none',
                    outline: 'none',
                    borderBottom: '2px solid #E9E8EF'
                  }}/>
              </Col>
            </Row>
            <Row>
              <Col>
                <label
                  style={{fontSize: 12}}>
                  FirstName
                </label>
              </Col>
              <Col xs={8}>
                <input
                  style={{
                    width: 130,
                    border: 'none',
                    outline: 'none',
                    borderBottom: '2px solid #E9E8EF'
                  }}/>
              </Col>
            </Row>
            <Row>
              <Col>
                <label
                  style={{fontSize: 12}}>
                  LastName
                </label>
              </Col>
              <Col xs={8}>
                <input
                  style={{
                    width: 130,
                    border: 'none',
                    outline: 'none',
                    borderBottom: '2px solid #E9E8EF'
                  }}/>
              </Col>
            </Row>
            <Row className="mx-1 mt-3 ">
              <Col style={{textAlign: 'left'}} xs={5}>
                <Image src={from_date} width="30%"/>
              </Col>
              <Col style={{
                textAlign: 'left',
                fontSize: 12,
                color: '#BFDDDE',
                fontWeight: 'bold'
              }}>
                From date
                <input type="date"
                       style={{
                         border: 'none',
                         color: '#228693',
                         outline: 'none'
                       }}/>
              </Col>

            </Row>
            <Row className="mx-1 mt-3">
              <Col style={{textAlign: 'left'}} xs={5}>
                <Image src={to_date} width="30%"/>
              </Col>
              <Col style={{
                textAlign: 'left',
                fontSize: 12,
                fontWeight: 'bold',
                color: '#BFDDDE'
              }}>
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
        <Row className="me-2 mt-2 mb-1 p-1"
             style={{marginLeft: '60%',}}>
          <Col>
            <Row style={{
              backgroundColor: '#228693',
              borderRadius: 10,
              paddingBottom: 5,
              paddingTop: 5
            }}>
              <Col style={{textAlign: 'right',}} xs={4}>
                <Image src={filtericonbutton} width="180%"/>
              </Col>
              <Col style={{
                color: '#fff',
                textAlign: 'left',
                fontSize: 15,
                fontWeight: 'bold',
                paddingTop: 4,
                cursor: 'pointer'
              }}>
                Filter
              </Col>
            </Row>
          </Col>
        </Row>
      </Col>
    </Row>
  );
}

export default ComplaintsTableFilter;
