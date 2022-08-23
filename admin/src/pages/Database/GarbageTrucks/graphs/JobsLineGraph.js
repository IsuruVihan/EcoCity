import React from 'react';
import {Col, Container, Row} from "react-bootstrap";

import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import {Line} from "react-chartjs-2";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
);

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },

    },
};

const JobsLineGraph = () => {
    return (
        <Container className="p-0" style={{width: "450px", maxWidth: "400px"}}>
            <Row className="m-0 mt-3">
                <Col className="p-0 ms-2">
                    <Line
                        datasetIdKey='id'
                        data={{
                            labels: ['January', 'February', 'March', 'April', 'May', 'June'],
                            datasets: [
                                {
                                    id: 1,
                                    label: 'Organic',
                                    data: [1, 0.8, 1.3, 0.6, 1.4, 1],
                                    borderColor: 'rgb(75, 192, 192)',
                                    borderWidth: 2,
                                },

                            ],
                        }}
                        options={options}/>
                </Col>
            </Row>
        </Container>
    );
}

export default JobsLineGraph;
