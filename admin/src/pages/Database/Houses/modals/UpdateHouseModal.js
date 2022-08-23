import React from 'react';
import {Container} from "react-bootstrap";

import UpdateHouseForm from "../forms/UpdateHouseForm";
import Modal from "react-bootstrap/Modal";
import CreateHouseForm from "../forms/CreateHouseForm";

const UpdateHouseModal = (props) => {
    return (
        <Modal
            {...props}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
            keyboard={false}
        >
            <Modal.Header closeButton>
                <Modal.Title>Update House Details</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <UpdateHouseForm/>
            </Modal.Body>
        </Modal>
    );
}

export default UpdateHouseModal;
