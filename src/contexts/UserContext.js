import React, { createContext, useEffect, useState } from 'react';
import { createUserWithEmailAndPassword, getAuth, GoogleAuthProvider, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut } from "firebase/auth";
import app from '../firebase/firebase.config'


export const AuthContext=createContext();
const auth=getAuth(app)

const UserContext = ({children}) => {
    const [user, setUser]= useState({displayName:'akkas'})

    const googleProvider = new GoogleAuthProvider ()

    const createUser =(email,password)=>{
        return createUserWithEmailAndPassword(auth, email, password)
    }



    const signIn=(email, password)=>{
        return signInWithEmailAndPassword(auth, email,password)
    }


    const logOut=()=>{
        return signOut(auth)
    }


    const signInWithGoogle=()=>{
        return signInWithPopup(auth, googleProvider)
    }


    useEffect(()=>{
      const unsubscribe =   onAuthStateChanged(auth, currentUser=>{
            setUser(currentUser);
            console.log('auth state change', currentUser)
        })
        return ()=>{
            unsubscribe();
        }
    },[])

    
    // const user={displayName:'akkas'}
    const authInfo={user, createUser, signIn, logOut , signInWithGoogle}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;