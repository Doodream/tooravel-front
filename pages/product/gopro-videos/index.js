import React from 'react';
import { Box, List, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import Page from '../../../src/components/Layout/Page';

import styles from '../../../src/views/product/gopro-videos/PageVideoClip.style.js';
import VideoCard from '../../../src/components/VideoCard/VideoCard';
import axios from 'axios';
const KEY = 'AIzaSyABIHpDoCRz-SxK7mCI54mqqSKvF9wvP4Y';

const tipVideosId = [
    '7o6mGQ2uY2Y',
    'D2PN_cg-1Nk',
    'dtbyK9Wg2fk',
    'fvMBNZxKIyU',
    '-mLKAuX0fdU',
    '4Elm751vDG4',
    'Prt-G4cPIn4',
    '5kUu97Vkwj4',
    'k8O9d_XqNlk',
];
const useStyles = makeStyles(styles);

export default function PageProductClip() {
    const classes = useStyles();
    const [tipVideosInfo, setTipVideosInfo] = React.useState([]);

    const getVideoInfo = (videoId) => {
        return axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoId}&key=${KEY}&part=snippet,statistics&fields=items(id,snippet(channelId,channelTitle,title,publishedAt,thumbnails(high)),statistics(viewCount))`);
    }

    React.useEffect(() => {

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

    React.useEffect(() => {
        console.log(tipVideosInfo)
    }, [tipVideosInfo])

    return (
        <Page>
            <Box className={classes.productTip}>
                <Box className={classes.section}>
                    <Typography variant='h4'>고프로로 담아온 영상</Typography>
                    <List className={classes.videos}>
                        {tipVideosInfo.map((videoInfo, index) => <VideoCard key={index} {...videoInfo} />)}
                    </List>
                </Box>
            </Box>
        </Page>
    )
}