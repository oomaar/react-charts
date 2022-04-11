import { useNavigate } from "react-router-dom";
import { removeUserSession } from "../../client/client-utils/utils";
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
} from "./styledNavbar";

export const Navbar = ({ showSidebar, setShowSidebar }) => {
  const navigate = useNavigate();

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
        <UserName>Sign In</UserName>
      </UserContainer>
      <button
        onClick={() => {
          removeUserSession();
          // window.location.reload(false);
          navigate("/");
        }}
      >
        Log out
      </button>
    </NavbarNav>
  );
};
