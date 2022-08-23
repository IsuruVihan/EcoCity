import React from 'react';
import {Container, Image} from "react-bootstrap";

import map from "../../../assets/images/area-map.png";

const Map = () => {
  return (
    <Container>
      <Image src={map} height="40%"/>
    </Container>
  );
}

export default Map;
