import React, {useState} from 'react';
import {Button, Col, Container, FormControl, Image, Row} from "react-bootstrap";

import GarbageHubCurrentLocationMap from "../maps/GarbageHubCurrentLocationMap";
import GarbageHubNewLocationMap from "../maps/GarbageHubNewLocationMap";

//Temporary imports
import mapImage from '../../../../assets/images/temp/popupMap.png';
import {useSelector} from "react-redux";
import {getBin, updateBin} from "../api/api";

const UpdateGarbageHubForm = (props) => {
    const id = props.id;
    const [binDetails, setBinDetails] = useState(null);
    const [newLatitiude, setNewLatitiude] = useState('');
    const [newLongitude, setLewLongitude] = useState('');
    // if (id === '' || id === 'undefined' || id === null) return;
    const loggedUser = useSelector((state) => state.auth.loggedUser);

    getBin(loggedUser.accessToken, loggedUser.refreshToken, id).then((res) => {
        setBinDetails(res.data.bin[0]);
    })

    const handleLatitudeChange = (e) => {
        setNewLatitiude(e.target.value)
    }
    const handleLongitudeChange = (e) => {
        setLewLongitude(e.target.value)
    }

    const handleOnSubmit = () => {
        const newLocation = {
            id: id,
            lat: newLatitiude,
            lon: newLongitude
        }
        updateBin(loggedUser.accessToken, loggedUser.refreshToken, newLocation).then((res) => {
            alert(res.data.status);
        })
    }

    if (!binDetails) return;
    return (
        <Container>
            <Row>
                <Col lg={3}>
                    <div className='h5'>Hub Id</div>
                </Col>
                <Col lg={9}>
                    <FormControl type={'text'} disabled value={binDetails.GarbageHub.id}
                                 style={{backgroundColor: "white"}}/>
                </Col>
                <Col lg={3} className='mt-2'>
                    <div className='h5'>status</div>
                </Col>
                <Col lg={9} className='mt-2'>
                    <FormControl type={'text'} disabled value={binDetails.GarbageHub.status}
                                 style={{backgroundColor: "white"}}/>
                </Col>
                <Col lg={12} className='my-2'>
                    <h5>Current Location</h5>
                    <div style={{height: "200px", borderRadius: "15px"}} className=' modal-map'>

                    </div>
                </Col>
                <Col lg={12} className='my-2 '>
                    <h5 className='mb-3'>New Location</h5>
                    <Row>
                        <Col lg={3}>
                            <div className='h5'>Latitude</div>
                        </Col>
                        <Col lg={9}>
                            <FormControl type={'text'} value={newLatitiude} style={{backgroundColor: "white"}}
                                         onChange={handleLatitudeChange}
                            />
                        </Col>
                        <Col lg={3} className='my-2'>
                            <div className='h5'>Longitude</div>
                        </Col>
                        <Col lg={9} className='my-2'>
                            <FormControl type={'text'} value={newLongitude} style={{backgroundColor: "white"}}
                                         onChange={handleLongitudeChange}
                            />
                        </Col>
                    </Row>
                    <div style={{height: "200px", borderRadius: "15px"}} className=' modal-map'>

                    </div>
                </Col>
                <Col lg={12} className='my-2 d-flex justify-content-end px-0'>
                    <Button style={{backgroundColor: "#228693"}} className='px-3' onClick={handleOnSubmit}>Save</Button>
                </Col>
            </Row>
        </Container>
    );
}

export default UpdateGarbageHubForm;
