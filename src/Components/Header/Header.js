import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { signOut } from 'firebase/auth';
import { auth } from '../../lib/firebase';
import {
    Container,
    SubContainer,
    SubBox,
    HeaderLogo,
    BurgerIconContainer,
    HeaderToggleIcon,
    SearchContainer,
    SearchIcon,
    SearchInput,
    RightContainer,
    RightIconContainer,
    UserAvatar,
    UserDropdown,
    DropItem,
} from "./styledHeader";

export const Header = ({ toggleSidebar, setToggleSidebar }) => {
    const [toogleHeader, setToggleHeader] = useState(false);
    const navigate = useNavigate();

    const handleLogout = async () => {
        await signOut(auth);
        navigate("/");
    };

    return (
        <Container toggleSidebar={toggleSidebar} toogleHeader={toogleHeader}>
            <SubBox>
                <BurgerIconContainer onClick={() => setToggleSidebar(true)}>
                    <HeaderLogo>
                        <img src="/images/logo.png" alt="Logo" />
                    </HeaderLogo>
                    <i className="uil uil-align-left"></i>
                </BurgerIconContainer>
                <HeaderToggleIcon onClick={() => setToggleHeader(state => !state)}>
                    <i className="uil uil-apps"></i>
                </HeaderToggleIcon>
            </SubBox>
            <SubContainer toogleHeader={toogleHeader}>
                <SearchContainer>
                    <SearchIcon>
                        <i className="uil uil-search"></i>
                    </SearchIcon>
                    <SearchInput type="text" placeholder="Search" />
                </SearchContainer>
                <RightContainer>
                    <RightIconContainer><i className="uil uil-expand-arrows-alt"></i></RightIconContainer>
                    <RightIconContainer>EN</RightIconContainer>
                    <RightIconContainer>
                        <i className="uil uil-bell"></i>
                        <i className="uil uil-comment"></i>
                    </RightIconContainer>
                    <UserAvatar>
                        <img src="/images/user-sidebar.png" alt="User" />
                        <UserDropdown>
                            <div>
                                <DropItem>
                                    <i className="uil uil-user"></i>
                                    Edit Profile
                                </DropItem>
                                <DropItem>
                                    <i className="uil uil-envelope"></i>
                                    Inbox
                                </DropItem>
                                <DropItem>
                                    <i className="uil uil-lock"></i>
                                    Lock Screen
                                </DropItem>
                            </div>
                            <DropItem>
                                <i className="uil uil-setting"></i>
                                Settings
                            </DropItem>
                            <DropItem onClick={handleLogout}>
                                <i className="uil uil-signout"></i>
                                Log out
                            </DropItem>
                        </UserDropdown>
                    </UserAvatar>
                </RightContainer>
            </SubContainer>
        </Container>
    );
};
