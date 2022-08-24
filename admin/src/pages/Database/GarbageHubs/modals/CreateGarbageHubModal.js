import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import CreateGarbageHubForm from "../forms/CreateGarbageHubForm";
import Modal from "react-bootstrap/Modal";
import UpdateGarbageHubForm from "../forms/UpdateGarbageHubForm";

const CreateGarbageHubModal = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            keyboard={false}
            scrollable={true}
        >
            <Modal.Header closeButton>
                <Modal.Title>Create Garbage bin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreateGarbageHubForm/>
            </Modal.Body>
        </Modal>
    );
}

export default CreateGarbageHubModal;
