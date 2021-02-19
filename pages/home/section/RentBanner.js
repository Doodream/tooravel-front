import React from 'react';
import Link from 'next/link';
import { Box, Typography, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import styles from './RentBanner.style.js';

const useStyles = makeStyles(styles);

export default function SlideSection() {

    const classes = useStyles();
    return (
        <Box className={classes.rentBanner}>
            <Box className={classes.rentBannerImage}>
                <img src='https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fk0Um0%2FbtqXSoEgLCJ%2FE4btOJGRFZQEk5jnD2y4K1%2Fimg.png' alt="배너이미지"></img>
            </Box>
            <Box className={classes.rentBannerTitle}>
                <Typography variant='h5'>하루 대여료 최저가 5900원</Typography>
                <Typography variant='h2'>고프로 빌려서 여행가자!</Typography>
            </Box>
            <Link href='/product'>
                <a>
                    <Button className={classes.rentBannerButton}>
                        <Typography>고프로 대여하기</Typography>
                    </Button>
                </a>
            </Link>
        </Box>
    )
}