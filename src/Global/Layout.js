import React from 'react';
import { GlobalStyle } from '.';

export const Layout = ({ children }) => {
    return (
        <div>
            <GlobalStyle />
            {children}
        </div>
    );
};
