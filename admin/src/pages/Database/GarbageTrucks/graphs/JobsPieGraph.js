import React from 'react';
import {Container} from "react-bootstrap";
import {Doughnut} from 'react-chartjs-2';
import {Chart, ArcElement} from 'chart.js'

Chart.register(ArcElement);

const data = {
    labels: ['Red'],
    datasets: [
        {
            label: '# of Votes',
            data: [76, 24],
            backgroundColor: [
                '#00c2cb',
                '#494f56',
            ],
            borderColor: [
                'rgba(255, 99, 132, 0)',
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
            position: 'top',
        },
    },
};
const JobsPieGraph = () => {
    return (
        <Doughnut data={data} options={options}/>
    );
}

export default JobsPieGraph;
