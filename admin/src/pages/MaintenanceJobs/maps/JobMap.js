import React from 'react';
import {Container, Image} from "react-bootstrap";

import map from "../../../assets/images/popup-model-map.png";

const JobMap = () => {
  return (
    <Container>
      <Image src={map} style={{width: '100%'}}/>
    </Container>
  );
}

export default JobMap;
