import React from 'react';
import { Bar } from 'react-chartjs-2';
import word from './data/Word';
// @ts-ignore
import styled from "styled-components";

const data = {
    labels: word.map((value, index) => {return word[index].value}), //['Red', 'Blue', 'Yellow', 'Green', 'Purple', 'Orange'],
    datasets: [
        {
            label: '임대 주택 현황',
            data: word.map((value, index) => {return word[index].count}),
            backgroundColor: [
                'rgba(255, 99, 132, 0.2)',
                'rgba(54, 162, 235, 0.2)',
                'rgba(255, 206, 86, 0.2)',
                'rgba(75, 192, 192, 0.2)',
                'rgba(153, 102, 255, 0.2)',
                'rgba(255, 159, 64, 0.2)',
            ],
            borderColor: [
                'rgba(255, 99, 132, 1)',
                'rgba(54, 162, 235, 1)',
                'rgba(255, 206, 86, 1)',
                'rgba(75, 192, 192, 1)',
                'rgba(153, 102, 255, 1)',
                'rgba(255, 159, 64, 1)',
            ],
            borderWidth: 1,
        },
    ],
};

const options = {
    scales: {
        yAxes: [
            {
                ticks: {
                    beginAtZero: true,
                },
            },
        ],
    },
};

const Layout = styled.div`
    width: 1000px;height: 500px;
`;

const Chart = () => (
    <Layout>
        <Bar data={data} options={options} />
    </Layout>
);

export default Chart;