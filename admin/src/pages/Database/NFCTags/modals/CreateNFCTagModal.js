import React from 'react';
import {Container} from "react-bootstrap";

import CreateNFCTagForm from "../forms/CreateNFCTagForm";
import Modal from "react-bootstrap/Modal";
import CreateMaintenanceCrewMemberForm from "../../MaintenanceCrewMembers/forms/CreateMaintenanceCrewMemberForm";

const CreateNFCTagModal = (props) => {
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
                <Modal.Title>New NFC Tags</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreateNFCTagForm/>
            </Modal.Body>
        </Modal>
    );
}

export default CreateNFCTagModal;
