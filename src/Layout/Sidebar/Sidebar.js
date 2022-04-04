import {
  SidebarContainer,
  SidebarHeader,
  SidebarTitle,
  SidebarListContainer,
  SidebarListGroup,
  SidebarListGroupToggle,
  SidebarList,
} from "./styledSidebar";
import sidebarData from "../../data/sidebarData.json";
import { useState } from "react";

export const Sidebar = () => {
  const [activeIndex, setActiveIndex] = useState(1);
  console.log(
    "🚀 ~ file: Sidebar.js ~ line 15 ~ Sidebar ~ activeIndex",
    activeIndex
  );

  const handleActiveIndex = (index) => {
    // if (activeIndex === index) {
    //   return setActiveIndex(null);
    // }

    setActiveIndex(index);
  };

  // const [toggleDropdown, setToggleDropdown] = useState(0);

  // const handleToggleDropdown = index => {
  //   if (toggleDropdown === index) {
  //     return setToggleDropdown(null);
  //   }

  //   setToggleDropdown(index);
  // };

  // const sidebarData = data.map(link => (
  //   <SidebarItem key={link.id} onClick={() => link.drop && handleToggleDropdown(link.id)}>
  //     <div>
  //       <IconContainer>
  //         <i className={link.icon}></i>
  //       </IconContainer>
  //       <ItemTitle toggleDropdown={toggleDropdown === link.id && toggleDropdown}>
  //         {link.title} {link.arrowIcon && <i className={link.arrowIcon}></i>}
  //       </ItemTitle>
  //     </div>
  //     {(link.drop && toggleDropdown === link.id) ? link.links.map(lnk => (
  //       <SidebarDrop key={lnk.id} toggleDropdown={toggleDropdown}>
  //         <DropItem toggleDropdown={toggleDropdown}>
  //           {lnk.title}
  //         </DropItem>
  //       </SidebarDrop>
  //     )) : null}

  const sidebarLinks = sidebarData.map((list) => (
    <SidebarListContainer
      key={list.id}
      onClick={() => setActiveIndex(list.groupIndex)}
    >
      <SidebarListGroup>
        <SidebarListGroupToggle
          activeIndex={activeIndex === list.groupIndex && activeIndex}
        >
          <i className={list.icon}></i>
          {list.title}
          <i className="bx bx-chevron-down"></i>
        </SidebarListGroupToggle>
        <SidebarList
          activeIndex={activeIndex === list.groupIndex && activeIndex}
        >
          {list.links.map((link) => (
            <li key={link.id}>{link.title}</li>
          ))}
        </SidebarList>
      </SidebarListGroup>
    </SidebarListContainer>
  ));

  return (
    <SidebarContainer>
      <SidebarHeader>
        <SidebarTitle>
          <span>Fly</span> Insights
        </SidebarTitle>
        <div></div>
      </SidebarHeader>
      {sidebarLinks}
    </SidebarContainer>
  );
};
