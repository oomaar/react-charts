import { useEffect, useState } from 'react';
import { auth } from '../lib/firebase';

export const useAuthListner = () => {
    const [user, setUser] = useState(JSON.parse(localStorage.getItem('authUser')));

    useEffect(() => {
        const listner = auth.onAuthStateChanged(authUser => {
            if (authUser) {
                localStorage.setItem('authUser', JSON.stringify(authUser));
                setUser(authUser);
            } else {
                localStorage.removeItem('authUser');
            };
        });

        return () => listner();
    }, []);

    return { user };
};
