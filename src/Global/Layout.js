import React, { useState } from 'react';
import { GlobalStyle } from '.';
import { Header, Sidebar } from '../Components';

export const Layout = ({ children }) => {
    const [toggleSidebar, setToggleSidebar] = useState(false);

    return (
        <div>
            <GlobalStyle />
            <Header setToggleSidebar={setToggleSidebar} />
            <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
            {children}
        </div>
    );
};
