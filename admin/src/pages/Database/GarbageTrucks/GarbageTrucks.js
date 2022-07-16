import React from 'react';
import {Container} from "react-bootstrap";

import SideNav from "../../../common/SideNav";
import TrucksMap from "./maps/TrucksMap";
import TrucksTable from "./tables/TrucksTable";
import TrucksTableFilter from "./filters/TrucksTableFilter";
import TruckDetailsModal from "./modals/TruckDetailsModal";
import CreateTruckModal from "./modals/CreateTruckModal";
import UpdateTruckModal from "./modals/UpdateTruckModal";

const GarbageTrucks = () => {
  return (
    <Container>
      Garbage trucks
    </Container>
  );
}

export default GarbageTrucks;
