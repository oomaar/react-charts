import styled from "styled-components";

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  position: fixed;
  inset: 0;
  z-index: 9999;
  transition: all 0.5s ease-in;
  transform: ${(
    // @ts-ignore
    { showModal }
  ) => (showModal ? "translateY(0)" : "translateY(-500vh)")};
`;

export const ModalBackDrop = styled.div`
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  position: fixed;
  inset: 0;
  transform: ${(
    // @ts-ignore
    { showModal }
  ) => (showModal ? "scale(1)" : "scale(0)")};
`;

export const ModalContentContainer = styled.div`
  position: relative;
  background: linear-gradient(
    126.97deg,
    #06092c 28.26%,
    rgba(12, 3, 50, 1) 91.2%
  );
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 99999;
`;

export const ModalHeader = styled.div``;

export const ModalTitle = styled.h1``;

export const ModalBody = styled.div`
  width: 1000px;
`;

export const ModalNav = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 0 1.5rem;
`;

export const ModalNavButton = styled.button`
  border: 1px solid #e0e0e0;
  background: transparent;
  border-radius: 0.5rem;
  outline: 0;
  color: #e0e0e0;
  padding: 0.5rem 1rem;
  font-weight: 700;
  transition: all 0.3s ease-in;

  :hover {
    color: #000;
    background: #e0e0e0;
    border: 1px solid transparent;
  }
`;
