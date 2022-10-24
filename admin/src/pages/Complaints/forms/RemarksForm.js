import React, {useState} from 'react';
import {Container, Row, Col, Image} from "react-bootstrap";

import remarks from "../../../assets/images/icons/remarks.png";
import {useDispatch, useSelector} from "react-redux";
import {resolveRejectComplaint} from "../../../redux/reducers/complaintsSlice";

const RemarksForm = (props) => {
    const complaint = props.complaint;
    const [remark, setRemark] = useState('');
    const dispatch = useDispatch();
    const handleRemarkChange = (e) => {
        setRemark(e.target.value);
    }
    const handleOnResolve = () => {
        const remarkObject = {
            id: complaint?.id,
            action: 'resolve',
            remark: remark
        }
        dispatch(resolveRejectComplaint(remarkObject));
    }
    const handleOnReject = () => {
        const remarkObject = {
            id: complaint?.id,
            action: 'reject',
            remark: remark
        }
        dispatch(resolveRejectComplaint(remarkObject)).then((res) => {
            console.log(res)
        });
    }
    return (
        <Container>
            <Row>
                <Col>
                    <Row>
                        <Col style={{height: 300}} className="overflow-auto">
                            <Row>
                                <Col style={{
                                    marginRight: 15,
                                    marginLeft: 15,
                                    fontSize: 13,
                                    fontWeight: 'bold',
                                    paddingBottom: 5
                                }}>
                                    <Row style={{paddingBottom: 5}}>Complaint ID</Row>
                                    <Row>
                                        <input type="text"
                                               style={{
                                                   outline: 'none',
                                                   border: '1px solid #E8F5F6',
                                                   borderRadius: 8,
                                                   paddingBottom: 5,
                                                   fontSize: 12
                                               }}
                                               value={complaint?.id}
                                               readOnly
                                        />
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{
                                    marginRight: 15,
                                    marginLeft: 15,
                                    fontSize: 13,
                                    fontWeight: 'bold',
                                    paddingBottom: 5
                                }}>
                                    <Row style={{paddingBottom: 5}}>Complaint Category</Row>
                                    <Row>
                                        <input type="text"
                                               style={{
                                                   outline: 'none',
                                                   border: '1px solid #E8F5F6',
                                                   borderRadius: 8,
                                                   paddingBottom: 5,
                                                   fontSize: 12
                                               }}
                                               value={complaint?.category}
                                               readOnly
                                        />
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{
                                    marginRight: 15,
                                    marginLeft: 15,
                                    fontSize: 13,
                                    fontWeight: 'bold',
                                    paddingBottom: 5
                                }}>
                                    <Row style={{paddingBottom: 5}}>Garbage Hub ID</Row>
                                    <Row>
                                        <input type="text"
                                               style={{
                                                   outline: 'none',
                                                   border: '1px solid #E8F5F6',
                                                   borderRadius: 8,
                                                   paddingBottom: 5,
                                                   fontSize: 12
                                               }}
                                               value={complaint?.hubornfcid}
                                               readOnly
                                        />
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{
                                    marginRight: 15,
                                    marginLeft: 15,
                                    fontSize: 13,
                                    fontWeight: 'bold',
                                    paddingBottom: 5
                                }}>
                                    <Row style={{paddingBottom: 5}}>Name</Row>
                                    <Row>
                                        <input type="text"
                                               style={{
                                                   outline: 'none',
                                                   border: '1px solid #E8F5F6',
                                                   borderRadius: 8,
                                                   paddingBottom: 5,
                                                   fontSize: 12
                                               }}
                                               value={complaint.House.firstname + ' ' + complaint.House.lastname}
                                               readOnly
                                        />
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{
                                    marginRight: 15,
                                    marginLeft: 15,
                                    fontSize: 13,
                                    fontWeight: 'bold',
                                    paddingBottom: 5
                                }}>
                                    <Row style={{paddingBottom: 5}}>Complained Date</Row>
                                    <Row>
                                        <input type="text"
                                               style={{
                                                   outline: 'none',
                                                   border: '1px solid #E8F5F6',
                                                   borderRadius: 8,
                                                   paddingBottom: 5,
                                                   fontSize: 12
                                               }}
                                               value={complaint.createdAt}
                                               readOnly
                                        />
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{
                                    marginRight: 15,
                                    marginLeft: 15,
                                    fontSize: 13,
                                    fontWeight: 'bold',
                                    paddingBottom: 5
                                }}>
                                    <Row style={{paddingBottom: 5}}>Description</Row>
                                    <Row>
                                        <input type="text"
                                               style={{
                                                   outline: 'none',
                                                   border: '1px solid #E8F5F6',
                                                   borderRadius: 8,
                                                   paddingBottom: 5,
                                                   fontSize: 12
                                               }}
                                               value={complaint.description}
                                               readOnly
                                        />
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{
                                    marginRight: 15,
                                    marginLeft: 15,
                                    fontSize: 13,
                                    fontWeight: 'bold',
                                    paddingBottom: 5
                                }}>
                                    <Row style={{paddingBottom: 5}}>Uploaded Files</Row>
                                    <Row>
                                        <input type="text"
                                               style={{
                                                   outline: 'none',
                                                   border: '1px solid #E8F5F6',
                                                   paddingBottom: 5,
                                                   fontSize: 12
                                               }}
                                               value={''}
                                               readOnly
                                        />
                                    </Row>
                                </Col>
                            </Row>
                            <Row>
                                <Col style={{
                                    marginRight: 15,
                                    marginLeft: 15,
                                    fontSize: 13,
                                    fontWeight: 'bold',
                                    paddingBottom: 5
                                }}>
                                    <Row style={{paddingBottom: 5}}>Remarks</Row>
                                    <Row style={{
                                        outline: 'none',
                                        border: '1px solid #E8F5F6',
                                        borderRadius: 8,
                                        paddingBottom: 5,
                                        fontSize: 12
                                    }}>
                                        <Col xs={10}>
                                            <input
                                                type="text"
                                                style={{border: 'none', outline: 'none', width: 350}}
                                                onChange={handleRemarkChange}
                                                value={remark}
                                            />
                                        </Col>
                                        <Col style={{marginTop: 2, textAlign: 'right'}}>
                                            <Image src={remarks} width='50%'/>
                                        </Col>

                                    </Row>
                                </Col>
                            </Row>
                        </Col>
                    </Row>
                    <Row>
                        <Col
                            style={{
                                marginLeft: 110,
                                marginRight: 110,
                                display: 'flex',
                                justifyContent: 'space-evenly'
                            }}>
                            <button
                                style={{width: 100, fontSize: 15, padding: 5, borderRadius: 8, border: 'none'}}
                                onClick={handleOnReject}
                            >
                                Reject
                            </button>
                            <button
                                style={{
                                    width: 100,
                                    fontSize: 15,
                                    padding: 5,
                                    borderRadius: 8,
                                    border: 'none',
                                    backgroundColor: '#228693',
                                    color: '#fff',
                                    fontWeight: 'bold'
                                }}
                                onClick={handleOnResolve}
                            >
                                Resolve
                            </button>
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Container>
    );
}

export default RemarksForm;
