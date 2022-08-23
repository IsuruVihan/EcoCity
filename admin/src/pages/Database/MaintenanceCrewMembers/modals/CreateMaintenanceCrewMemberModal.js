import React from 'react';
import {Container} from "react-bootstrap";

import CreateMaintenanceCrewMemberForm from "../forms/CreateMaintenanceCrewMemberForm";
import Modal from "react-bootstrap/Modal";
import CreateTruckDriverForm from "../../TruckDrivers/forms/CreateTruckDriverForm";

const CreateMaintenanceCrewMemberModal = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>New Crew Member</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreateMaintenanceCrewMemberForm/>
            </Modal.Body>
        </Modal>
    );
}

export default CreateMaintenanceCrewMemberModal;
