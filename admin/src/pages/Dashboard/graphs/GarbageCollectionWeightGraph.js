import React from 'react';
import {Container, Row, Col} from "react-bootstrap";
import {Line} from 'react-chartjs-2';
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

ChartJS.register(
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Title,
  Tooltip,
  Legend
);

const GarbageCollectionWeightGraph = () => {
  return (
    <Container className="p-0">
      <Row className="m-0 mt-3">
        <Col className="p-0 ms-2">
          <Line
            datasetIdKey='id'
            data={{
              labels: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
              datasets: [
                {
                  id: 1,
                  label: 'Organic',
                  data: [5, 6, 7, 2, 6, 9, 3],
                  borderColor: 'rgb(75, 192, 192)',
                  borderWidth: 2,
                },
                {
                  id: 2,
                  label: 'Plastic',
                  data: [3, 2, 1, 5, 6, 8, 2],
                  borderColor: 'rgb(255, 99, 132)',
                  borderWidth: 2,
                },
                {
                  id: 3,
                  label: 'Glass',
                  data: [1, 3, 7, 0, 2, 1, 0],
                  borderColor: 'rgb(255, 206, 86)',
                  borderWidth: 2,
                },
                {
                  id: 4,
                  label: 'Paper',
                  data: [2, 1, 0, 2, 1, 0, 2],
                  borderColor: 'rgb(54, 162, 235)',
                  borderWidth: 2,
                },
              ],
            }}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default GarbageCollectionWeightGraph;
