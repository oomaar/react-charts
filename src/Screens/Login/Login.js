import {
  LoginContainer,
  LoginSubContainer,
  LoginImage,
  LoginFormContainer,
  LoginIcon,
  LoginTitle,
  LoginForm,
  LoginFormInputContainer,
  LoginFormInputLabel,
  LoginFormInput,
  LoginFormButton,
  LoginCopy,
} from "./styledLogin";

export const Login = () => {
  return (
    <LoginContainer>
      <LoginSubContainer>
        <LoginImage>
          <h1>
            <span>Fly</span> Insights
          </h1>
          <img src="/images/login-photo.png" alt="Dashboard png" />
          <LoginTitle>Welcome to Fly Insights !</LoginTitle>
        </LoginImage>
        <LoginFormContainer>
          <LoginIcon>
            <img src="/images/user.png" alt="User Avatar" />
          </LoginIcon>
          <LoginTitle>Sign in to your account</LoginTitle>
          <LoginForm>
            <LoginFormInputContainer>
              <LoginFormInputLabel>Username</LoginFormInputLabel>
              <LoginFormInput />
            </LoginFormInputContainer>
            <LoginFormInputContainer>
              <LoginFormInputLabel>Password</LoginFormInputLabel>
              <LoginFormInput />
            </LoginFormInputContainer>
            <LoginFormButton>Sign in</LoginFormButton>
            <LoginCopy>Copyright © 2022 Fly Insights.</LoginCopy>
          </LoginForm>
        </LoginFormContainer>
      </LoginSubContainer>
    </LoginContainer>
  );
};
