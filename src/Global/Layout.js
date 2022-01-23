import React, { useState } from 'react';
import { GlobalStyle } from '.';
import { Sidebar } from '../Components';

export const Layout = ({ children }) => {
    const [toggleSidebar, setToggleSidebar] = useState(true);
    const handleToggleSidebar = () => setToggleSidebar(state => !state);

    return (
        <div>
            <GlobalStyle />
            <Sidebar toggleSidebar={toggleSidebar} />
            {children}
        </div>
    );
};
