import React from 'react';
import {Button, Col, Container, Row} from "react-bootstrap";

import CreateGarbageHubMap from "../maps/CreateGarbageHubMap";

const CreateGarbageHubForm = () => {
  return (
      <Container>
          <Row>
              <Col lg={12}>
                  <div>Latitude</div>
                  <div>Longitude</div>
              </Col>
              <Col lg={12} className='my-2'>
                  <h3>Location</h3>
                  <div>Map goes Here</div>
              </Col>
              <Col lg={12} className='my-2'>
                  <Button>Cancel</Button>
                  <Button>Save</Button>
              </Col>
          </Row>
      </Container>
  );
}

export default CreateGarbageHubForm;
