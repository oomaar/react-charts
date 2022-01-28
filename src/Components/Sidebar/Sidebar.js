import data from "../../data/sidebarData.json";
import {
    Container,
    Overlay,
    TopContainer,
    LogoContainer,
    UserImage,
    SidebarTitle,
    SidebarSubtitle,
    BottomContainer,
    SidebarList,
    SidebarItem,
    IconContainer,
    ItemTitle,
} from "./styledSidebar";


export const Sidebar = ({ toggleSidebar, setToggleSidebar }) => {
    const sidebarData = data.map(link => (
        <SidebarItem key={link.id}>
            <IconContainer>
                <i className={link.icon}></i>
            </IconContainer>
            <ItemTitle>{link.title} {link.arrowIcon && <i className={link.arrowIcon}></i>}</ItemTitle>
        </SidebarItem>
    ));

    return (
        <>
            <Overlay toggleSidebar={toggleSidebar} onClick={() => setToggleSidebar(false)} />
            <Container toggleSidebar={toggleSidebar}>
                <TopContainer>
                    <i className="uil uil-times" onClick={() => setToggleSidebar(false)}></i>
                    <LogoContainer><img src="/images/logo.png" alt="Logo" /></LogoContainer>
                    <UserImage><img src="/images/user-sidebar.png" alt="User" /></UserImage>
                    <SidebarTitle>Username</SidebarTitle>
                    <SidebarSubtitle>General Manager.</SidebarSubtitle>
                </TopContainer>
                <BottomContainer>
                    <SidebarList>
                        {sidebarData}
                    </SidebarList>
                </BottomContainer>
            </Container>
        </>
    );
};
