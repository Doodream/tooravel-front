import React, { useEffect, useState } from 'react';
import { Box, Typography, Button, Link, Card, CardContent, CardActions, Modal } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import styles from './VideoCard.style.js';
import axios from 'axios';

const useStyles = makeStyles(styles);
const KEY = 'AIzaSyABIHpDoCRz-SxK7mCI54mqqSKvF9wvP4Y';

export default function VideoCard({ videoID }) {
    const classes = useStyles();
    const [viewCount, setViewCount] = useState(0);
    const [publishedAt, setPublishedAt] = useState('');
    const [channelTitle, setChannelTitle] = useState('');
    const [title, setTitle] = useState('');
    const [thumbnail, setThumbnail] = useState('');
    const [open, setOpen] = useState('');

    const getVideoInfo = async (videoID) => {
        const { data: { items } } = await axios.get(`https://www.googleapis.com/youtube/v3/videos?id=${videoID}&key=${KEY}&part=snippet,statistics&fields=items(id,snippet(channelId,channelTitle,title,publishedAt,thumbnails(high)),statistics(viewCount))`);
        setViewCount(items[0].statistics.viewCount);
        setPublishedAt(items[0].snippet.publishedAt.substring(0, 10));
        setChannelTitle(items[0].snippet.channelTitle);
        setTitle(items[0].snippet.title);
        setThumbnail(items[0].snippet.thumbnails.high.url);
    }

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    useEffect(() => {
        getVideoInfo(videoID)
    }, [])
    // 첫 렌더링에만 호출

    let viewRecount = String(viewCount);
    if (viewCount > 10000) {
        viewRecount = String(parseInt(viewCount / 10000)) + '만';
    } else if (viewCount > 1000) {
        viewRecount = String(parseInt(viewCount / 1000)) + '천';
    }

    return (
        <Box>
            <Modal
                open={open}
                onClose={handleClose}>
                <iframe width="1000" height="600" src={`https://www.youtube.com/embed/${videoID}`} frameborder="0" allow="accelerometer; autoplay=1; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen='true'></iframe>
            </Modal>
            <Button onClick={() => handleOpen()}>
                <Card className={classes.videoCard}>
                    <CardActions classeName={classes.videoCardImage}>
                        <img src={thumbnail} alt='썸네일'></img>
                        <Box>
                            <img src='https://www.tooravel.net/static/common/img/icon_ytb.png' alt='youtube로고'></img>
                        </Box>
                    </CardActions>
                    <CardContent className={classes.videoCardContent}>
                        <Typography className={classes.videoCardContentInfo}>조회수 {viewRecount}회 · {publishedAt}</Typography>
                        <Typography className={classes.videoCardContentChannelTitle}>by {channelTitle}</Typography>
                        <Typography className={classes.videoCardContentTitle}>{title}</Typography>
                    </CardContent>
                </Card>
            </Button>
        </Box>
    )
}

VideoCard.propTypes = {
    viewCount: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    channelTitle: PropTypes.string.isRequired,
    publishedAt: PropTypes.string.isRequired,
    thumbnail: PropTypes.string.isRequired,
};