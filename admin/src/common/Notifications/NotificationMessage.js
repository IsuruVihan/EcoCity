import React from 'react';
import {Col, Image} from "react-bootstrap";
import profileImage from '../../assets/images/admin.png';

const NotificationMessage = (props) => {

    return (
        <Col lg={12}
             className={'ps-1 py-2 fs-6 mt-1 notification-message ' + (!props.item.isRead ? 'notification-new' : '')}>
            <Image src={profileImage} alt='notification-user' fluid width='35px' className='me-2'/>
            {props.item.message}
        </Col>
    );
}

export default NotificationMessage;
