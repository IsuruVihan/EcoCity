import React from 'react';
import {Container} from "react-bootstrap";

import UpdateMaintenanceCrewMemberForm from "../forms/UpdateMaintenanceCrewMemberForm";
import Modal from "react-bootstrap/Modal";
import CreateMaintenanceCrewMemberForm from "../forms/CreateMaintenanceCrewMemberForm";

const UpdateMaintenanceCrewMemberModal = (props) => {
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
                <UpdateMaintenanceCrewMemberForm/>
            </Modal.Body>
        </Modal>
    );
}

export default UpdateMaintenanceCrewMemberModal;
