import React, { useState } from 'react';
import { GlobalStyle } from '.';
import { Footer, Header, Sidebar } from '../Components';

export const Layout = ({ children }) => {
    const [toggleSidebar, setToggleSidebar] = useState(false);
    // const handleToggleSidebar = () => setToggleSidebar(state => !state);

    return (
        <div>
            <GlobalStyle />
            <Header toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
            <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
            {children}
            <Footer />
        </div>
    );
};
