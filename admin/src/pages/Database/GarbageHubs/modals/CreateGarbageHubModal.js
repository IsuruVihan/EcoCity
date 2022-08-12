import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import CreateGarbageHubForm from "../forms/CreateGarbageHubForm";
import Modal from "react-bootstrap/Modal";

const CreateGarbageHubModal = (props) => {
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
                <Modal.Title>New Garbage Hub</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreateGarbageHubForm/>
            </Modal.Body>
        </Modal>
    );
}

export default CreateGarbageHubModal;
