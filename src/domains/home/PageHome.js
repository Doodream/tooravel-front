import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import Page from '../../components/Page/Page';
import SlideSection from './Section/SlideSection';
import RentBannder from './Section/RentBanner';

import styles from './PageHome.style.js';

const useStyles = makeStyles(styles);

export default function Home() {
    const classes = useStyles();
    return (
        <Page>
            <Box className={classes.home}>
                <SlideSection />
                <RentBannder />
            </Box>
        </Page>
    )
}