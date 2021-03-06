import { React, useState, useEffect, Enc, Dnc } from 'libraries';
import { CircularProgress, CssBaseline, Container } from '@material-ui/core';
// import { AuthService } from 'services'
import Router from 'next/router';
import { useAuth } from "./../../src/contexts/auth";

export default function Check(props) {

    const { setAuthTokens } = useAuth();

    useEffect(() => {

        if (!props.auth) {
            Router.push("/login")
        }

        let hostenv = localStorage.getItem('next.hostenv');
        // console.log("hostenv" + JSON.stringify(hostenv));

        if (hostenv) {
            let next = Dnc(hostenv);
            let user = JSON.stringify(next.auth);
            if (user) {
                Router.push('/')
            }
            Router.push('/');
        }else{
            handleSubmit();
        }

    }, []);



    const handleSubmit = async () => {
    
        // TODO
        // // Sementara
        const res_data = {
            access_token: "XEEE",
            user:{
                googleId: props.auth.googleId,
                imageUrl: props.auth.imageUrl,
                email: props.auth.email,
                name: props.auth.name
            }
        };

        setAuthTokens(res_data.user);
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