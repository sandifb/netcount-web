import { React, useState, useEffect, Enc, Dnc } from 'libraries';
import { CircularProgress, CssBaseline, Container } from '@material-ui/core';
// import { AuthService } from 'services'
import Router from 'next/router';
import { useAuth } from "./../../src/contexts/auth";

export default function Check(props) {

    const { setAuthTokens } = useAuth();

    useEffect(() => {
        if (!props.user) {
            Router.push("/login")
        }

        let hostenv = localStorage.getItem('next.hostenv');
        
        if (hostenv) {
            let next = Dnc(hostenv);
            let user = JSON.stringify(next.user);
            if (user) {
                Router.push('/')

                //TODO only test
                // setAuthTokens(user)
                //TODO only test

            }
            Router.push('/');
        }else{
            handleSubmit();
        }

    }, []);



    const handleSubmit = async () => {
        


        // TODO
        // Sementara
        const res_data = {
            access_token: "XEEE",
            user:{
                googleId: props.user.googleId,
                imageUrl: props.user.imageUrl,
                email: props.user.email,
                name: props.user.name
            }
        };

        localStorage.setItem('next.hostenv', Enc(res_data));
        Router.push("/")


        // try {
        //     return await AuthService.login.index({
        //         "name": props.user.name,
        //         "email": props.user.email,
        //         "avatar": props.user.imageUrl,
        //         "device_token": null,
        //     })
        //         .then(response => {
        //             if (response.status === 200 && response.data.access_token) {
        //                 localStorage.setItem('next.hostenv', Enc(response.data));
        //                 setAuthTokens(response.data.user);
        //                 Router.push("/")
        //             } 
        //         })
        //         .catch((e) => {

        //         });
        // }
        // catch (e) {

        // }
    }

    return (
        <Container component="main" maxWidth="xs">
            <CssBaseline />
            <CircularProgress />
        </Container>
    );
}