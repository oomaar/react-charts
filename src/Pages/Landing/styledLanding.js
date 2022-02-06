import styled from 'styled-components';

export const Container = styled.div`
  padding: 2rem;

  @media screen and (max-width: 1024px) {
    padding: 1rem;
  }

  @media screen and (max-width: 768px) {
    padding: 0;
  }
`;

export const TopContainer = styled.div`
  background-color: #fff;
  border-radius: 1rem;
  padding: 1rem 0;
`;

export const ChartsTitle = styled.p`
  padding: 0 1rem 1rem;
`;

export const FiltersContainer = styled.div`
  border-bottom: 1px solid #f5f5f5;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const Filters = styled.div`
  display: flex;
  flex-direction: column;
  width: 25%;
`;

export const FilterButton = styled.button`
  background-color: ${({ subButton }) => subButton ? "#4169e1" : "#00008b"};
  font-size: 1rem;
  border: 0;
  outline: 0;
  color: #fff;
  padding: 0.5rem 1rem;
  cursor: pointer;
  border-radius: 0.5rem;
`;

export const SubFilters = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 0.8rem 0;
`;

export const ChartsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);

  @media screen and (max-width: 768px) {
    grid-template-columns: repeat(1, 1fr);
  }
`;

export const ChartCard = styled.div`
  width: 500px;
  margin: 1rem auto;
  border-radius: 1rem;
  padding: 1rem;
  box-shadow: 1px 1px 3px 1px rgba(0, 0, 0, 0.1);
  z-index: 1;

  @media screen and (max-width: 1024px) {
    width: 400px;
  }

  @media screen and (max-width: 768px) {
    width: 280px;
    padding: 0;
  }
`;