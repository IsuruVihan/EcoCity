import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import glassBinImage from '../../../../assets/images/glass.png';
import plasticBinImage from '../../../../assets/images/plastic.png';
import organicBinImage from '../../../../assets/images/organic.png';
import paperBinImage from '../../../../assets/images/paper.png';

const GarbageBinDetailsCard = (props) => {
    const bin = props.bin;
    console.log(bin)
    const getBinImage = () => {
        switch (bin.bintype) {
            case 'Organic':
                return <Image fluid src={organicBinImage}/>;
            case 'Paper':
                return <Image fluid src={paperBinImage}/>;
            case 'Plastic':
                return <Image fluid src={plasticBinImage}/>;
            case 'Glass':
                return <Image fluid src={glassBinImage}/>;
            default:
                return <Image fluid src={''}/>;

        }
    }
    return (
        <Row className={' px-0'}>
            <Col lg={5} className={'px-0 d-flex align-items-center'}>
                {getBinImage()}
            </Col>
            <Col lg={7} className={'px-0'}>
                <h6 style={{fontSize: '15px'}} className={'mb-0'}>Fill Level</h6>
                <p className={'fs-2 fw-bolder lh-1'}>{bin.garbagelevel}</p>
                <p style={{fontSize: '15px'}}>Temperature {bin.temperature}&deg;C</p>
                {/*<p style={{fontSize: '15px'}}>Humidity {bin.humidity}</p>*/}
                <p style={{fontSize: '15px'}}>Weight {bin.garbageweight} Kg</p>
            </Col>
        </Row>
    );
}

export default GarbageBinDetailsCard;
