import { useState } from "react";
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
import { useAuth } from "../../context/AuthContext";

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const auth = useAuth();

  const isInvalid = password === "" || userName === "";

  async function handleSubmit(e) {
    e.preventDefault();
    auth.login(userName, password);
  }

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
        <FormForm onSubmit={(e) => handleSubmit(e)}>
          <FormInputContainer>
            <FormInput
              type="text"
              required
              value={userName}
              onChange={(e) => setUserName(e.target.value)}
            />
            <FormLabel>
              <span>Username</span>
            </FormLabel>
          </FormInputContainer>
          <FormInputContainer>
            <FormInput
              type="password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
            />
            <FormLabel>
              <span>Password</span>
            </FormLabel>
          </FormInputContainer>
          <FormButton isDisabled={isInvalid} disabled={isInvalid} type="submit">
            Sign in
          </FormButton>
        </FormForm>
        <FormCopyRight>Copyright © 2022 Fly Insights</FormCopyRight>
      </FormContainer>
    </LoginContainer>
  );
};
