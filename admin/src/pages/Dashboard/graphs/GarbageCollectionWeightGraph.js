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
      <Row className="m-0" style={{border: '2px solid red'}}>
        <Col className="p-0" style={{border: '2px solid blue'}}>
          <Line
            datasetIdKey='id'
            data={{
              labels: ['Jun', 'Jul', 'Aug'],
              datasets: [
                {
                  id: 1,
                  label: '',
                  data: [5, 6, 7],
                },
                {
                  id: 2,
                  label: '',
                  data: [3, 2, 1],
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
