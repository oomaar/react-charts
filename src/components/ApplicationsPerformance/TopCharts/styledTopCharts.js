import styled from "styled-components";

export const TopChartsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0 1rem;
  color: #fff;
`;

export const TopChartsCard = styled.div`
  background: linear-gradient(
    127.09deg,
    rgba(6, 11, 40, 0.94) 25.41%,
    rgba(10, 14, 35, 0.49) 69.65%
  );
  padding: 1rem;
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 1rem;
`;

export const TopChartsInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;
`;

export const TopChartsApplicationName = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
`;

export const TopChartsInfoTextContainer = styled.div`
  background-color: rgba(6, 11, 40, 0.94);
  background: linear-gradient(
    126.97deg,
    #060c29 28.26%,
    rgba(255, 255, 255, 0.1) 91.2%
  );
  padding: 1rem;
  border-radius: 1rem;
  width: 200px;
`;

export const TopChartsInfo = styled.span`
  display: flex;
  flex-direction: column;
  color: ${({ theme }) => theme.colors.textColor};
  font-size: 1.1rem;

  span {
    color: #fff;
    margin-top: 0.5rem;
    font-size: 1.5rem;
  }
`;

export const TopChartsChartContainer = styled.div`
  width: 150px;
  aspect-ratio: 1;
  position: relative;
  display: inline-grid;
  margin: 5px;
  place-content: center;
  font-size: 25px;
  font-weight: bold;

  ::before {
    content: "";
    position: absolute;
    border-radius: 50%;

    inset: 0;
    background: radial-gradient(
          farthest-side,
          rgba(5, 205, 153, 1) 98%,
          #05cd99
        )
        top/15px 15px no-repeat,
      conic-gradient(
        #05cd99 calc(${({ chartProgress }) => chartProgress} * 1%),
        #0000 0
      );
    -webkit-mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - 22px),
      #000 calc(100% - 22px)
    );
    mask: radial-gradient(
      farthest-side,
      #0000 calc(99% - 15px),
      #000 calc(100% - 15px)
    );
  }

  ::after {
    content: "";
    position: absolute;
    border-radius: 50%;
    inset: calc(50% - 15px / 2);
    background: #05cd99;
    transform: rotate(calc(${({ chartProgress }) => chartProgress} * 3.6deg))
      translateY(calc(50% - 150px / 2));
  }
`;
