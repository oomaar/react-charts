import { useNavigate } from "react-router-dom";
import { getUser, removeUserSession } from "../../client/client-utils/utils";
import {
  NavbarNav,
  UserContainer,
  UserAvatar,
  UserName,
  SearchContainer,
  SearchInputIcon,
  SearchInput,
  NavbarButton,
  Line,
  LogoutButton,
} from "./styledNavbar";

export const Navbar = ({ showSidebar, setShowSidebar }) => {
  const navigate = useNavigate();

  const handleLogout = () => {
    removeUserSession();
    navigate("/");
  };

  return (
    <NavbarNav>
      <NavbarButton
        showSidebar={showSidebar}
        onClick={() => setShowSidebar((state) => !state)}
      >
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </NavbarButton>
      <SearchContainer>
        <SearchInputIcon>
          <i className="bx bx-search-alt-2" />
        </SearchInputIcon>
        <SearchInput type="text" required placeholder="Search Pages" />
      </SearchContainer>
      <UserContainer>
        <UserAvatar>
          <i className="bx bxs-user" />
        </UserAvatar>
        <UserName>{getUser().username}</UserName>
      </UserContainer>
      <LogoutButton onClick={handleLogout}>Log out</LogoutButton>
    </NavbarNav>
  );
};
