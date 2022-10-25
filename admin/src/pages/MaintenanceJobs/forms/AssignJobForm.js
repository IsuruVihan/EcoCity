import React, {useEffect, useState} from "react";
import {Container, Row, Col, Button} from "react-bootstrap";

import AssignJobMapFilter from "../filters/AssignJobMapFilter";
import AssignJobMap from "../maps/AssignJobMap";
import {createMJ, getInitial} from "../api/api";
import {useSelector} from "react-redux";

const AssignJobForm = () => {
    const loggedUser = useSelector((state) => state.auth.loggedUser);
    const [initialDetails, setInitialDetails] = useState(null);
    const [crewMember, setCrewMember] = useState(null);
    const [selectedComplaint, setSelectedComplaint] = useState(null);
    const [selectedComplaintDescription, setSelectedComplaintDescription] = useState(null);

    useEffect(() => {
        getInitial(loggedUser.accessToken, loggedUser.refreshToken)
            .then((res) => {
                setInitialDetails(res.data)
            })
    }, [])

    const handleOnCrewMemberChange = (e) => {
        e.stopPropagation();
        setCrewMember(e.target.value);
    }

    const handleOnComplaintChange = (e) => {
        e.stopPropagation();
        initialDetails.complaints.map((c) => {
            if (c.id == e.target.value) {
                setSelectedComplaint(c);
            }
        })
    }

    const handleOnSubmit = (e) => {
        e.stopPropagation();
        const newMJ = {
            complaintId: selectedComplaint.id,
            crew: crewMember
        }
        createMJ(loggedUser.accessToken, loggedUser.refreshToken, newMJ).then((res) => {
            alert(res.data.message);
            // props.hide();
        })
    }
    if (!initialDetails) return;
    return (
        <Container>
            <Row className="p-0 m-0 pb-3 ps-3">
                <Col
                    className={"m-0 p-0 pe-3"}
                    sm={6}
                    style={{
                        marginRight: 15,
                        marginLeft: 15,
                        fontWeight: "bold",
                        paddingBottom: 5,
                    }}
                >
                    <Row className={"m-0 p-0 pb-2"} style={{paddingBottom: 5}}>
                        Crew Member
                    </Row>
                    <Row className={"m-0 p-0 "}>
                        <select
                            id="crewMember"
                            name="crewMember"
                            style={{
                                outline: "none",
                                border: "2px solid #E8F5F6",
                                borderRadius: 8,
                                paddingBottom: 3,
                                paddingTop: 3,
                                fontSize: 12,
                            }}
                            onChange={handleOnCrewMemberChange}
                        >
                            <option value="-1">--Select--</option>
                            {
                                initialDetails.crew.map((crew) => {
                                    return <option key={crew.id}
                                                   value={crew.id}>{crew.name + ' (' + crew.id + ')'}</option>
                                })
                            }
                        </select>
                    </Row>
                </Col>
                <Col
                    className={"m-0 p-0 pe-3"}
                    sm={6}
                    style={{
                        marginRight: 15,
                        marginLeft: 15,
                        fontWeight: "bold",
                        paddingBottom: 5,
                    }}
                >
                    <Row className={"m-0 p-0 pb-2"} style={{paddingBottom: 5}}>
                        Complaint ID
                    </Row>
                    <Row className={"m-0 p-0 "}>
                        <select
                            onChange={handleOnComplaintChange}
                            id="hubId"
                            name="hubId"
                            style={{
                                outline: "none",
                                border: "2px solid #E8F5F6",
                                borderRadius: 8,
                                paddingBottom: 3,
                                paddingTop: 3,
                                fontSize: 12,
                            }}
                        >
                            <option key={-1}
                                    value={''}>{'Select Complaint'}</option>
                            {
                                initialDetails.complaints.map((complaint) => {
                                    console.log(complaint)
                                    return <option key={complaint.id}
                                                   value={complaint.id}>{complaint.id}</option>
                                })
                            }
                        </select>
                    </Row>
                </Col>
            </Row>
            <Row className="p-0 m-0 ps-3 pb-2">
                {/*<Col*/}
                {/*    className={"m-0 p-0 pe-3"}*/}
                {/*    sm={6}*/}
                {/*    style={{*/}
                {/*        marginRight: 15,*/}
                {/*        marginLeft: 15,*/}
                {/*        fontWeight: "bold",*/}
                {/*        paddingBottom: 5,*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Row className={"m-0 p-0 pb-2"} style={{paddingBottom: 5}}>*/}
                {/*        Garbage Bin Type*/}
                {/*    </Row>*/}
                {/*    <Row className={"m-0 p-0 "}>*/}
                {/*        <select*/}
                {/*            id="binType"*/}
                {/*            name="binType"*/}
                {/*            style={{*/}
                {/*                outline: "none",*/}
                {/*                border: "2px solid #E8F5F6",*/}
                {/*                borderRadius: 8,*/}
                {/*                paddingBottom: 3,*/}
                {/*                paddingTop: 3,*/}
                {/*                fontSize: 12,*/}
                {/*            }}*/}
                {/*        >*/}
                {/*            <option value="organic">Organic</option>*/}
                {/*            <option value="plastic">Plastic</option>*/}
                {/*            <option value="paper">Paper</option>*/}
                {/*            <option value="glass">Glass</option>*/}
                {/*        </select>*/}
                {/*    </Row>*/}
                {/*</Col>*/}
                <Col
                    className={"m-0 p-0 pe-3"}
                    sm={6}
                    style={{
                        marginRight: 15,
                        marginLeft: 15,
                        fontWeight: "bold",
                        paddingBottom: 5,
                    }}
                >
                    <Row className={"m-0 p-0 pb-2"} style={{paddingBottom: 5}}>
                        Description
                    </Row>
                    <Row className={"m-0 p-0 "}>
            <textarea
                type="text"
                rows="1"
                cols="50"
                readOnly
                style={{
                    outline: "none",
                    border: "2px solid #E8F5F6",
                    borderRadius: 8,
                    paddingBottom: 3,
                    paddingTop: 3,
                    fontSize: 12,
                }}
                value={selectedComplaint ? selectedComplaint.description : ''}
            />
                    </Row>
                </Col>
            </Row>
            <Row className="p-0 m-0 ps-3 pb-2">
                {/*<Col*/}
                {/*    className={"m-0 p-0 pe-3"}*/}
                {/*    sm={4}*/}
                {/*    style={{*/}
                {/*        marginRight: 15,*/}
                {/*        marginLeft: 15,*/}
                {/*        fontWeight: "bold",*/}
                {/*        paddingBottom: 5,*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Row className={"m-0 p-0 pb-2"} style={{paddingBottom: 5}}>*/}
                {/*        Fill Level*/}
                {/*    </Row>*/}
                {/*    <Row className={"m-0 p-0 "}>*/}
                {/*        <input*/}
                {/*            type="text"*/}
                {/*            style={{*/}
                {/*                outline: "none",*/}
                {/*                border: "2px solid #E8F5F6",*/}
                {/*                borderRadius: 8,*/}
                {/*                paddingBottom: 3,*/}
                {/*                paddingTop: 3,*/}
                {/*                fontSize: 12,*/}
                {/*            }}*/}
                {/*        />*/}
                {/*    </Row>*/}
                {/*</Col>*/}
                {/*<Col*/}
                {/*    className={"m-0 p-0 pe-3"}*/}
                {/*    sm={4}*/}
                {/*    style={{*/}
                {/*        marginRight: 15,*/}
                {/*        marginLeft: 15,*/}
                {/*        fontWeight: "bold",*/}
                {/*        paddingBottom: 5,*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Row className={"m-0 p-0 pb-2"} style={{paddingBottom: 5}}>*/}
                {/*        Temperature*/}
                {/*    </Row>*/}
                {/*    <Row className={"m-0 p-0 "}>*/}
                {/*        <input*/}
                {/*            type="number"*/}
                {/*            style={{*/}
                {/*                outline: "none",*/}
                {/*                border: "2px solid #E8F5F6",*/}
                {/*                borderRadius: 8,*/}
                {/*                paddingBottom: 3,*/}
                {/*                paddingTop: 3,*/}
                {/*                fontSize: 12,*/}
                {/*            }}*/}
                {/*        />*/}
                {/*    </Row>*/}
                {/*</Col>*/}
                {/*<Col*/}
                {/*    className={"m-0 p-0 pe-3"}*/}
                {/*    sm={4}*/}
                {/*    style={{*/}
                {/*        marginRight: 15,*/}
                {/*        marginLeft: 15,*/}
                {/*        fontWeight: "bold",*/}
                {/*        paddingBottom: 5,*/}
                {/*    }}*/}
                {/*>*/}
                {/*    <Row className={"m-0 p-0 pb-2"} style={{paddingBottom: 5}}>*/}
                {/*        Humidity*/}
                {/*    </Row>*/}
                {/*    <Row className={"m-0 p-0 "}>*/}
                {/*        <input*/}
                {/*            type="text"*/}
                {/*            style={{*/}
                {/*                outline: "none",*/}
                {/*                border: "2px solid #E8F5F6",*/}
                {/*                borderRadius: 8,*/}
                {/*                paddingBottom: 3,*/}
                {/*                paddingTop: 3,*/}
                {/*                fontSize: 12,*/}
                {/*            }}*/}
                {/*        />*/}
                {/*    </Row>*/}
                {/*</Col>*/}
            </Row>
            {/*<Row className="p-0 m-0 ps-3 pb-2 pt-2">*/}
            {/*    <Col sm={4} className="p-0 m-0" style={{fontWeight: "bold"}}>*/}
            {/*        Location*/}
            {/*    </Col>*/}
            {/*    <Col sm={5}></Col>*/}
            {/*    <Col sm={3} className="p-0 pe-2 m-0">*/}
            {/*        <AssignJobMapFilter/>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            {/*<Row className="p-3 pt-1 m-0" style={{height: 200}}>*/}
            {/*    <Col*/}
            {/*        className="p-0 m-0"*/}
            {/*        style={{borderRadius: 10}}*/}
            {/*    >*/}
            {/*        <AssignJobMap/>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            <Row className="m-0 p-3 pt-0">
                <Col className="p-0 m-0" sm={10}></Col>
                <Col className="p-0 m-0" sm={2}>
                    <Button
                        className=" p-2"
                        style={{
                            width: "100%",
                            backgroundColor: "#228693",
                            border: "none"
                        }}
                        onClick={handleOnSubmit}
                    >
                        Assign
                    </Button>
                </Col>
            </Row>
        </Container>
    );
};

export default AssignJobForm;
