import React from 'react';
import {Container} from "react-bootstrap";
import UpdateGarbageHubForm from "../forms/UpdateGarbageHubForm";
import Modal from "react-bootstrap/Modal";


const UpdateGarbageHubModal = (props) => {
    const id = props.binid;
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
                <Modal.Title>Edit Garbage bin</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <UpdateGarbageHubForm id={id}/>
            </Modal.Body>
        </Modal>
    );
}

export default UpdateGarbageHubModal;
