import axios from "axios";
import { useNavigate } from "react-router-dom";
import { setUserSession } from "../../client/client-utils/utils";
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

export const Login = () => {
  const [userName, setUserName] = useState("");
  const [password, setPassword] = useState("");
  const navigate = useNavigate();

  const isInvalid = password === "" || userName === "";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const userobj = {
      username: userName,
      password: password,
    };

    await axios
      .post(
        "https://flyworex.azurewebsites.net/api/Authenticate/login",
        userobj,
        {
          headers: { "Access-Control-Allow-Origin": "*" },
        }
      )
      .then((response) => {
        const userinfo = {
          username: userName,
          role: response.data.role,
        };
        setUserSession(response.data.token, userinfo);
        localStorage.setItem("user-info", JSON.stringify(response.data));
      })
      .catch((error) => {
        console.log(
          "🚀 ~ file: Login.js ~ line 52 ~ handleSubmit ~ error",
          error
        );
        alert("check your userName or Password");
        setUserName("");
        setPassword("");
      });
    navigate("/applications-performance");
  };

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
