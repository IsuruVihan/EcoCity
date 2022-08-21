import React from 'react';
import ModalDialog from 'react-bootstrap/ModalDialog'

import CreateGarbageHubForm from "../forms/CreateGarbageHubForm";
import Modal from "react-bootstrap/Modal";
import {Button} from "react-bootstrap";

const deleteGarbageBinModal = (props) => {
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
                <div className="alert alert-danger">{'message'}</div>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="default" onClick={props.onHide}>
                    Cancel
                </Button>
                <Button variant="danger">
                    Delete
                </Button>
            </Modal.Footer>
        </Modal>
    );
}

export default deleteGarbageBinModal;
