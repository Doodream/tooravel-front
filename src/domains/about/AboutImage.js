import React from 'react';
import { Box } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import styles from './AboutImage.style.js';


const useStyles = makeStyles(styles);

export default function AboutImage() {
    const classes = useStyles();
    return (
        <Box>
            <Box className={classes.imageSection}>
                <img className='backImage' src='https://t1.daumcdn.net/cfile/tistory/131A95204B36CDC76B' alt='배경이미지'></img>
            </Box>
        </Box>
    )
}