import React, { useEffect, useState } from 'react';
import ReactHighcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';
import {
    Container,
    TopContainer,
    ChartsTitle,
    ChartsContainer,
    ChartCard,
} from "./styledLanding";
import { Table } from '../../Components';

export const Landing = () => {
    const [appPerformance, setAppPerformance] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://my-json-server.typicode.com/WorexEG/json-server/appPerformance`);
            setAppPerformance(res.data);
        };

        fetchData();
    }, []);

    let appPerformancePie = {};

    const appPerformanceCharts = appPerformance.map((el, index) => {
        appPerformancePie = {
            chart: {
                plotBackgroundColor: null,
                plotBorderWidth: null,
                plotShadow: false,
                type: 'pie'
            },
            title: {
                text: el.applicationName
            },
            tooltip: {
                pointFormat: '{series.name}: <b>{point.percentage:.1f}%</b>'
            },
            accessibility: {
                point: {
                    valueSuffix: '%'
                }
            },
            plotOptions: {
                pie: {
                    size: 150,
                    zIndex: 1,
                    colors: ['#7fb7e8', '#E60965'],
                    allowPointSelect: true,
                    cursor: 'pointer',
                    dataLabels: {
                        enabled: true,
                        format: '<b>{point.name}</b>: {point.percentage:.1f} %'
                    }
                }
            },
            series: [{
                name: 'Brands',
                colorByPoint: true,
                data: [{
                    name: el.applicationName,
                    y: el.successRate,
                }, {
                    name: 'Failure Rate',
                    y: el.failerRate
                }]
            }]
        }

        return (
            <ChartCard key={index}>
                <HighchartsReact highcharts={ReactHighcharts} options={appPerformancePie} />
            </ChartCard>
        );
    });

    const allAppsColumns = [
        {
            Header: "Application Name",
            accessor: "applicationName"
        },
        {
            Header: "Failure Percentage",
            accessor: "failerRate"
        }
    ];

    const devicesColumns = [
        {
            Header: 'Application Name',
            accessor: 'applicationName'
        },
        {
            Header: 'device UserName',
            accessor: 'deviceUserName'
        },
        {
            Header: 'Time',
            accessor: 'Time'
        },
        {
            Header: 'Date',
            accessor: 'Date'
        }
    ];

    const devicesTableData = [
        {
            applicationName: 'Zendesk',
            deviceUserName: 'Hassan',
            Time: '5pm',
            Date: '1/23/2022'
        },
        {
            applicationName: 'Oracle NetSuite',
            deviceUserName: 'Ramzy',
            Time: '2am',
            Date: '1/22/2022'
        },
        {
            applicationName: 'Microsoft Dynamics',
            deviceUserName: 'Omar',
            Time: '4pm',
            Date: '1/20/2022'
        },
        {
            applicationName: 'Salesforce',
            deviceUserName: 'Ramzy',
            Time: '11pm',
            Date: '1/19/2022'
        },
        {
            applicationName: 'Zendesk',
            deviceUserName: 'Omar',
            Time: '7pm',
            Date: '1/5/2022'
        }
    ]

    return (
        <Container>
            <TopContainer>
                <ChartsTitle>Application Performance</ChartsTitle>
                <ChartsContainer>
                    {appPerformanceCharts}
                </ChartsContainer>
            </TopContainer>
            <Table
                cols={allAppsColumns}
                title="All Applications"
                url="https://my-json-server.typicode.com/WorexEG/json-server/appPerformance"
            />

            <Table
                cols={devicesColumns}
                title="Devices"
                data={devicesTableData}
            />
        </Container>
    );
};