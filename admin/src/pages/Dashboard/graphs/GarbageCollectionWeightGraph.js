import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Line} from 'react-chartjs-2';

const GarbageCollectionWeightGraph = () => {
    return (
        <Container className="p-0">
            <Row className="m-0" style={{border: '2px solid red'}}>
                <Col className="p-0" style={{border: '2px solid blue'}}>
                    <Line
                        type='line'
                        data={{
                            labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
                            datasets: [
                                {
                                    label: "Days",
                                    data: [12, 19, 3, 5, 2, 3],
                                    backgroundColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(253, 159, 64, 0.2)',
                                    ],
                                    borderColor: [
                                        'rgba(255, 99, 132, 0.2)',
                                        'rgba(54, 162, 235, 0.2)',
                                        'rgba(255, 206, 86, 0.2)',
                                        'rgba(75, 192, 192, 0.2)',
                                        'rgba(153, 102, 255, 0.2)',
                                        'rgba(253, 159, 64, 0.2)',
                                    ],
                                },
                            ],
                        }}
                        width={100}
                        height={300}
                        options={{
                            maintainAspectRatio: false
                        }}
                    />
                </Col>
            </Row>
        </Container>
    );
}

export default GarbageCollectionWeightGraph;
