import { SidebarContainer, SidebarHeader, SidebarTitle } from "./styledSidebar";
import sidebarData from "../../data/sidebarData.json";

export const Sidebar = () => {
  const sidebarLinks = sidebarData.map((list) => (
    <div key={list.id}>
      <p>
        <i className={list.icon}></i>
        {list.title}
        <i class="bx bx-chevron-down"></i>
      </p>
      <ul>
        {list.links.map((link) => (
          <li key={link.id}>
            <p>{link.title}</p>
          </li>
        ))}
      </ul>
    </div>
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
