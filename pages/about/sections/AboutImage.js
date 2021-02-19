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
                <img className='backImage' src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FK08Q4%2FbtqX0oWyWk4%2Fhz1HCgaKMJtYvA46m7QyAK%2Fimg.png' alt='배경이미지'></img>
            </Box>
        </Box>
    )
}