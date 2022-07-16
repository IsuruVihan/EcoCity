import React from 'react';
import {Container} from "react-bootstrap";

import SideNav from "../../../common/SideNav";
import GarbageHubsTable from "./tables/GarbageHubsTable";
import GarbageHubsTableFilter from "./filters/GarbageHubsTableFilter";
import GarbageHubsMap from "./maps/GarbageHubsMap";
import CreateGarbageHubModal from "./modals/CreateGarbageHubModal";
import GarbageHubDetailsModal from "./modals/GarbageHubDetailsModal";
import UpdateGarbageHubModal from "./modals/UpdateGarbageHubModal";

const GarbageHubs = () => {
  return (
    <Container>
      Garbage hubs
    </Container>
  );
}

export default GarbageHubs;
