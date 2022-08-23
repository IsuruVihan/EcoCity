import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import '../../assets/styles/common/Notifications.css';
import NotificationMessage from "./NotificationMessage";

const Notifications = () => {

    const notifications = [
        {
            message: 'Password Change Successfull',
            isRead: false
        },
        {
            message: 'Password Change Successfull',
            isRead: false
        },
        {
            message: 'Password Change Successfull',
            isRead: true
        },
    ];

    const newNotifications = notifications.filter(item => item.isRead === false);
    const oldNotifications = notifications.filter(item => item.isRead === true);

    return (
        <Container className='arrow-top p-3 notification-container position-absolute bg-white' fluid>
            <Row className='fw-bold fs-5 mx-0'> Notifications</Row>
            {newNotifications.length > 0 && <Row className='fs-6 mx-0 mt-2'>
                <Col className='px-0'>New</Col>
                <Col className='px-0 text-end'>Mark all as read</Col>
                <>
                    {
                        newNotifications.map((item, index) => (
                            <NotificationMessage item={item} key={index}/>
                        ))
                    }
                </>

            </Row>}

            <Row className='fs-6 mx-0 mt-2'>
                <Col className='px-0'>Earlier</Col>
                <>
                    {
                        oldNotifications.map((item, index) => (
                            <NotificationMessage item={item} key={index}/>
                        ))
                    }
                </>
            </Row>

        </Container>
    );
}

export default Notifications;
