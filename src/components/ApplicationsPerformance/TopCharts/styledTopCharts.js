import styled from "styled-components";

export const TopChartsParentContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const TopChartsBox = styled.div`
  background: linear-gradient(
    127.09deg,
    rgba(26, 21, 50, 0.94) 25.41%,
    rgba(20, 24, 45, 0.49) 69.65%
  );
  padding: 1rem 0.3rem;
  border-radius: 1rem;
  width: 500px;

  @media screen and (max-width: 850px) {
    width: 100%;
  }

  @media screen and (max-width: 665px) {
    width: 95%;
  }
`;

export const TopChartsApplicationName = styled.p`
  font-size: 1.6rem;
  font-weight: 700;
  margin: 0;
  margin-bottom: 1rem;
  text-align: center;
`;

export const TopChartsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 500px);
  gap: 1rem;
  color: #fff;

  @media screen and (max-width: 1356px) {
    grid-template-columns: repeat(1, 1fr);
    justify-items: center;
  }
`;

export const TopChartsCard = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  gap: 1rem 0;

  @media screen and (max-width: 330px) {
    flex-direction: column;
  }
`;

export const TopChartsInfoContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1rem;

  @media screen and (max-width: 850px) {
    grid-template-columns: repeat(1, 1fr);
    /* justify-items: center; */
  }
`;

export const TopChartsInfoTextContainer = styled.div`
  background-color: rgba(6, 11, 40, 0.94);
  background: linear-gradient(
    126.97deg,
    #060c29 28.26%,
    rgba(255, 255, 255, 0.1) 91.2%
  );
  padding: 0.5rem 0.7rem;
  border-radius: 1rem;
  width: 145px;
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
  z-index: 1;
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
