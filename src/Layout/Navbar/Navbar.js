import { useState } from "react";
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

export const Navbar = ({ setShowSidebar }) => {
  const [openSearchBar, setOpenSearchBar] = useState(false);

  return (
    <NavbarNav>
      <NavbarButton onClick={() => setShowSidebar((state) => !state)}>
        <Line></Line>
        <Line></Line>
        <Line></Line>
      </NavbarButton>
      <SearchContainer openSearchBar={openSearchBar}>
        <SearchInputIcon onClick={() => setOpenSearchBar((state) => !state)}>
          <i class="bx bx-search-alt-2" />
        </SearchInputIcon>
        <SearchInput
          openSearchBar={openSearchBar}
          type="text"
          required
          placeholder="Search Pages"
        />
      </SearchContainer>
      <UserContainer>
        <UserAvatar>
          <i class="bx bxs-user" />
        </UserAvatar>
        <UserName>Sign In</UserName>
      </UserContainer>
    </NavbarNav>
  );
};
