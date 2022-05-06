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
  // Dummy commit
  const chartsData = applicatoionPerfromaceData.charts.map((chart) => (
    <TopChartsCard key={chart.id}>
      <TopChartsApplicationName>
        {chart.applicationName}
      </TopChartsApplicationName>
      <TopChartsInfoContainer>
        <TopChartsInfoTextContainer>
          <TopChartsInfo>
            Duration <span>{chart.duration}%</span>
          </TopChartsInfo>
        </TopChartsInfoTextContainer>
        <TopChartsInfoTextContainer>
          <TopChartsInfo>
            Failure Count <span>{chart.failureCount}%</span>
          </TopChartsInfo>
        </TopChartsInfoTextContainer>
        <TopChartsInfoTextContainer>
          <TopChartsInfo>
            Failure Devices <span>{chart.failureDevices}%</span>
          </TopChartsInfo>
        </TopChartsInfoTextContainer>
        <TopChartsInfoTextContainer>
          <TopChartsInfo>
            Devices <span>{chart.devices}%</span>
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
