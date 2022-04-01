import styled from "styled-components";

export const LoginContainer = styled.div`
  background: linear-gradient(
    159deg,
    #0f123b 14.25%,
    #090d2e 56.45%,
    #020515 86.14%
  );
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
    color: #582cff;
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
  background: radial-gradient(
      69.43% 69.43% at 50% 50%,
      #ffffff 0%,
      rgba(255, 255, 255, 0) 100%
    ),
    radial-gradient(
      60% 51.57% at 50% 50%,
      #582cff 0%,
      rgba(88, 44, 255, 0) 100%
    ),
    radial-gradient(54.8% 53% at 50% 50%, #151515 0%, rgba(21, 21, 21, 0) 100%);
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
  color: #6d778e;

  span {
    position: absolute;
    left: 1rem;
    top: 25%;
    transition: all 0.2s ease-in;
  }
`;

export const FormInput = styled.input`
  background-color: #131536;
  width: 100%;
  height: 95%;
  border-radius: 1rem;
  color: #fff;
  padding-left: 1rem;
  transition: all 0.2s ease-in;
  font-size: 1rem;

  :focus {
    outline: 1px solid #3182ce;
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
  background: #582cff;
  color: #fff;
  font-size: 1rem;
  padding: 0.5rem 1rem;
  border-radius: 0.65rem;
  margin: 0 auto;
  transition: all 0.2s ease-in;
  width: 300px;

  :hover {
    background: #582cee;
  }
`;

export const FormCopyRight = styled.h6`
  color: #6d778e;
`;
