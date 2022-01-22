import styled from 'styled-components';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: #f6f7fb;
  height: 100vh;
  overflow: hidden;
`;

export const LogoContainer = styled.div`
  img {
    width: 270px;
  }
`;

export const LoginHeader = styled.div`
  text-align: center;

  h4 {
    font-size: 1.5rem;
    margin: 1rem 0;
    text-transform: uppercase;
  }

  h6 {
    color: #c8c9c8;
    font-size: 1.2rem;
    margin: 1rem 0 2rem;
  }
`;

export const LoginForm = styled.form`
  background-color: #fff;
  height: 70%;
  padding: 1.5rem;
  margin: 1.2rem 0;
  border-radius: 0.3rem;
  width: 400px;

  @media screen and (max-width: 768px) {
    height: 100%;
  }
`;

export const InputContainer = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: #c8c9c8;
    margin: 0.5rem 0;
  }

  input {
    border: 1px solid #c8c9c8;
    padding: 0.5rem;
    border-radius: 0.3rem;
    margin: 0.5rem 0;
    outline: 0;
    font-size: 1rem;
  }
`;

export const CheckboxContainer = styled.div`
  margin: 2rem 0;

  label {
    margin: 1rem;
  }
`;

export const ButtonsContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ButtonsSubContainer = styled.div`
  margin: 1rem 0;
  display: flex;
`;

export const Button = styled.button`
  color: #fff;
  border: 0;
  outline: 0;
  padding: 0.5rem;
  cursor: pointer;
  transition: all 0.5s ease;
  border-radius: 0.3rem;
  background-color: ${({ jwt, auth0 }) => jwt ? "#1ea6ec" : auth0 ? "#22af47" : "#4466a2"};
  width: ${({ jwt, auth0 }) => (jwt || auth0) ? "45%" : "100%"};
  margin: ${({ jwt, auth0 }) => (jwt || auth0) ? "0 auto" : "0"};

  :disabled {
    opacity: 0.6;
  }

  :hover {
    background-color: ${({ jwt, auth0 }) => jwt ? "#0a84ca" : auth0 ? "#1e9947" : "#4466ff"};
  }
`;

export const IconsTitle = styled.p`
  text-align: center;

  a {
    text-decoration: none;
    cursor: pointer;
    color: #0a84ca;
    margin: 0 0.5rem;
    letter-spacing: 0.1rem;
  }

  ::before {
    content: "";
  }
`;

export const IconsContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 0 1rem;
`;

export const Icon = styled.div`
  background-color: ${({ fb, gog, twit, git }) => fb ? "#50598e" : gog ? "#6fa2d8" : twit ? "#c64e40" : git ? "#8d6e63" : ""};
  color: #fff;
  padding: 0.6rem;
  margin: 0 0.6rem;
  border-radius: 0.4rem;
  cursor: pointer;
`;