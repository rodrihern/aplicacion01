import { createContext, useEffect, useState } from "react";
import { onAuthStateChanged, signOut, signInWithPopup } from "firebase/auth"
import { auth, provider } from "../firebase/config"



export const LoginContext = createContext()

export const LoginProvider = ({ children }) => {
    const [user, setUser] = useState({
        email: null,
        isLogged: false,
        error: null
    })

    const googleLogin = () => {
        signInWithPopup(auth, provider)
            .catch((error) => {
                console.log(error)
                setUser({
                    email: null,
                    isLogged: false,
                    error: error.message
                })
            })
    }

    const logout = () => {
        signOut(auth)
            .then(() => {
                setUser({
                    email: null,
                    isLogged: false,
                    error: null
                })
            })

        
    }

    useEffect(() => {
        onAuthStateChanged(auth, user => {
            if (user) {
                setUser({
                    email: user.email,
                    isLogged: true,
                    error: null
                })
            } else {
                logout()
            }
        })
    }, [])

    return (
        <LoginContext.Provider value={ {user, googleLogin, logout} }>
            { children }
        </LoginContext.Provider>
    )

}