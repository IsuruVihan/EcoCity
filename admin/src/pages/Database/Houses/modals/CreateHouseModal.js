import React from 'react';
import {Container} from "react-bootstrap";

import CreateHouseForm from "../forms/CreateHouseForm";
import Modal from "react-bootstrap/Modal";
import CreateMaintenanceCrewMemberForm from "../../MaintenanceCrewMembers/forms/CreateMaintenanceCrewMemberForm";

const CreateHouseModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            keyboard={false}
            dialogClassName='modal-60w'
        >
            <Modal.Header closeButton>
                <Modal.Title>New House</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreateHouseForm/>
            </Modal.Body>
        </Modal>
    );
}

export default CreateHouseModal;
