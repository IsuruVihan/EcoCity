import React from 'react';
import {Container} from "react-bootstrap";

import UpdateNFCTagForm from "../forms/UpdateNFCTagForm";
import Modal from "react-bootstrap/Modal";
import UpdateMaintenanceCrewMemberForm from "../../MaintenanceCrewMembers/forms/UpdateMaintenanceCrewMemberForm";

const UpdateNFCTagModal = (props) => {
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
                <Modal.Title>Update NFC Tag</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <UpdateNFCTagForm/>
            </Modal.Body>
        </Modal>
    );
}

export default UpdateNFCTagModal;
