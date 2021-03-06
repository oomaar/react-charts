import styled from "styled-components";

export const LoginContainer = styled.div`
  background: ${({ theme }) => theme.colors.bodyColor};
  color: #1a202c;
  height: 100vh;
  display: flex;

  @media screen and (max-width: 1024px) {
    justify-content: center;
    align-items: center;
  }
`;

export const LoginImageContainer = styled.div`
  background: url("/images/login-image.png") center center / cover no-repeat;
  flex-grow: 0.5;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  color: #fff;

  @media screen and (max-width: 1024px) {
    display: none;
  }
`;

export const LoginTitle = styled.h3`
  font-size: 3rem;
  font-weight: 500;
  margin: 0.5rem 0;

  span {
    color: ${({ theme }) => theme.colors.buttonColor};
  }
`;

export const LoginSubtitle = styled.p`
  font-size: 1.3rem;
  margin: 0.5rem 0;
`;

export const FormContainer = styled.div`
  flex-grow: 0.5;
  align-self: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  color: #fff;
`;

export const FormTitle = styled.h3`
  font-size: 1.3rem;
`;

export const FormForm = styled.form`
  width: 300px;

  @media screen and (max-width: 768px) {
    width: 100%;
  }
`;

export const FormInputContainer = styled.div`
  background: ${({ theme }) => theme.colors.containerColor};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 2px;
  margin: 2rem 0;
  width: 100%;
  height: 50px;
  position: relative;
  border-radius: 1.4rem;
`;

export const FormLabel = styled.label`
  position: absolute;
  pointer-events: none;
  width: 100%;
  height: 100%;
  border-radius: 1rem;
  color: ${({ theme }) => theme.colors.textColor};

  span {
    position: absolute;
    left: 1rem;
    top: 25%;
    transition: all 0.2s ease-in;
  }
`;

export const FormInput = styled.input`
  background-color: ${({ theme }) => theme.colors.inputColor};
  width: 100%;
  height: 95%;
  border-radius: 1rem;
  color: #fff;
  padding-left: 1rem;
  transition: all 0.2s ease-in;
  font-size: 1rem;

  :focus {
    outline: 1px solid ${({ theme }) => theme.colors.borderColor};
  }

  :focus + ${FormLabel} span {
    transform: translateY(-70%);
    top: -0.6rem;
    left: 0;
    font-size: 0.9rem;
  }

  :valid + ${FormLabel} span {
    transform: translateY(-70%);
    top: -0.6rem;
    left: 0;
    font-size: 0.9rem;
  }
`;

export const FormButton = styled.button`
  display: flex;
  justify-content: center;
  background: ${({ theme }) => theme.colors.buttonColor};
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.65rem;
  margin: 0 auto;
  transition: all 0.2s ease-in;
  width: 300px;
  opacity: ${({ isDisabled }) => (isDisabled ? "0.5" : "1")};

  :hover {
    background: ${({ theme }) => theme.colors.buttonHover};
  }
`;

export const FormCopyRight = styled.h6`
  color: ${({ theme }) => theme.colors.textColor};
`;
