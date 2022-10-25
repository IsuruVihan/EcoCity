import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

import AssignRideForm from "../forms/AssignRideForm";
import filtericon from "../../../assets/images/icons/filter.png";
import AssignRideMap from "../maps/AssignRideMap";
import map from "../../../assets/images/popup-model-map.png";


const AssignRideModal = (props) => {
  return (
    <Container>
      <AssignRideForm hide={props.hide}/>
    </Container>
  );
}

export default AssignRideModal;
