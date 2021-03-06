import React from 'react';
import { useGoogleLogout } from 'react-google-login';
import Router from 'next/router';
import { useAuth } from "./../../../contexts/auth";
const clientId = '691257998742-54gkpd639idtqftk8uhcu02vf3ul0lqt.apps.googleusercontent.com';


function LogoutHooks() {

    const { setAuthTokens } = useAuth();

    const onLogoutSuccess = (res) => {
        if (window.confirm('Apakah kamu yakin akan keluar aplikasi ?')) {
            // Auth.logout();
            setAuthTokens();
            localStorage.clear();
            Router.push('/auth/login')
        }
    };

    const onFailure = () => {
        console.log('Handle failure cases');
    };

    const { signOut } = useGoogleLogout({
        clientId,
        onLogoutSuccess,
        onFailure,
    });

    return (
        <button onClick={() => signOut()} className="button">
            <img src="https://cdn.icon-icons.com/icons2/2119/PNG/512/google_icon_131222.png" style={{ width: 30 }} alt="google login" className="icon"></img>
            <span className="buttonText">Sign out</span>
        </button>
    );
}

export default LogoutHooks;