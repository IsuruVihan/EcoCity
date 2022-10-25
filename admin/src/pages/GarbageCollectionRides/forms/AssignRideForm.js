import React, {useEffect, useState} from 'react';
import {Container, Row, Col, Image, Collapse} from "react-bootstrap";
// import Select from "react-select";
import {Multiselect} from "multiselect-react-dropdown";
import AssignRideMapFilter from "../filters/AssignRideMapFilter";
import AssignRideMap from "../maps/AssignRideMap";
import "../../../assets/styles/GarbageCollectionRides/forms/assignrideform.css";

import filtericon from "../../../assets/images/icons/filter.png";
import map from "../../../assets/images/popup-model-map.png";
import {useSelector} from "react-redux";
import {createCJ, getInitial} from "../api/api";

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
    const loggedUser = useSelector((state) => state.auth.loggedUser);
    const [open, setOpen] = useState(false);
    const [initialDetails, setInitialDetails] = useState(null);
    const [selectedHubs, setSelectedHubs] = useState(null);
    const [selectedDriver, setSelectedDriver] = useState(null);
    const [selectedBinType, setSelectedBinType] = useState(null);
    const [selectedDate, setSelectedDate] = useState(null);
    const [selecteTruck, setSelecteTruck] = useState(null);

    useEffect(() => {
        getInitial(loggedUser.accessToken, loggedUser.refreshToken).then((result) => {
            setInitialDetails(result.data);
        })
    }, [])

    if (!initialDetails) return;
    const trucks = initialDetails.trucks;
    const hubs = initialDetails.hubs;
    const drivers = initialDetails.drivers;

    const garbageHubOptions = hubs.map((hub) => {
        return hub.id
    })

    //handlers
    const handleOnAssignRide = (e) => {
        e.preventDefault();
        const collectionRide = {
            hubs: selectedHubs,
            driver: selectedDriver,
            truck: selecteTruck,
            binType: selectedBinType,
            date: selectedDate
        }
        console.log(collectionRide)
        createCJ(loggedUser.accessToken, loggedUser.refreshToken, collectionRide).then((res) => {
            console.log(res.data);
        })

    }
    const handleOnHubsSelected = (selectedList) => {
        setSelectedHubs(selectedList);
    }
    const handleOnDriverChanged = (e) => {
        e.preventDefault()
        setSelectedDriver(e.target.value)
    }
    const handleOnBinTypeChanged = (e) => {
        e.preventDefault()
        setSelectedBinType(e.target.value)
    }

    const handleOnTruckChanged = (e) => {
        e.preventDefault()
        setSelecteTruck(e.target.value)
    }

    const handleOnDateChanged = (e) => {
        e.preventDefault()
        setSelectedDate(e.target.value)

    }
    return (
        <Container>
            <form id='collectionRideForm' onSubmit={handleOnAssignRide}>
                <Row>
                    <Col className='loc'>
                        Location
                    </Col>
                    <Col>
                        <Row style={{
                            width: 100,
                            border: '2px solid #BFDDDE',
                            marginLeft: 110,
                            borderRadius: 10,
                            cursor: 'pointer'
                        }}
                             onClick={() => setOpen(!open)}>
                            <Col aria-controls="example-collapse-text" aria-expanded={open}>
                                Filter
                            </Col>
                            <Col>
                                <Image src={filtericon} width='100%'/>
                            </Col>
                        </Row>
                        <Row style={{position: 'absolute', right: 25, paddingTop: 8, zIndex: 2}}>
                            <Collapse in={open}>
                                <Container id="example-collapse-text" style={{backgroundColor: '#fff'}}>
                                    <AssignRideMapFilter/>
                                </Container>
                            </Collapse>
                        </Row>
                    </Col>
                </Row>
                <Row>
                    <Col style={{marginTop: 10, marginBottom: 10}}>
                        <Image src={map} width="100%"/>
                    </Col>
                </Row>
                <Row>
                    <Col>
                        <Row>
                            <Col style={{marginRight: 12}}>
                                <Row>
                                    <Col>
                                        <Row>
                                            <label style={{fontSize: 14, fontWeight: 'bold', paddingBottom: 4,}}>
                                                Garbage Hub ID
                                            </label>
                                        </Row>
                                        <Row style={{
                                            marginLeft: 1,
                                            border: '2px solid #E8F5F6',
                                            borderRadius: 8,
                                            outline: 'none',
                                            marginBottom: 10
                                        }}>
                                            <Multiselect
                                                customArrow={{}}
                                                hidePlaceholder
                                                isObject={false}
                                                keepSearchTerm
                                                onKeyPressFn={function noRefCheck() {
                                                }}
                                                onRemove={function noRefCheck() {
                                                }}
                                                onSearch={function noRefCheck() {
                                                }}
                                                onSelect={handleOnHubsSelected}
                                                options={garbageHubOptions}
                                                placeholder="select"
                                                showCheckbox
                                                style={{
                                                    backgroundColor: 'yellow',
                                                    width: 145
                                                }}
                                            />

                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <label style={{fontSize: 14, fontWeight: 'bold', paddingBottom: 4}}>Driver
                                                ID</label>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Row style={{
                                                    marginLeft: 1,
                                                    border: '2px solid #E8F5F6',
                                                    borderRadius: 8,
                                                    paddingTop: 2,
                                                    paddingBottom: 4,
                                                    color: '#042434',
                                                    fontSize: 13,
                                                    marginBottom: 10
                                                }}>
                                                    <Col xs={8}>
                                                        <select className='select' onChange={handleOnDriverChanged}>
                                                            <option value='value1'>--select--</option>
                                                            {
                                                                drivers.map((driver) => {
                                                                    return <option key={driver.id}
                                                                                   value={driver.id}>{driver.name + ' (' + driver.id + ')'}</option>
                                                                })
                                                            }
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
                                            <label style={{fontSize: 14, fontWeight: 'bold', paddingBottom: 4}}>
                                                Bin Type
                                            </label>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Row style={{
                                                    marginLeft: 1,
                                                    border: '2px solid #E8F5F6',
                                                    borderRadius: 8,
                                                    paddingTop: 2,
                                                    paddingBottom: 4,
                                                    color: '#042434',
                                                    fontSize: 13,
                                                    marginBottom: 10
                                                }}>
                                                    <Col xs={8}>
                                                        <select className='select' onChange={handleOnBinTypeChanged}>
                                                            <option value=''>--select--</option>
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
                            <Col style={{marginLeft: 12}}>
                                <Row>
                                    <Col>
                                        <Row>
                                            <label style={{fontSize: 14, fontWeight: 'bold', paddingBottom: 4}}>
                                                Date
                                            </label>
                                        </Row>
                                        <Row style={{marginLeft: 1, marginBottom: 10}}>
                                            <input type='date' style={{
                                                border: '2px solid #E8F5F6',
                                                outline: 'none',
                                                borderRadius: 8,
                                                paddingTop: 2,
                                                paddingBottom: 4,
                                                color: '#042434',
                                                fontSize: 13,
                                                marginBottom: 4
                                            }}
                                                   onChange={handleOnDateChanged}/>
                                        </Row>
                                    </Col>
                                </Row>
                                <Row>
                                    <Col>
                                        <Row>
                                            <label style={{fontSize: 14, fontWeight: 'bold', paddingBottom: 4}}>
                                                Truck Plate Number
                                            </label>
                                        </Row>
                                        <Row>
                                            <Col>
                                                <Row style={{
                                                    marginLeft: 1,
                                                    border: '2px solid #E8F5F6',
                                                    borderRadius: 8,
                                                    paddingTop: 2,
                                                    paddingBottom: 4,
                                                    color: '#042434',
                                                    fontSize: 13,
                                                    marginBottom: 10
                                                }}>
                                                    <Col xs={8}>
                                                        <select className='select1' onChange={handleOnTruckChanged}>
                                                            <option value='value1'>--select--</option>
                                                            {
                                                                trucks.map((truck) => {
                                                                    return <option key={truck.id}
                                                                                   value={truck.id}>{truck.numberplate}</option>
                                                                })
                                                            }
                                                        </select>
                                                    </Col>
                                                </Row>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                                {/*<Row>*/}
                                {/*    <Col>*/}
                                {/*        <Row>*/}
                                {/*            <label style={{fontSize: 14, fontWeight: 'bold', paddingBottom: 4}}>*/}
                                {/*                Collected Weight*/}
                                {/*            </label>*/}
                                {/*        </Row>*/}
                                {/*        <Row style={{marginLeft: 1}}>*/}
                                {/*            <input style={{*/}
                                {/*                border: '2px solid #E8F5F6',*/}
                                {/*                outline: 'none',*/}
                                {/*                borderRadius: 8,*/}
                                {/*                paddingTop: 2,*/}
                                {/*                paddingBottom: 4,*/}
                                {/*                color: '#042434',*/}
                                {/*                fontSize: 13,*/}
                                {/*                marginBottom: 4*/}
                                {/*            }}/>*/}
                                {/*        </Row>*/}
                                {/*    </Col>*/}
                                {/*</Row>*/}
                            </Col>
                        </Row>
                        <Row>
                            <Col style={{marginLeft: 338, marginTop: 5}}>
                                <button style={{
                                    border: 'none',
                                    outline: 'none',
                                    cursor: 'pointer',
                                    backgroundColor: '#228693',
                                    color: '#fff',
                                    fontWeight: 'bold',
                                    paddingBottom: 8,
                                    paddingTop: 8,
                                    paddingLeft: 20,
                                    paddingRight: 20,
                                    borderRadius: 8
                                }}
                                        type='submit'
                                >
                                    Assign
                                </button>
                            </Col>
                        </Row>
                    </Col>
                </Row>
            </form>
        </Container>
    );
}

export default AssignRideForm;
