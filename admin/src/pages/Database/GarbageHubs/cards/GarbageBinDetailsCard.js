import React from 'react';
import {Col, Image, Row} from "react-bootstrap";
import glassBinImage from '../../../../assets/images/glass.png';
import plasticBinImage from '../../../../assets/images/plastic.png';
import organicBinImage from '../../../../assets/images/organic.png';
import paperBinImage from '../../../../assets/images/paper.png';

const GarbageBinDetailsCard = (props) => {
    const bin = props.bin;
    console.log(bin);

    const getBinImage = () => {
        switch (bin.binType) {
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
                <h6 style={{fontSize: '13px'}} className={'mb-0'}>Fill Level</h6>
                <label className={'fs-2 fw-bolder lh-1'}>{bin.level}%</label>
                <label style={{fontSize: '13px'}}>Temperature {bin.temperature}&deg;C</label>
                <label style={{fontSize: '13px'}}>Humidity {bin.humidity}</label>
                <label style={{fontSize: '13px'}}>Weight {bin.level} Kg</label>
            </Col>
        </Row>
    );
}

export default GarbageBinDetailsCard;
