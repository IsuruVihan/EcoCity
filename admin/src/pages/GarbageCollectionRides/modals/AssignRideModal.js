import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

import AssignRideForm from "../forms/AssignRideForm";
import filtericon from "../../../assets/images/icons/filter.png";
import AssignRideMap from "../maps/AssignRideMap";


const AssignRideModal = () => {
  return (
    <Container>
      <AssignRideForm/>
    </Container>
  );
}

export default AssignRideModal;
