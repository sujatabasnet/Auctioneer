import {createContext, useEffect, useState} from 'react';
import {authApp} from '../config/firebase'

export const AuthContext = createContext();
export const AuthProvider = ({children}) => {
    const [currentUser, setCurrentUser]=useState(null);
    const [loading, setLoading]=useState(true);

    const register = (email, password) => {
        return authApp.createUserwithEmailAndPassword(email, password);
    }

    const login =  (email, password) => {
        return authApp.signInWithEmailAndPassword(email, password);
    }

    const logout = () => {
        return authApp.signOut();
    }

    useEffect(() => {
        const subscribe = authApp.onAuthstateChanged((user) => {
            setCurrentUser(user);
            setLoading(false);
        })

        return subscribe;

    }, [])

    return (
        <AuthContext.Provider value={{currentUser, register, login, logout}}>
            {!loading && children}
        </AuthContext.Provider>
    )
}