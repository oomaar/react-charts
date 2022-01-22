import { signOut } from 'firebase/auth';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { auth } from '../../lib/firebase';
import {
    Container,
} from "./styledLanding";

export const Landing = () => {
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/");
    };

    return (
        <Container>
            <h1 onClick={handleLogout}>Landing Page(Logout)</h1>
        </Container>
    );
};
