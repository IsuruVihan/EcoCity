import React from 'react';
import {Container} from "react-bootstrap";

import UpdateTruckDriverForm from "../forms/UpdateTruckDriverForm";
import Modal from "react-bootstrap/Modal";
import CreateTruckDriverForm from "../forms/CreateTruckDriverForm";

const UpdateTruckDriverModal = (props) => {

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
                <Modal.Title>Update Truck Driver</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <UpdateTruckDriverForm/>
            </Modal.Body>
        </Modal>
    );
}

export default UpdateTruckDriverModal;
