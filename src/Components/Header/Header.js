import { useState } from "react";
import {
    Container,
    SubContainer,
    SubBox,
    BurgerIconContainer,
    HeaderToggleIcon,
    SearchContainer,
    SearchIcon,
    SearchInput,
    RightContainer,
    RightIconContainer,
    UserAvatar,
} from "./styledHeader";

export const Header = ({ toggleSidebar, setToggleSidebar }) => {
    const [toogleHeader, setToggleHeader] = useState(false);

    return (
        <Container toggleSidebar={toggleSidebar} toogleHeader={toogleHeader}>
            <SubBox>
                <BurgerIconContainer onClick={() => setToggleSidebar(true)}>
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
                    </UserAvatar>
                </RightContainer>
            </SubContainer>
        </Container>
    );
};
