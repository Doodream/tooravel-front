import React from 'react';
import { Box, List, Typography, ListItem } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { getVideoInfo } from "../index.js";

import Page from '../../../components/Layout/Page';

import styles from './PageProductTip.style.js';
import VideoCard from '../../../components/VideoCard/VideoCard';
import axios from 'axios';
const KEY = 'AIzaSyABIHpDoCRz-SxK7mCI54mqqSKvF9wvP4Y';

const tipVideosId = [
    'J3XTohm5Lbg',
    'pGx8ySVp4aA',
    'J3XTohm5Lbg',
    'J3XTohm5Lbg',
    'pGx8ySVp4aA',
    'J3XTohm5Lbg',
    'J3XTohm5Lbg',
    'pGx8ySVp4aA',
    'J3XTohm5Lbg',
];

const useStyles = makeStyles(styles);

export default function PageProductTip() {
    const classes = useStyles();
    const [tipVideosInfo, setTipVideosInfo] = React.useState([]);

    const getVideoInfo = async (videoId) => {
        const { data: { items } } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${KEY}&part=snippet,statistics&fields=items(id,snippet(channelId,channelTitle,title,publishedAt,thumbnails(high)),statistics(viewCount))`);

        setTipVideosInfo(tipVideosInfo.concat({
            videoId: videoId,
            viewCount: items[0].statistics.viewCount,
            publishedAt: items[0].snippet.publishedAt.substring(0, 10),
            channelTitle: items[0].snippet.channelTitle,
            title: items[0].snippet.title,
            thumbnail: items[0].snippet.thumbnails.high.url,
        }))

    }

    React.useEffect(() => {
        tipVideosId.map((videoId) => {
            getVideoInfo(videoId);
        });
    }, [])
    return (
        <Page>
            <Box className={classes.productTip}>
                <Box className={classes.section}>
                    <Typography variant='h4'>고프로를 알차게 사용하는 팁</Typography>
                    <List className={classes.videos}>{
                        tipVideosInfo.map((videoInfo) => {
                            if (videoInfo) {
                                return (
                                    <VideoCard videoInfo={videoInfo} />
                                )
                            }
                        })
                    }
                    </List>
                </Box>
            </Box>
        </Page>
    )
}