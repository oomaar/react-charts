import { useState } from "react";
import { useAuthedClient } from "../../context/AuthedClientContext";
import useFetchData from "../../hooks/useFetchData";
import {
  PageHeaderContainer,
  PageHeaderTitle,
  PageFiltersContainer,
  UserFilterList,
  UserFilterItem,
  UserFilterContainer,
} from "./styledPageHeader";

export const PageHeader = ({ title }) => {
  const [userList, setUserList] = useState(false);
  const [userFilterValue, setUserFilterValue] = useState("All Users");
  const [searchUser, setSearchUser] = useState("");

  const authedClient = useAuthedClient();

  const fetchedData = useFetchData(authedClient.getAllUsers());
  const data = fetchedData.data.data;

  const allUsers = data
    ?.filter((item) => {
      if (searchUser === "") {
        return item;
      } else if (
        item.userName.toLowerCase().includes(searchUser.toLowerCase())
      ) {
        return item;
      }

      return 0;
    })
    .map((user) => (
      <UserFilterItem
        key={user.id}
        onClick={() => {
          setUserFilterValue(user.userName);
          setUserList(false);
        }}
      >
        {user.userName}
      </UserFilterItem>
    ));

  return (
    <PageHeaderContainer>
      <PageHeaderTitle>{title}</PageHeaderTitle>
      <PageFiltersContainer>
        <UserFilterContainer>
          <span onClick={() => setUserList((state) => !state)}>
            <i className="bx bxs-user" /> {userFilterValue}{" "}
            <i userList={userList} className="bx bx-chevron-down" />
          </span>
          <UserFilterList userList={userList}>
            <div>
              <input
                type="text"
                onChange={(e) => setSearchUser(e.target.value)}
                value={searchUser}
              />
              <i className="bx bx-x" onClick={() => setSearchUser("")} />
            </div>
            <UserFilterItem
              onClick={() => {
                setUserFilterValue("All Users");
                setUserList(false);
              }}
            >
              All Users
            </UserFilterItem>
            {allUsers}
          </UserFilterList>
        </UserFilterContainer>
      </PageFiltersContainer>
    </PageHeaderContainer>
  );
};
