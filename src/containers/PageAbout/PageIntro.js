import React from 'react';
import {Box} from '@material-ui/core';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AboutImage from '../../domains/about/AboutImage';

export default function PageIntro(){
    return (
        <Box>
            <Header />
            <AboutImage />
            <Footer />
        </Box>
    )
}