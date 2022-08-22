import React from 'react';
import {Container} from "react-bootstrap";

import CreateTruckDriverForm from "../forms/CreateTruckDriverForm";
import Modal from "react-bootstrap/Modal";
import CreateGarbageHubForm from "../../GarbageHubs/forms/CreateGarbageHubForm";

const CreateTruckDriverModal = (props) => {
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
                <Modal.Title>New Truck Driver</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreateTruckDriverForm/>
            </Modal.Body>
        </Modal>
    );
}

export default CreateTruckDriverModal;
