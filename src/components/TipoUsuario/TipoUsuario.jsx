import React, { createContext, useState, useEffect } from 'react';

export const UserContext = createContext();

export const UserProvider = ({ children }) => {
const [userType, setUserType] = useState(() => {
    const savedUserType = localStorage.getItem('userType');
    return savedUserType || null;
});

const register = (type) => {
    setUserType(type);
    localStorage.setItem('userType', type);
};

useEffect(() => {
    if (userType) {
    localStorage.setItem('userType', userType);
    }
}, [userType]);

return (
        <UserContext.Provider value={{ userType, setUserType, register }}>
        {children}
        </UserContext.Provider>
    );
};