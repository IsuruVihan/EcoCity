import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import '../../assets/styles/common/Notifications.css';
import NotificationMessage from "./NotificationMessage";

const Notifications = () => {
    return (
        <Container className='arrow-top notification-container position-absolute '>
            <Row> Notifications</Row>
            <Row>
                <Col>New</Col>
                <Col>Mark all as read</Col>
            </Row>
            <NotificationMessage/>
            <NotificationMessage/>
            <NotificationMessage/>
            <NotificationMessage/>
            <Row> <Col>Earlier</Col></Row>
            <NotificationMessage/>
            <NotificationMessage/>
            <NotificationMessage/>
            <NotificationMessage/>
        </Container>
    );
}

export default Notifications;
