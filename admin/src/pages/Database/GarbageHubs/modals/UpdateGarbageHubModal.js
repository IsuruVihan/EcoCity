import React from 'react';
import {Container} from "react-bootstrap";
import UpdateGarbageHubForm from "../forms/UpdateGarbageHubForm";
import Modal from "react-bootstrap/Modal";

const UpdateGarbageHubModal = (props) => {
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
                <Modal.Title>Edit Garbage bin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <UpdateGarbageHubForm/>
            </Modal.Body>
        </Modal>
    );
}

export default UpdateGarbageHubModal;
