import React from 'react';
import {Container} from "react-bootstrap";

import SideNav from "../../common/SideNav";
import RidesTableFilter from "./filters/RidesTableFilter";
import RidesTable from "./tables/RidesTable";
import ViewRideModal from "./modals/ViewRideModal";
import AssignRideModal from "./modals/AssignRideModal";

const GarbageCollectionRides = () => {
  return (
    <Container>
      Garbage collection rides
    </Container>
  );
}

export default GarbageCollectionRides;
