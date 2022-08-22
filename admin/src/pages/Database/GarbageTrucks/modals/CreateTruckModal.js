import React from 'react';
import {Container} from "react-bootstrap";

import CreateTruckForm from "../forms/CreateTruckForm";
import Modal from "react-bootstrap/Modal";
import CreateTruckDriverForm from "../../TruckDrivers/forms/CreateTruckDriverForm";

const CreateTruckModal = (props) => {
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
                <Modal.Title>New Truck</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <CreateTruckForm/>
            </Modal.Body>
        </Modal>
    );
}

export default CreateTruckModal;
