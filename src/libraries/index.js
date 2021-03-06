import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import ReactDOM from 'react-dom';
import Link from "./src/Link";
import { makeStyles } from '@material-ui/core/styles';
import axios from 'axios';
import CryptoJS from "crypto-js";

// import PrivatRoute from './src/PrivateRoute';
// import withAuth from './src/withAuth';
import Private from './src/Private';
import { useSnackbar } from 'notistack';


export {
    React, useState, useEffect,
    axios,
    ReactDOM, PropTypes,
    Link, makeStyles,
    Enc, Dnc, HostEnv,
    useSnackbar,
    Private
};


function Enc(value) {
    const val = CryptoJS.AES.encrypt(JSON.stringify(value), process.env.appKey).toString();
    const crypt = val.toString().replace(/\+/g, 'p1L2u3S').replace(/\//g, 's1L2a3S4h').replace(/=/g, 'e1Q2u3A4l');
    return crypt;
}

function Dnc(value) {
    const val = value.toString().replace(/p1L2u3S/g, '+').replace(/s1L2a3S4h/g, '/').replace(/e1Q2u3A4l/g, '=');
    const decypt = CryptoJS.AES.decrypt(val, process.env.appKey);
    return JSON.parse(decypt.toString(CryptoJS.enc.Utf8));
}



function HostEnv() {
    try {
        let hostenv = localStorage.getItem('next.hostenv');
        if (hostenv) {

            let next = Dnc(hostenv);
            let access_token = JSON.stringify(next.access_token);

            const headers = {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
                Authorization: 'Bearer ' + JSON.parse(access_token)
            };

            const header_files = {
                'Content-Type': 'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet',
                Authorization: 'Bearer ' + JSON.parse(access_token)
            };

            return {
                'headers': headers,
                'header_files': header_files,
            }

        } else {
            return {};
        }
    }
    catch (err) {
        return {};
    }
}