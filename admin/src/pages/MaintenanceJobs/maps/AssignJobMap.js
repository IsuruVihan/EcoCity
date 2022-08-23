import React from 'react';
import {Container, Image} from "react-bootstrap";

import map from "../../../assets/images/popup-model-map.png";

const AssignJobMap = () => {
  return (
    <Container>
        <Image src={map} width='100%'/>
    </Container>
  );
}

export default AssignJobMap;
