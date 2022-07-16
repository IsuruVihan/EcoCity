import React from 'react';
import {Container} from "react-bootstrap";

import SideNav from "../../common/SideNav";
import JobsTableFilter from "./filters/JobsTableFilter";
import JobsTable from "./tables/JobsTable";
import ViewJobModal from "./modals/ViewJobModal";
import AssignJobModal from "./modals/AssignJobModal";

const MaintenanceJobs = () => {
  return (
    <Container>
      Maintenance jobs
    </Container>
  );
}

export default MaintenanceJobs;
