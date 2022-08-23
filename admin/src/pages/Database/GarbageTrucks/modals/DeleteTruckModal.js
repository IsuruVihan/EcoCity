import React from 'react';

import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";

const deleteTruckDriverModal = (props) => {
    return (
        <Modal
            {...props}
            size="md"
            aria-labelledby="contained-modal-title-vcenter"
            centered
            backdrop="static"
        >
            <Modal.Header closeButton>
                <Modal.Title>Delete Confirmation</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <div className="alert alert-danger">{'Delete Truck ?'}</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="default" onClick={props.onHide}>
                    Cancel
                </Button>
                <Button variant="danger" onClick={props.onConfirm}>
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default deleteTruckDriverModal;
