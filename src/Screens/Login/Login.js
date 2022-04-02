import { Link } from "react-router-dom";
import {
  LoginContainer,
  LoginImageContainer,
  LoginTitle,
  LoginSubtitle,
  FormContainer,
  FormTitle,
  FormForm,
  FormInputContainer,
  FormLabel,
  FormInput,
  FormButton,
  FormCopyRight,
} from "./styledLogin";

export const Login = () => {
  return (
    <LoginContainer>
      <LoginImageContainer>
        <LoginSubtitle>Welcome to Fly Insights !</LoginSubtitle>
        <LoginTitle>
          <span>Fly</span> Insights
        </LoginTitle>
      </LoginImageContainer>
      <FormContainer>
        <FormTitle>Sign in to your account</FormTitle>
        <FormForm>
          <FormInputContainer>
            <FormInput type="text" required />
            <FormLabel>
              <span>Username</span>
            </FormLabel>
          </FormInputContainer>
          <FormInputContainer>
            <FormInput type="password" required />
            <FormLabel>
              <span>Password</span>
            </FormLabel>
          </FormInputContainer>
          <Link to="/applications-performance">
            <FormButton>Sign in</FormButton>
          </Link>
        </FormForm>
        <FormCopyRight>Copyright © 2022 Fly Insights</FormCopyRight>
      </FormContainer>
    </LoginContainer>
  );
};
