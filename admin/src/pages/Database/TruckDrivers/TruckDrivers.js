import React from 'react';
import {Container} from "react-bootstrap";

import SideNav from "../../../common/SideNav";
import TruckDriversMap from "./maps/TruckDriversMap";
import TruckDriversTable from "./tables/TruckDriversTable";
import TruckDriversTableFilter from "./filters/TruckDriversTableFilter";
import CreateTruckDriverModal from "./modals/CreateTruckDriverModal";
import ViewTruckDriverModal from "./modals/ViewTruckDriverModal";
import UpdateTruckDriverModal from "./modals/UpdateTruckDriverModal";

const TruckDrivers = () => {
  return (
    <Container>
      Truck drivers
    </Container>
  );
}

export default TruckDrivers;
