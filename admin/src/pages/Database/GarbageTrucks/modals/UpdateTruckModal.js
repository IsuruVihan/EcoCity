import React from 'react';
import {Container} from "react-bootstrap";

import UpdateTruckForm from "../forms/UpdateTruckForm";
import Modal from "react-bootstrap/Modal";
import CreateTruckForm from "../forms/CreateTruckForm";

const UpdateTruckModal = (props) => {
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
                <Modal.Title>Update Truck </Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <UpdateTruckForm/>
            </Modal.Body>
        </Modal>
    );
}

export default UpdateTruckModal;
