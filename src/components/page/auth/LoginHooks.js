import React from 'react';
import { useGoogleLogin } from 'react-google-login';
// refresh token
import { refreshTokenSetup } from './refreshToken';
import { useAuth } from "./../../../contexts/auth";
import Router from 'next/router';


const clientId = '691257998742-54gkpd639idtqftk8uhcu02vf3ul0lqt.apps.googleusercontent.com';

function LoginHooks() {

    const { setAuthTokens } = useAuth();
    const onSuccess = (res) => {
        
        console.log('Login Success: currentUser:', res.profileObj);

        const auth = {
            googleId: res.profileObj.googleId,
            imageUrl: res.profileObj.imageUrl,
            email: res.profileObj.email,
            name: res.profileObj.name
        };

        setAuthTokens(auth);

        if (res.profileObj.googleId) {
            Router.push("/auth/check")
        }

        refreshTokenSetup(res);
    };

    const onFailure = (res) => {
        console.log('Login failed: res:', res);
    };

    const { signIn } = useGoogleLogin({
        onSuccess,
        onFailure,
        clientId,
        isSignedIn: true,
        accessType: 'offline',
        // responseType: 'code',
        // prompt: 'consent',
    });

    return (
        <button onClick={signIn} className="button">
            <img src="https://cdn.icon-icons.com/icons2/2119/PNG/512/google_icon_131222.png" style={{ width: 30 }} alt="google login" className="icon"></img>
            <span className="buttonText">Sign in with Google</span>
        </button>
    );
}

export default LoginHooks;