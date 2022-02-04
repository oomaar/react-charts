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
  border-bottom: 1px solid #f5f5f5;
  padding: 0 1rem 1rem;
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