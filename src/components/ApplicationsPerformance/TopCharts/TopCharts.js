import {
  TopChartsBox,
  TopChartsApplicationName,
  TopChartsCard,
  TopChartsChartContainer,
  TopChartsContainer,
  TopChartsInfo,
  TopChartsInfoContainer,
  TopChartsInfoTextContainer,
  TopChartsParentContainer,
} from "./styledTopCharts";

export const TopCharts = ({ data }) => {
  const chartsData = data.map((chart, index) => {
    const percentage = Number(
      ((chart.successCount / chart.totalCount) * 100).toFixed(1)
    );

    return (
      <TopChartsBox key={index}>
        <TopChartsApplicationName>{chart.processName}</TopChartsApplicationName>
        <TopChartsCard>
          <TopChartsInfoContainer>
            <TopChartsInfoTextContainer>
              <TopChartsInfo>
                Duration <span>{(chart.totalCount / 3).toFixed(2)}</span>
              </TopChartsInfo>
            </TopChartsInfoTextContainer>
            <TopChartsInfoTextContainer>
              <TopChartsInfo>
                Devices <span>{chart.computersCount}</span>
              </TopChartsInfo>
            </TopChartsInfoTextContainer>
            <TopChartsInfoTextContainer>
              <TopChartsInfo>
                Failures Count <span>{chart.failureCount}</span>
              </TopChartsInfo>
            </TopChartsInfoTextContainer>
            <TopChartsInfoTextContainer>
              <TopChartsInfo>
                Failure Devices <span>{chart.failureComputersCount}</span>
              </TopChartsInfo>
            </TopChartsInfoTextContainer>
          </TopChartsInfoContainer>
          <TopChartsChartContainer chartProgress={percentage}>
            <p>{percentage}%</p>
          </TopChartsChartContainer>
        </TopChartsCard>
      </TopChartsBox>
    );
  });

  return (
    <TopChartsParentContainer>
      <TopChartsContainer>{chartsData}</TopChartsContainer>
    </TopChartsParentContainer>
  );
};
