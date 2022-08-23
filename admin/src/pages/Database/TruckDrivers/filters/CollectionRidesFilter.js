import React, {useState} from 'react';
import {Col, Collapse, Container, FormCheck, Image, Row} from "react-bootstrap";
import filterIcon from "../../../../assets/images/icons/filter.png";
import fromDate from "../../../../assets/images/icons/from-date.png";
import toDate from "../../../../assets/images/icons/to-date.png";
import filterWhite from "../../../../assets/images/icons/filterwhite.png";

const JobsGraphFilter = () => {
    const [open, setOpen] = useState(false);

    return (
        <div>
            <Row className="p-0">
                <Col className="p-0" lg={12}>
                    <Row className="m-0 me-1" onClick={() => setOpen(!open)}
                         style={{border: '2px solid #BFDDDE', borderRadius: 7, cursor: "pointer"}}>
                        <Col className="p-0 ps-2" aria-controls="example-collapse-text" aria-expanded={open}
                             xs="6">Filter</Col>
                        <Col className="p-0 d-flex align-items-center justify-content-center"
                             style={{textAlign: "right"}}>
                            <Image src={filterIcon} width="35%"/>
                        </Col>
                    </Row>
                </Col>
            </Row>
            <Row className="p-0" style={{position: "absolute", right: 467, paddingTop: 15}}>
                <Collapse in={open}>
                    <Container id="example-collapse-text" style={{
                        backgroundColor: "white",
                        boxShadow: '0px 8px 24px rgba(149, 157, 165, 0.2)',
                        borderBottomLeftRadius: 10,
                        borderBottomRightRadius: 10
                    }}>
                        <Row className='mx-0 mt-3 mb-1'>
                            <Col lg={12}>Status</Col>
                            <Col lg={12} className='px-0 ms-4 w-auto mt-2'>
                                <FormCheck type={'checkbox'} id={'Started'} label={'Started'}/>
                                <FormCheck type={'checkbox'} id={'In-Progress'} label={'In-Progress'}/>
                                <FormCheck type={'checkbox'} id={'Collected'} label={'Collected'}/>

                            </Col>
                        </Row>
                        <Row className="p-0" style={{width: 230}}>
                            <Col className="p-0" lg={12}>
                                <Row className="m-0 mt-3" lg={12}>
                                    <Col className="p-0 d-flex align-items-center justify-content-center" lg={5}>
                                        <Image src={fromDate} width="30%"/>
                                    </Col>
                                    <Col className="p-0" lg={7}>
                                        <Row className="m-0" lg={12}>
                                            <Col className="p-0" lg={12}
                                                 style={{color: '#BFDDDE', fontWeight: "bold", fontSize: 12}}>From
                                                Date</Col>
                                            <Col className="p-0" lg={12}>
                                                <input type="date"
                                                       style={{
                                                           border: "none",
                                                           color: '#228693',
                                                           outline: "none",
                                                           fontSize: 12
                                                       }}/>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="p-0 mb-2" lg={12} style={{borderBottom: '2.5px solid #BFDDDE'}}>
                                <Row className="m-0 mt-3 mb-2" lg={12}>
                                    <Col className="p-0 d-flex align-items-center justify-content-center" lg={5}>
                                        <Image src={toDate} width="30%"/>
                                    </Col>
                                    <Col className="p-0" lg={7}>
                                        <Row className="m-0" lg={12}>
                                            <Col className="p-0" lg={12}
                                                 style={{color: '#BFDDDE', fontWeight: "bold", fontSize: 12}}>From
                                                Date</Col>
                                            <Col className="p-0" lg={12}>
                                                <input type="date" style={{
                                                    border: "none",
                                                    color: '#228693',
                                                    outline: "none",
                                                    fontSize: 12
                                                }}/>
                                            </Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                            <Col className="p-0 mt-1 mb-3" lg={12}>
                                <Row className="m-0 mx-2">
                                    <Col className="p-0" lg={8}></Col>
                                    <Col className="p-0" lg={4}>
                                        <Row className="m-0 p-1" style={{
                                            backgroundColor: '#228693', borderRadius: 8,
                                            fontSize: 13, cursor: "pointer", textAlign: "center"
                                        }}>
                                            <Col className="p-0" lg={4}>
                                                <Image src={filterWhite} width="60%"></Image>
                                            </Col>
                                            <Col className="p-0" lg={8} style={{color: "white"}}>Filter</Col>
                                        </Row>
                                    </Col>
                                </Row>
                            </Col>
                        </Row>
                    </Container>
                </Collapse>
            </Row>
        </div>
    );
}

export default JobsGraphFilter;
