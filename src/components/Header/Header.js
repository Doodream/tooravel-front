import React from 'react';
import {Link} from 'react-router-dom';
import {Box, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import styles from './Header.style.js';

const useStyles = makeStyles(styles);

export default function Header(){
    const classes = useStyles();
    return(
        <Box className={classes.header}>
            <Box className={classes.header__logo}>
                <Link><img src="https://www.tooravel.net/static/common/img/text_logo_200.png" alt="투레벨 로고"></img></Link>
            </Box>
            <Box className={classes.header__account}>
                <Link to='/'><Typography variant="h6">로그인</Typography></Link>
                <Box></Box>
                <Link to='/'><Typography variant="h6">회원가입</Typography></Link>
            </Box>
        </Box>
    )
}
