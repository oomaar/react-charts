import { useState } from "react";
import sidebarData from "../../data/sidebarData.json";
import {
  SidebarContainer,
  SidebarHeader,
  SidebarTitle,
  SidebarListContainer,
  SidebarListGroup,
  SidebarListGroupToggle,
  SidebarList,
} from "./styledSidebar";

export const Sidebar = ({ showSidebar }) => {
  const [activeIndex, setActiveIndex] = useState(1);

  const sidebarLinks = sidebarData.map((list) => (
    <SidebarListContainer
      key={list.id}
      onClick={() => setActiveIndex(list.groupIndex)}
    >
      <SidebarListGroup>
        <SidebarListGroupToggle
          activeIndex={activeIndex === list.groupIndex && activeIndex}
          className={activeIndex === list.groupIndex && "active"}
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
    <SidebarContainer showSidebar={showSidebar}>
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
