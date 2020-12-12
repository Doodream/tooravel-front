import React from 'react';
import {Box} from '@material-ui/core';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AboutImage from '../../domains/about/AboutImage';
import AboutMenu from '../../domains/about/AboutMenu';

export default function PageIntro(){
    return (
        <Box>
            <Header />
            <AboutImage />
            <AboutMenu />
            <Footer />
        </Box>
    )
}