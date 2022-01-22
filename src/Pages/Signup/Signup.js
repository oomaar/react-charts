import { createUserWithEmailAndPassword } from "firebase/auth";
import { useRef, useState } from "react";
import { FaFacebookF, FaGoogle, FaTwitter, FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { auth } from "../../lib/firebase";
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
} from "../Login/styledLogin";

export const Signup = ({ title, subTitle }) => {
    const emailRef = useRef(null);
    const passwordRef = useRef(null);
    const [error, setError] = useState("");
    const navigate = useNavigate();

    const isInvalid = passwordRef === '' || emailRef === '';

    const handleSignUp = async e => {
        e.preventDefault();

        try {
            const loginEmail = emailRef.current.value;
            const loginPassword = passwordRef.current.value;

            const userCredential = await createUserWithEmailAndPassword(auth, loginEmail, loginPassword);
            console.log("🚀 ~ file: Login.js ~ line 44 ~ Login ~ userCredential", userCredential);
            navigate("/landing");
        } catch (err) {
            setError(err);
            console.log(error);
        };
    };

    return (
        <Container>
            <LogoContainer>
                <img src="/images/logo.png" width={300} style={{ 'borderRadius': '45px' }} alt="" />
            </LogoContainer>

            <LoginForm>
                <LoginHeader>
                    <h4>{title}</h4>
                    <h6>{subTitle}</h6>
                </LoginHeader>
                {error && <span>error</span>}
                <InputContainer>
                    <label>Your Name</label>
                    <input
                        ref={emailRef}
                        type="email"
                        name="email"
                        placeholder="Email address"
                        autoComplete="off"
                        required
                    />
                </InputContainer>
                <InputContainer>
                    <label>Password</label>
                    <input
                        ref={passwordRef}
                        type="password"
                        name="password"
                        placeholder="Password"
                        autoComplete="off"
                        required
                    />
                </InputContainer>

                <CheckboxContainer>
                    <input type="checkbox" />
                    <label htmlFor="checkbox1">Remember Me</label>
                </CheckboxContainer>

                <ButtonsContainer>
                    <ButtonsSubContainer>
                        <Button type="submit" disabled={isInvalid} onClick={e => handleSignUp(e)}>{title}</Button>
                    </ButtonsSubContainer>
                    <ButtonsSubContainer>
                        <Button jwt type="button">{title} With JWT</Button>
                        <Button auth0 type="button">{title} With Auth0</Button>
                    </ButtonsSubContainer>
                </ButtonsContainer>

                <IconsTitle>Have an account?<a href="/">Login</a></IconsTitle>

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
