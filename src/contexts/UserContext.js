import React, { createContext } from 'react';

const AuthContext=createContext();

const UserContext = ({children}) => {
    const user={displayName:'akkas'}
    const authInfo={user:user}
    return (
        <div>
            <AuthContext.Provider value={authInfo}>
                {children}
            </AuthContext.Provider>
        </div>
    );
};

export default UserContext;