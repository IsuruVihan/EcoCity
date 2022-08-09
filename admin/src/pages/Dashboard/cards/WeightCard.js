import React from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

import totalGarbage from '../../../assets/images/staitstics-dump.png';
import organicBin from '../../../assets/images/organic.png';
import plasticBin from '../../../assets/images/plastic.png';
import paperBin from '../../../assets/images/paper.png';
import glassBin from '../../../assets/images/glass.png';

const WeightCard = () => {
    return (
        <Container className="p-0">
            <Row className="m-0">
                <Col className="p-0 pt-4 d-flex align-items-center justify-content-center" lg={12} style={{color: '#042434'}}>
                    <Image src={totalGarbage} width='20%'/>
                </Col>
                <Col className="p-0 d-flex align-items-center justify-content-center" lg={12} style={{color: '#042434'}}>
                    <label style={{fontWeight: 700, fontSize: 55}}>630<span style={{fontSize: 25}}>Kg</span></label>
                </Col>
                <Col className="p-0 pb-4 d-flex align-items-center justify-content-center" lg={12}
                     style={{ color: '#042434'}}>
                    <label style={{fontSize: 20}}>Total</label>
                </Col>
                <Col className="p-0 pb-4 d-flex align-items-center justify-content-center" lg={3}>
                    <Image src={organicBin} width='70%'/>
                </Col>
                <Col className="p-0 pb-4  d-flex align-items-center justify-content-center" lg={3}>
                    <label style={{fontWeight: 700, fontSize: 20}}>230<span style={{fontSize: 10}}>Kg</span></label>
                </Col>
                <Col className="p-0 pb-4  d-flex align-items-center justify-content-center" lg={3}>
                    <Image src={plasticBin} width='70%'/>
                </Col>
                <Col className="p-0 pb-4  d-flex align-items-center justify-content-center" lg={3}>
                    <label style={{fontWeight: 700, fontSize: 20}}>100<span style={{fontSize: 10}}>Kg</span></label>
                </Col>
                <Col className="p-0 pb-4  d-flex align-items-center justify-content-center" lg={3}>
                    <Image src={paperBin} width='70%'/>
                </Col>
                <Col className="p-0 pb-4  d-flex align-items-center justify-content-center" lg={3}>
                    <label style={{fontWeight: 700, fontSize: 20}}>150<span style={{fontSize: 10}}>Kg</span></label>
                </Col>
                <Col className="p-0 pb-4  d-flex align-items-center justify-content-center" lg={3}>
                    <Image src={glassBin} width='70%'/>
                </Col>
                <Col className="p-0 pb-4  d-flex align-items-center justify-content-center" lg={3}>
                    <label style={{fontWeight: 700, fontSize: 20}}>150<span style={{fontSize: 10}}>Kg</span></label>
                </Col>
            </Row>
        </Container>
    );
}

export default WeightCard;