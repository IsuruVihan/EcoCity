import React from 'react';
import {Col, Container, Row} from "react-bootstrap";
import {Line} from "react-chartjs-2";
import {
    CategoryScale,
    Chart as ChartJS,
    Legend,
    LinearScale,
    LineElement,
    PointElement,
    Title,
    Tooltip
} from "chart.js";


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
const TotalNFCTagUsageLineGraph = () => {
    return (
        <Container className="p-0 job-graph mb-5">
            <Row className="m-0 ">
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

export default TotalNFCTagUsageLineGraph;
