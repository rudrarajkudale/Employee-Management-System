import React, { createContext, useEffect, useState } from "react";
import { getLocalStorage, setLocalStorage } from "../utils/LocalStorage";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [userdata, setUserdata] = useState(null);

    useEffect(() => {
        // localStorage.clear()
        let { employees } = getLocalStorage();
        
        if(employees == null){
            setLocalStorage();
        }

        employees = getLocalStorage().employees;
        setUserdata({employees})
        console.log(userdata);
        
    }, []);

    return (
        <AuthContext.Provider value={[userdata, setUserdata]}>
            {children}
        </AuthContext.Provider>
    );
};

export { AuthProvider };
