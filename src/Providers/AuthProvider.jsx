import { createContext, useEffect, useState } from "react";
import PropTypes from 'prop-types';
import { createUserWithEmailAndPassword, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebase.config";


export const AuthContext = createContext(null)

const AuthProvider = ({children}) => {

    const [user, setUser] = useState(null)
    const [loading, setLoading] = useState(true)

    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }

    const signIn = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }

    useEffect(() => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            setUser(currentUser)
            setLoading(false)
            return () => {
                unSubscribe()
            }
        })
    },[])

    

    const authInfo = {
        user,
        loading,
        createUser,
        signIn
    }

    return (
        <div>
           <AuthContext.Provider value={authInfo}>
                {children}
           </AuthContext.Provider> 
        </div>
    );
};


AuthProvider.propTypes = {
    children: PropTypes.node
};

export default AuthProvider;







