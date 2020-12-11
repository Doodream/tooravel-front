import React from 'react';
import {Box} from '@material-ui/core';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Login from '../../domains/account/Login';

export default function LoginPage({history}){
    return (
        <Box>
            <Header />
            <Login history={history}/>
            <Footer />
        </Box>
    )
}