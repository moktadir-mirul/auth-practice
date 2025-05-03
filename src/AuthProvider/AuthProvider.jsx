import React from 'react';
import { AuthContext } from '../AuthContext/AuthContext';
import { auth } from '../Firebase/Firebase.init';
import { createUserWithEmailAndPassword } from 'firebase/auth';

const AuthProvider = ( {children} ) => {

    const createUser = (email, password) => {
        return createUserWithEmailAndPassword(auth, email, password);
    }

    const userInfo = {createUser};

    return (
        <AuthContext value={userInfo}>
            {children}
        </AuthContext>
    );
};

export default AuthProvider;