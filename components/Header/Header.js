import React from 'react';
import Link from 'next/link';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import styles from './Header.style.js';

const useStyles = makeStyles(styles);

export default function Header() {
    const classes = useStyles();
    return (
        <Box className={classes.header}>
            <Link href='/'>
                <a className={classes.headerLogo}>
                    <img src="https://tooravel.s3.ap-northeast-2.amazonaws.com/media/company/small/TOORAVEL.jpg" alt="투레벨 로고"></img>
                    <h3> Tooravel </h3>
                </a>
            </Link>
            <Box className={classes.headerAccount}>
                <Link href='/account/login'>
                    <a><Typography variant="h6">로그인</Typography></a>
                </Link>
                <Box className={classes.headerDivider}></Box>
                <Link href='/account/signup'>
                    <a><Typography variant="h6">회원가입</Typography></a>
                </Link>
            </Box>
        </Box>
    )
}
