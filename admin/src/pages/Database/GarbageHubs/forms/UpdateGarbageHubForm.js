import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

import GarbageHubCurrentLocationMap from "../maps/GarbageHubCurrentLocationMap";
import GarbageHubNewLocationMap from "../maps/GarbageHubNewLocationMap";

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
                  <div>Map goes Here</div>
              </Col>
              <Col lg={12} className='my-2'>
                  <h3>New Location</h3>
                  <div>Latitude</div>
                  <div>Longitude</div>
                  <div>Map goes Here</div>
              </Col>
              <Col lg={12} className='my-2'>
                  <Button>Save</Button>
              </Col>
          </Row>
      </Container>
  );
}

export default UpdateGarbageHubForm;
