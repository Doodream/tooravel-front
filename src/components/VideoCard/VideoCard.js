import React, { useState } from 'react';
import { Box, Typography, Button, Card, CardContent, CardActions, Modal } from '@material-ui/core';
import PropTypes from 'prop-types';
import { makeStyles } from "@material-ui/core/styles";
import styles from './VideoCard.style.js';

const useStyles = makeStyles(styles);
export default function VideoCard({ viewCount, thumbnail, videoId, title, channelTitle, publishedAt }) {
    const classes = useStyles();
    const [open, setOpen] = useState(false);

    const handleOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }

    let viewRecount = String(viewCount);
    if (viewCount > 10000) {
        viewRecount = String(parseInt(viewCount / 10000)) + '만';
    } else if (viewCount > 1000) {
        viewRecount = String(parseInt(viewCount / 1000)) + '천';
    }

    return (
        <Box>
            <Modal className={classes.videoModal}
                open={open}
                onClose={handleClose}>
                <iframe width="1000" height="600" src={`https://www.youtube.com/embed/${videoId}`} frameBorder="0" autoPlay={1} allow="accelerometer; ; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowFullScreen={true}></iframe>
            </Modal>
            <Button className={classes.videoCard} onClick={() => handleOpen()}>
                <Card className={classes.videoCardSection}>
                    <CardActions className={classes.videoCardImage}>
                        <img className={classes.videoCardThumbnail} src={thumbnail} alt='썸네일'></img>
                        {/* <Box className={classes.videoCardLogo}>
                            <img src='https://www.tooravel.net/static/common/img/icon_ytb.png' alt='youtube로고'></img>
                        </Box> */}
                    </CardActions>
                    <CardContent className={classes.videoCardContent}>
                        <Typography >조회수 {viewRecount}회 · {publishedAt}</Typography>
                        <Typography >by {channelTitle}</Typography>
                        <Typography >{title}</Typography>
                    </CardContent>
                </Card>
            </Button>
        </Box >
    )
}

// VideoCard.propTypes = {
//     videoInfo: PropTypes.object.isRequired,
// };