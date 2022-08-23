import React from 'react';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import {Container, Row, Col} from "react-bootstrap";

import './TeamMemberCard.css'
import isuru from '../../../assets/images/isuru.jpg'
import harsha from '../../../assets/images/harsha.png'
import pavithra from '../../../assets/images/pavithra.jpg'
import induni from '../../../assets/images/Induni.jpg'
import omaya from '../../../assets/images/omaya.jpg'

const TeamMemberCard = () => {
    return (
        <Container className="p-0" fluid>
            <Row>
                <div className='teamMember-icon p-1'></div>

                <div>
                    <CardGroup style={{textAlign: 'center', color: '#042434'}}>
                        <Card border="0">
                            <Card.Img variant="top" src={omaya} className="img-fluid rounded-pill p-5 "/>
                            <Card.Body>
                                <Card.Title>W. M. T. Omaya</Card.Title>
                                <Card.Text>19001096</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="0">
                            <Card.Img variant="top" src={pavithra} className="img-responsive rounded-pill p-5"/>
                            <Card.Body>
                                <Card.Title>G. P. Sandamini</Card.Title>
                                <Card.Text>19001517</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="0">
                            <Card.Img variant="top" src={isuru} className="img-responsive rounded-pill p-5"/>
                            <Card.Body>
                                <Card.Title>B. A. I. V. Harischandra</Card.Title>
                                <Card.Text>19020333</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="0">
                            <Card.Img variant="top" src={harsha} className="img-responsive rounded-pill p-5"/>
                            <Card.Body>
                                <Card.Title>A. W. A. V. H. Abeyvickrama</Card.Title>
                                <Card.Text>19020031</Card.Text>
                            </Card.Body>
                        </Card>
                        <Card border="0">
                            <Card.Img variant="top" src={induni} className="img-responsive rounded-pill p-5"/>
                            <Card.Body>
                                <Card.Title>W. B. M. I. J. Dulanjalee</Card.Title>
                                <Card.Text>19020228</Card.Text>
                            </Card.Body>
                        </Card>
                    </CardGroup>
                </div>
            </Row>
        </Container>
    );
}
export default TeamMemberCard;
