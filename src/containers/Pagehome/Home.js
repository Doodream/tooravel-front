import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import styles from './Home.style.js';
import SlideSection from './Section/SlideSection';
import RentBannder from './Section/RentBanner';
import Header from '../../components/Header/Header';
import Footer from '../../components/Footer/Footer';


const useStyles = makeStyles(styles);

export default function Home() {
    const classes = useStyles();
    return (
        <Box>
            <Header />
            <Box className={classes.home}>
                <SlideSection />
                <RentBannder />
            </Box>
            <Footer />
        </Box>
    )
}