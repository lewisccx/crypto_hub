import React from 'react'
import { Col, Row, Typography } from 'antd';
import { Line } from 'react-chartjs-2';
import moment from 'moment';

const { Title } = Typography;
const LineChart = ({ timePeriod, coinHistory, currentPrice, coinName }) => {

    const coinPrice = [];
    const coinTimeStamp = [];
    for (let i = 0; i < coinHistory?.data?.history?.length; i += 1) {
        coinPrice.push(coinHistory.data.history[i].price)

        if (timePeriod === "24h"){
        
            coinTimeStamp.push(moment(coinHistory.data.history[i].timestamp).format('MM/DD hh:mm'));
        }else{
            coinTimeStamp.push(new Date(coinHistory.data.history[i].timestamp).toLocaleDateString());
        }
            
    }
    const data = {
        labels: coinTimeStamp,
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice,
                fill: false,
                backgroundColor: '#0071bd',
                borderColor: '0071bd'
            }
        ]
    }

    const options = {
        scales: {
            yAxes: [
                {
                    ticks: {
                        beginAtZero: true
                    }
                }
            ],
            xAxes: [
                {
                    type: 'time',
                    ticks:{
                        autoSkip: true,
                        maxTicksLimit: 3600000 
                    }
                }
            ]
        }
    }
    return (
        <>
            <Row className="chart-header">
                <Title level={2} className="chart-title" >{coinName} Price History</Title>
                <Col className="price-container">
                    <Title level={5} className="price-change">
                        {coinHistory?.data?.change} %
                    </Title>
                    <Title level={5} className="current-price">
                        Current {coinName} Price: $ {currentPrice}
                    </Title>
                </Col>
                <Line data={data} options={options} />
            </Row>
        </>
    )
}

export default LineChart
