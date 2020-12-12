import React from 'react';
import {Box} from '@material-ui/core';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AboutImage from '../../domains/about/AboutImage';
import AboutMenu from '../../domains/about/AboutMenu';
import AboutIntro from '../../domains/about/AboutIntro/AboutIntro';

export default function PageIntro({location}){
    return (
        <Box>
            <Header />
            <AboutImage />
            <AboutMenu location = {location}/>
            <AboutIntro />
            <Footer />
        </Box>
    )
}