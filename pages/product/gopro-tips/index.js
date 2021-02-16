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
let count = 0;

const useStyles = makeStyles(styles);

export default function PageProductTip() {
    const classes = useStyles();
    const [tipVideosInfo, setTipVideosInfo] = React.useState([]);

    const getVideoInfo = (videoId) => {
        return axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${KEY}&part=snippet,statistics&fields=items(id,snippet(channelId,channelTitle,title,publishedAt,thumbnails(high)),statistics(viewCount))`);
    }

    React.useEffect(() => {
        // var data = null;

        async function setTipVideos() {
            // RIGHT :: Using Promise.resolve
            const tipVideos = await tipVideosId.reduce(async (promise, videoId) => {
                // 누산값 받아오기 (2)
                let result = await promise.then();
                // 누산값 변경 (3)
                const { data: { items } } = await getVideoInfo(videoId);
                const newVideoInfo = {
                    videoId: videoId,
                    viewCount: items[0].statistics.viewCount,
                    publishedAt: items[0].snippet.publishedAt.substring(0, 10),
                    channelTitle: items[0].snippet.channelTitle,
                    title: items[0].snippet.title,
                    thumbnail: items[0].snippet.thumbnails.high.url,
                }

                return Promise.resolve([...result, newVideoInfo]);
            }, Promise.resolve([]));

            setTipVideosInfo(tipVideos)
        }
        setTipVideos();

    }, [])

    return (
        <Page>
            <Box className={classes.productTip}>
                <Box className={classes.section}>
                    <Typography variant='h4'>고프로를 알차게 사용하는 팁</Typography>
                    <List className={classes.videos}>
                        {tipVideosInfo.map((videoInfo, index) => <VideoCard key={index} {...videoInfo} />)}
                    </List>
                </Box>
            </Box>
        </Page>
    )
}