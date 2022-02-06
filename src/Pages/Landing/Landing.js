import { useEffect, useState } from 'react';
import ReactHighcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';
import axios from 'axios';
import { Table } from '../../Components';
import allAppsTableData from "../../data/TablesData/landingAllApps.json";
import devicesTableData from "../../data/TablesData/landingDevicesData.json";
import {
    Container,
    TopContainer,
    ChartsTitle,
    ChartsContainer,
    ChartCard,
    Filters,
    FilterButton,
    SubFilters,
    FiltersContainer,
} from "./styledLanding";

export const Landing = () => {
    const [appPerformance, setAppPerformance] = useState([]);

    useEffect(() => {
        const fetchData = async () => {
            const res = await axios.get(`https://my-json-server.typicode.com/WorexEG/json-server/appPerformance`);
            setAppPerformance(res.data.slice(0, 4));
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
            Header: 'Username',
            accessor: 'deviceUserName'
        },
        {
            Header: 'Date',
            accessor: 'Date'
        },
        {
            Header: 'Time',
            accessor: 'Time'
        }
    ];

    return (
        <Container>
            <TopContainer>
                <FiltersContainer>
                    <ChartsTitle>Application Performance</ChartsTitle>
                    <Filters>
                        <FilterButton>Today</FilterButton>
                        <SubFilters>
                            <FilterButton subButton>Last Day</FilterButton>
                            <FilterButton subButton>Last Week</FilterButton>
                            <FilterButton subButton>Last Month</FilterButton>
                        </SubFilters>
                    </Filters>
                </FiltersContainer>
                <ChartsContainer>
                    {appPerformanceCharts}
                </ChartsContainer>
            </TopContainer>
            <Table
                cols={allAppsColumns}
                title="All The Applications"
                data={allAppsTableData}
            />
            <Table
                cols={devicesColumns}
                title="Devices"
                data={devicesTableData}
            />
        </Container>
    );
};