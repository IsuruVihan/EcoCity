import React from 'react';
import {Container} from "react-bootstrap";

import SideNav from "../../../common/SideNav";
import MaintenanceCrewMap from "./maps/MaintenanceCrewMap";
import MaintenanceCrewTable from "./tables/MaintenanceCrewTable";
import MaintenanceCrewTableFilter from "./filters/MaintenanceCrewTableFilter";
import MaintenanceCrewMemberViewModal from "./modals/MaintenanceCrewMemberViewModal";
import CreateMaintenanceCrewMemberModal from "./modals/CreateMaintenanceCrewMemberModal";
import UpdateMaintenanceCrewMemberModal from "./modals/UpdateMaintenanceCrewMemberModal";

const MaintenanceCrewMembers = () => {
  return (
    <Container>
      Maintenance crew members
    </Container>
  );
}

export default MaintenanceCrewMembers;
