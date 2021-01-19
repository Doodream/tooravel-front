import React from 'react';
import { Box, Container, List, Typography, ListItem } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import Page from '../../../components/Page/Page';

import styles from './PageProductTip.style.js';
import VideoCard from '../../../components/VideoCard/VideoCard';

const useStyles = makeStyles(styles);

export default function PageProductTip() {
    const classes = useStyles();
    return (
        <Page>
            <Box className={classes.productTip}>
                <Box className={classes.section}>
                    <Typography variant='h4'>고프로를 알차게 사용하는 팁</Typography>
                    <List className={classes.videos}>
                        <ListItem>
                            <VideoCard videoID='7o6mGQ2uY2Y' />
                            <VideoCard videoID='7o6mGQ2uY2Y' />
                            <VideoCard videoID='7o6mGQ2uY2Y' />
                        </ListItem>
                        <ListItem>
                            <VideoCard videoID='7o6mGQ2uY2Y' />
                            <VideoCard videoID='7o6mGQ2uY2Y' />
                            <VideoCard videoID='7o6mGQ2uY2Y' />
                        </ListItem>
                        <ListItem>
                            <VideoCard videoID='7o6mGQ2uY2Y' />
                            <VideoCard videoID='7o6mGQ2uY2Y' />
                            <VideoCard videoID='7o6mGQ2uY2Y' />
                        </ListItem>
                    </List>
                </Box>
            </Box>
        </Page>
    )
}