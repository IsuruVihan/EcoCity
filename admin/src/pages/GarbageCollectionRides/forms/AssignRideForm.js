import React, {useState} from 'react';
import {Container, Row, Col, Image, Collapse} from "react-bootstrap";
// import Select from "react-select";
import {Multiselect} from "multiselect-react-dropdown";
import AssignRideMapFilter from "../filters/AssignRideMapFilter";
import AssignRideMap from "../maps/AssignRideMap";
import "../../../assets/styles/GarbageCollectionRides/forms/assignrideform.css";

import filtericon from "../../../assets/images/icons/filter.png";

const AssignRideForm = () => {
    const styles = {
        multiselectContainer: () => { // To change css for multiselect (Width,height,etc..)

        },
        searchBox: () => { // To change search box element look
    //         border: none;
    //         font-size: 10px;
    // min-height: 50px;
},
    inputField: () => { // To change input field position or margin
        // margin: 5px;
    },
    chips: () => { // To change css chips(Selected options)
        // background: red;
    },
    optionContainer: () => { // To change css for option container
        // border: 2px solid;
    },
    option: () => { // To change css for dropdown options
        // color: blue;
    },
    groupHeading: () => { // To chanage group heading style

    }
        // multiValue: styles => {
        //     return {
        //         ...styles,
        //         backgroundColor: "white"
        //     };
        // }
    };

    const [open, setOpen] = useState(false);
  return (
    <Container>
      <Row style={{border:'1px solid red'}}>
          <Col className='loc'>
              Location
          </Col>
          <Col>
              <Row style={{width:100, border:'2px solid #BFDDDE',marginLeft:110, borderRadius:10, cursor:'pointer'}}
                   onClick={() => setOpen(!open)}>
                  <Col aria-controls="example-collapse-text" aria-expanded={open}>
                      Filter
                  </Col>
                  <Col>
                      <Image src={filtericon} width='100%'/>
                  </Col>
              </Row>
              <Row style={{position: 'absolute', right: 25, paddingTop: 8, zIndex:2}}>
                  <Collapse in={open}>
                      <Container id="example-collapse-text" style={{backgroundColor:'#fff'}}>
                          <AssignRideMapFilter/>
                      </Container>
                  </Collapse>
              </Row>
          </Col>
      </Row>
      <Row>
          <Col style={{border:'1px solid blue'}}>
              <AssignRideMap/>
          </Col>
      </Row>
      <Row>
          <Col>
              <Row>
                  <Col style={{ marginRight:12}}>
                      <Row>
                          <Col>
                              <Row>
                                  <label style={{fontSize:14, fontWeight:'bold', paddingBottom:4, }}>
                                      Garbage Hub ID
                                  </label>
                              </Row>
                              <Row style={{ marginLeft:1 ,border:'2px solid #E8F5F6', borderRadius:8 , outline:'none' }}>
                                  {/*<Multiselect*/}
                                  {/*    customArrow={{}}*/}
                                  {/*    hidePlaceholder*/}
                                  {/*    isObject={false}*/}
                                  {/*    keepSearchTerm*/}
                                  {/*    onKeyPressFn={function noRefCheck(){}}*/}
                                  {/*    onRemove={function noRefCheck(){}}*/}
                                  {/*    onSearch={function noRefCheck(){}}*/}
                                  {/*    onSelect={function noRefCheck(){}}*/}
                                  {/*    options={[*/}
                                  {/*        'Aoption 1',*/}
                                  {/*        'Boption2',*/}
                                  {/*        'Coption3',*/}
                                  {/*        'Doption4',*/}
                                  {/*        'Eoption 5'*/}
                                  {/*    ]}*/}
                                  {/*    placeholder="select"*/}
                                  {/*    showCheckbox*/}
                                  {/*    style={{*/}
                                  {/*        backgroundColor: 'yellow',*/}
                                  {/*        width: 145*/}
                                  {/*    }}*/}
                                  {/*/>*/}
                                  A
                              </Row>
                          </Col>
                      </Row>
                      <Row>
                          <Col>
                              <Row>
                                  <label style={{fontSize:14, fontWeight:'bold',paddingBottom:4}}>Driver ID</label>
                              </Row>
                              <Row>
                                  <Col>
                                  <Row style={{marginLeft:1, border:'2px solid #E8F5F6', borderRadius:8,paddingTop:2, paddingBottom:4, color:'#042434', fontSize:13,marginBottom:4}}>
                                      <Col xs={8}>
                                          <select className='select' >
                                              <option value='value1'>--select--</option>
                                              <option value='value2'>value2</option>
                                              <option value='value3'>value3</option>
                                          </select>
                                      </Col>
                                  </Row>
                                  </Col>
                              </Row>
                          </Col>
                      </Row>
                      <Row>
                          <Col>
                              <Row>
                                  <label style={{fontSize:14, fontWeight:'bold',paddingBottom:4}}>
                                      Bin Type
                                  </label>
                              </Row>
                              <Row>
                                  <Col>
                                  <Row style={{marginLeft:1, border:'2px solid #E8F5F6', borderRadius:8,paddingTop:2, paddingBottom:4, color:'#042434', fontSize:13,marginBottom:4}}>
                                      <Col xs={8}>
                                          <select className='select'>
                                              <option value=''></option>
                                              <option value='organic'>Organic</option>
                                              <option value='glass'>Glass</option>
                                              <option value='paper'>Paper</option>
                                              <option value='plastic'>Plastic</option>
                                          </select>
                                      </Col>
                                  </Row>
                                  </Col>
                              </Row>
                          </Col>
                      </Row>
                  </Col>
                  <Col style={{marginLeft:12}}>
                      <Row>
                          <Col>
                              <Row>
                                  <label style={{fontSize:14, fontWeight:'bold',paddingBottom:4}}>
                                      Date
                                  </label>
                              </Row>
                              <Row style={{ marginLeft:1}}>
                                  <input type='date' style={{border:'2px solid #E8F5F6',outline:'none', borderRadius:8,paddingTop:2, paddingBottom:4, color:'#042434', fontSize:13,marginBottom:4  }}/>
                              </Row>
                          </Col>
                      </Row>
                      <Row>
                          <Col>
                              <Row>
                                  <label style={{fontSize:14, fontWeight:'bold',paddingBottom:4}}>
                                      Truck Plate Number
                                  </label>
                              </Row>
                              <Row>
                                  <Col>
                                  <Row style={{marginLeft:1, border:'2px solid #E8F5F6', borderRadius:8,paddingTop:2, paddingBottom:4, color:'#042434', fontSize:13,marginBottom:4}}>
                                      <Col xs={8}>
                                          <select className='select1'>
                                              <option value='value1'></option>
                                              <option value='value2'>value2</option>
                                              <option value='value3'>value3</option>
                                              <option value='value4'>value4</option>
                                          </select>
                                      </Col>
                                  </Row>
                                  </Col>
                              </Row>
                          </Col>
                      </Row>
                      <Row>
                          <Col>
                              <Row>
                                  <label style={{fontSize:14, fontWeight:'bold',paddingBottom:4}}>
                                      Collected Weight
                                  </label>
                              </Row>
                              <Row style={{ marginLeft:1}}>
                                  <input style={{border:'2px solid #E8F5F6',outline:'none', borderRadius:8,paddingTop:2, paddingBottom:4, color:'#042434', fontSize:13,marginBottom:4  }}/>
                              </Row>
                          </Col>
                      </Row>
                  </Col>
              </Row>
              <Row>
                  <Col style={{marginLeft:338,marginTop:5}}>
                      <button style={{border:'none', outline:'none',cursor:'pointer', backgroundColor:'#228693', color:'#fff',fontWeight:'bold', paddingBottom:8, paddingTop:8, paddingLeft:20, paddingRight:20, borderRadius:8}}>
                          Assign
                      </button>
                  </Col>
              </Row>
          </Col>
      </Row>
    </Container>
  );
}

export default AssignRideForm;
