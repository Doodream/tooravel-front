import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Link, Card, CardContent, CardActions } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import axios from 'axios';

const KEY = 'AIzaSyABIHpDoCRz-SxK7mCI54mqqSKvF9wvP4Y';

export default function VideoTest({ videoID }) {

    const getVideoInfo = async (videoID) => {
        const { data: { items } } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoID}&key=${KEY}&part=snippet,statistics&fields=items(id,snippet(channelId,channelTitle,title,publishedAt,thumbnails(high)),statistics(viewCount))`);
        console.log(items[0].snippet);
    }

    useEffect(() => {
        getVideoInfo(videoID)
        console.log({ videoID });
    }, [])
    // 첫 렌더링에만 호출

    return (
        <Box>
            {videoID}
        </Box>
    )
}

VideoTest.propTypes = {
    videoID: PropTypes.string.isRequired,
};