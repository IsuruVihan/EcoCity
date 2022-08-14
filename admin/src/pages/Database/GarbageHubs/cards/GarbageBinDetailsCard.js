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
        <Row className={'mx-0'}>
            <Col lg={6}>
                {getBinImage()}
            </Col>
            <Col lg={6}>

            </Col>
        </Row>
    );
}

export default GarbageBinDetailsCard;
