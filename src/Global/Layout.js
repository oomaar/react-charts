import React, { useState } from 'react';
import { GlobalStyle } from '.';
import { Header, Sidebar } from '../Components';

export const Layout = ({ children }) => {
    const [toggleSidebar, setToggleSidebar] = useState(true);
    const handleToggleSidebar = () => setToggleSidebar(state => !state);

    return (
        <div>
            <GlobalStyle />
            <Header handleToggleSidebar={handleToggleSidebar} />
            <Sidebar toggleSidebar={toggleSidebar} />
            {children}
        </div>
    );
};
