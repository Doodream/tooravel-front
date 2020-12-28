import React from 'react';
import { Box } from '@material-ui/core';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';
import AboutImage from '../../domains/about/AboutImage';
import AboutMenu from '../../domains/about/AboutMenu';
import AboutContact from '../../domains/about/AboutContact/AboutContact';

export default function PageContact({ location }) {
    return (
        <Box>
            <Header />
            <AboutImage />
            <AboutMenu location={location} />
            <AboutContact />
            <Footer />
        </Box>
    )
}