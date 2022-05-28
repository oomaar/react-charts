import {
  PageHeaderContainer,
  PageHeaderTitle,
  PageFiltersContainer,
} from "./styledPageHeader";

export const PageHeader = ({ title }) => {
  return (
    <PageHeaderContainer>
      <PageHeaderTitle>{title}</PageHeaderTitle>
      <PageFiltersContainer>Filters Goes Here</PageFiltersContainer>
    </PageHeaderContainer>
  );
};
