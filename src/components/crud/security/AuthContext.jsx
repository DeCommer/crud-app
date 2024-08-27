import { createContext, useContext, useState } from 'react';

//1: create context
export const AuthContext = createContext();
export const useAuth = () => useContext(AuthContext);

//2. export to other components for use
export default function AuthProvider({ children }) {

    //3. Put in state
    const [isAuthenticated, setAuthenticated] = useState(false);

    function login(username, password) {
        if(username === `Joseph` && password === `password`) {
            setAuthenticated(true);
            return true;
        }else {
            setAuthenticated(false);
            return false;
        }
    }

    function logout() {
        setAuthenticated(false);
    }

    return (
        <AuthContext.Provider value={ {isAuthenticated, login, logout} }>
            {children}
        </AuthContext.Provider>
    )
}