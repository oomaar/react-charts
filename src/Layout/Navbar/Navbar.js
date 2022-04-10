import { useState } from "react";
import {
  NavbarNav,
  UserContainer,
  UserAvatar,
  UserName,
  SearchContainer,
  SearchInputIcon,
  SearchInput,
} from "./styledNavbar";

export const Navbar = () => {
  const [openSearchBar, setOpenSearchBar] = useState(false);

  return (
    <NavbarNav>
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
