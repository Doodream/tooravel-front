import React from 'react';
import { Box, Container, List, Typography, ListItem } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import Page from '../../../components/Page/Page';

import styles from './PageVideoClip.style.js';
import VideoCard from '../../../components/VideoCard/VideoCard';

const useStyles = makeStyles(styles);

export default function PageVideoClip() {
    const classes = useStyles();
    return (
        <Page>
            <Box className={classes.productTip}>
                <Box className={classes.section}>
                    <Typography variant='h4'>고프로로 담아온 영상</Typography>
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