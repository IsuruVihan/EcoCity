import React from 'react';
import {Button, Col, Container, Image, Row} from "react-bootstrap";

import GarbageHubCurrentLocationMap from "../maps/GarbageHubCurrentLocationMap";
import GarbageHubNewLocationMap from "../maps/GarbageHubNewLocationMap";

//Temporary imports
import mapImage from '../../../../assets/images/temp/popupMap.png';

const UpdateGarbageHubForm = () => {
    return (
        <Container>
            <Row>
                <Col lg={12}>
                    <div>Hub Id</div>
                    <div>status</div>
                </Col>
                <Col lg={12} className='my-2'>
                    <h3>Current Location</h3>
                    <div style={{height: "200px", borderRadius: "15px"}} className=' modal-map'>

                    </div>
                </Col>
                <Col lg={12} className='my-2'>
                    <h3>New Location</h3>
                    <div>Latitude</div>
                    <div>Longitude</div>
                    <div style={{height: "200px", borderRadius: "15px"}} className=' modal-map'>

                    </div>
                </Col>
                <Col lg={12} className='my-2'>
                    <Button>Save</Button>
                </Col>
          </Row>
      </Container>
  );
}

export default UpdateGarbageHubForm;
