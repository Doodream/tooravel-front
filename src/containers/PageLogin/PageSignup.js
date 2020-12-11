import React from 'react';
import {Box} from '@material-ui/core';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import Signup from '../../domains/account/Signup';


export default function SignupPage({ history }){
    return (
        <Box>
            <Header />
            <Signup history={ history }/>
            <Footer />
        </Box>
    )
}