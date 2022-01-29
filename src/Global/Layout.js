import React, { useState } from 'react';
import { GlobalStyle } from '.';
import { Header, Sidebar } from '../Components';

export const Layout = ({ children }) => {
<<<<<<< HEAD
    const [toggleSidebar, setToggleSidebar] = useState(false);
=======
    const [toggleSidebar, setToggleSidebar] = useState(true);
    const handleToggleSidebar = () => setToggleSidebar(state => !state);
>>>>>>> 457dff023a25407070c72af316cfc122588660f0

    return (
        <div>
            <GlobalStyle />
<<<<<<< HEAD
            <Header toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
            <Sidebar toggleSidebar={toggleSidebar} setToggleSidebar={setToggleSidebar} />
=======
            <Header handleToggleSidebar={handleToggleSidebar} />
            <Sidebar toggleSidebar={toggleSidebar} />
>>>>>>> 457dff023a25407070c72af316cfc122588660f0
            {children}
        </div>
    );
};
