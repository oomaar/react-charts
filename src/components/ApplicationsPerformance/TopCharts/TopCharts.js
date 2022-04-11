import applicatoionPerfromaceData from "../../../data/applicationPerformanceData.json";
import {
  TopChartsApplicationName,
  TopChartsCard,
  TopChartsChartContainer,
  TopChartsContainer,
  TopChartsInfo,
  TopChartsInfoContainer,
  TopChartsInfoTextContainer,
} from "./styledTopCharts";

export const TopCharts = () => {
  const chartsData = applicatoionPerfromaceData.charts.map((chart) => (
    <TopChartsCard key={chart.id}>
      <TopChartsInfoContainer>
        <TopChartsApplicationName>
          {chart.applicationName}
        </TopChartsApplicationName>
        <TopChartsInfoTextContainer>
          <TopChartsInfo>
            Success <span>{chart.successRate}%</span>
          </TopChartsInfo>
        </TopChartsInfoTextContainer>
        <TopChartsInfoTextContainer>
          <TopChartsInfo>
            Failure <span>{chart.failureRate}%</span>
          </TopChartsInfo>
        </TopChartsInfoTextContainer>
      </TopChartsInfoContainer>
      <TopChartsChartContainer chartProgress={chart.successRate}>
        <p>{chart.successRate}%</p>
      </TopChartsChartContainer>
    </TopChartsCard>
  ));

  return <TopChartsContainer>{chartsData}</TopChartsContainer>;
};
