import React, { useState } from "react";
import { Col, Container, Image, Row, Collapse, Button } from "react-bootstrap";

import filtericonbutton from "../../../assets/images/icons/filterwhite.png";
import filterIcon from "../../../assets/images/icons/filter.png";

const AssignJobMapFilter = () => {
  const [open, setOpen] = useState(false);
  return (
    <Container>
      <Col className="m-0 p-0">
        <Row
          sm="2"
          className="p-0 m-0"
          onClick={() => setOpen(!open)}
          style={{
            border: "2px solid #BFDDDE",
            borderRadius: 10,
            textAlign: "right",
            cursor: "pointer",
          }}
        >
          <Col
            aria-controls="example-collapse-text"
            aria-expanded={open}
            sm="6"
          >
            Filter
          </Col>
          <Col style={{ textAlign: "right" }}>
            <img src={filterIcon} width="20px" />
          </Col>
        </Row>
        <Row
          style={{
            position: "absolute",
            right: 58,
            paddingTop: 8,
            width: "150px",
            zIndex: 1,
          }}
        >
          <Collapse in={open}>
            <Container id="example-collapse-text">
              <Row style={{ display: "flex", alignItems: "center" }}>
                <Col
                  style={{
                    borderBottomRightRadius: 15,
                    borderBottomLeftRadius: 15,
                    boxShadow: `0px 4px 8px #707070`,
                  }}
                >
                  <Row className="m-1">
                    <Col className="p-0 m-0">
                      <Row className="p-0 m-0">
                        <form class="form-inline d-flex justify-content-center md-form form-sm mt-3 m-0 p-0">
                          <i
                            class="fas fa-search"
                            aria-hidden="true"
                            className="p-0 m-0"
                          ></i>
                          <input
                            class="form-control form-control-sm ml-3 w-70"
                            type="text"
                            placeholder="Search"
                            aria-label="Search"
                          />
                        </form>
                      </Row>
                      <Row
                        className="p-0 m-0"
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Col
                          className="p-1 m-0 ms-3"
                          style={{
                            display: "flex",
                            textAlign: "center",
                            alignItems: "center",
                            marginBottom: "10px",
                            marginTop: "10px",
                          }}
                        >
                          <input
                            type="checkbox"
                            style={{ cursor: "pointer" }}
                          />
                          <label
                            style={{
                              fontSize: 15,
                              marginLeft: 5,
                              fontWeight: 600,
                            }}
                          >
                            All
                          </label>
                        </Col>
                      </Row>
                      <Row className="p-0 m-0">
                        <Col
                          className="p-1 m-0 ms-3"
                          style={{
                            display: "flex",
                            textAlign: "center",
                            alignItems: "center",
                            marginBottom: "10px",
                            marginTop: "10px",
                          }}
                        >
                          <input
                            type="checkbox"
                            style={{ cursor: "pointer" }}
                          />
                          <label
                            style={{
                              fontSize: 15,
                              marginLeft: 5,
                              fontWeight: 600,
                            }}
                          >
                            Broken
                          </label>
                        </Col>
                      </Row>
                    </Col>
                  </Row>
                </Col>
              </Row>
            </Container>
          </Collapse>
        </Row>
      </Col>
    </Container>
  );
};

export default AssignJobMapFilter;
