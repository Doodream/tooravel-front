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
                <a className={classes.headerLogo}><img src="https://www.tooravel.net/static/common/img/text_logo_200.png" alt="투레벨 로고"></img></a>
            </Link>
            <Box className={classes.headerAccount}>
                <Link href='/login'>
                    <a><Typography variant="h6">로그인</Typography></a>
                </Link>
                <Box className={classes.headerDivider}></Box>
                <Link href='/signup'>
                    <a><Typography variant="h6">회원가입</Typography></a>
                </Link>
            </Box>
        </Box>
    )
}
