import axios from "axios";
import { useState } from "react";
import { FaFacebookF, FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { setUserSession } from "../../Utils";
import {
    Container,
    LogoContainer,
    LoginHeader,
    LoginForm,
    InputContainer,
    CheckboxContainer,
    ButtonsContainer,
    ButtonsSubContainer,
    Button,
    IconsTitle,
    IconsContainer,
    Icon,
} from "./styledLogin";

export const Login = (props) => {
    const [userName, setUserName] = useState("");
    const [password, setPassword] = useState("");
    const navigate = useNavigate();

    const validateForm = () => {
        return userName.length > 0 && password.length > 0;
    };

    const handleSubmit = async e => {
        e.preventDefault();
        let userData = {
            "userName": userName,
            "password": password
        };

        axios.post('https://flyworex.azurewebsites.net/api/Authenticate/login',
            userData,
            {
                headers: { 'Access-Control-Allow-Origin': '*' }
            })
            .then(response => {
                var userInfo = {
                    username: userName,
                    role: response.data.role
                };
                setUserSession(response.data.token, userInfo);
                localStorage.setItem("user-info", JSON.stringify(response.data));
                console.log(response.data);
                navigate(`/landing`);
            })
            .catch(error => {
                console.log(error);
                alert('check your userName or Password');
            });
    };

    return (
        <Container>
            <LogoContainer>
                <img src="/images/logo2.png" width={300} style={{ 'borderRadius': '45px' }} alt="" />
            </LogoContainer>

            <LoginForm>
                <LoginHeader>
                    <h4>LOGIN</h4>
                    <h6>Enter your Username and Password</h6>
                </LoginHeader>
                <InputContainer>
                    <label>Your Name</label>
                    <input
                        type="email"
                        name="email"
                        value={userName}
                        onChange={e => setUserName(e.target.value)}
                        placeholder="Email address"
                    />
                </InputContainer>
                <InputContainer>
                    <label className="col-form-label">Password</label>
                    <input
                        type="password"
                        name="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </InputContainer>

                <CheckboxContainer>
                    <input type="checkbox" />
                    <label htmlFor="checkbox1">Remember Me</label>
                </CheckboxContainer>

                <ButtonsContainer>
                    <ButtonsSubContainer>
                        <Button type="submit" disabled={!validateForm()} onClick={e => handleSubmit(e)}>Login</Button>
                    </ButtonsSubContainer>
                    <ButtonsSubContainer>
                        <Button jwt type="button">Login With JWT</Button>
                        <Button auth0 type="button">Login With Auth0</Button>
                    </ButtonsSubContainer>
                </ButtonsContainer>

                <IconsTitle>Or Login With</IconsTitle>

                <IconsContainer>
                    <Icon fb><FaFacebookF /></Icon>
                    <Icon gog><FaGoogle /></Icon>
                    <Icon twit><FaTwitter /></Icon>
                    <Icon git><FaGithub /></Icon>
                </IconsContainer>
            </LoginForm>
        </Container>
    );
};
