import React from 'react';
import {Box} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import styles from './LoginPage.style.js';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Login from '../../domains/account/Login';

const useStyles = makeStyles(styles);

export default function LoginPage(){
    const classes = useStyles();
    return (
        <Box>
            <Header />
            <Login />
            <Footer />
        </Box>
    )
}