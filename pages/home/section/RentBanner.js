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
                <img src="https://static.boredpanda.com/blog/wp-content/uploads/2019/01/7-5c523457c0543__880.jpg" alt="배너이미지"></img>
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