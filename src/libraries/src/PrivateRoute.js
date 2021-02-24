import React, { useState } from 'react';
import Router from 'next/router';
const login = '/login?redirected=true'; // Define your login route address.

// import { AuthContext } from "./../../contexts/auth";
// const [authTokens, setAuthTokens] = useState('');
// const setTokens = (data) => {
//     setAuthTokens(data);
// }



let user = {
    isAdmin: true
}


const checkUserAuthentication = (props) => {

    // console.log("PP" + props);

    return { auth: { user } }; // change null to { isAdmin: true } for test it.
};

export default WrappedComponent => {

    const hocComponent = ({ ...props }) => <WrappedComponent {...props} />;

    hocComponent.getInitialProps = async (context) => {

        const userAuth = await checkUserAuthentication();

        // Are you an authorized user or not?
        if (!userAuth?.auth) {

            // Handle server-side and client-side rendering.
            if (context.res) {
                context.res?.writeHead(302, {
                    Location: login,
                });
                context.res?.end();
            } else {
                Router.replace(login);
            }
        } else if (WrappedComponent.getInitialProps) {
            const wrappedProps = await WrappedComponent.getInitialProps({ ...context, auth: userAuth });
            return { ...wrappedProps, userAuth };
        }

        return { userAuth };
    };

    return hocComponent;
};