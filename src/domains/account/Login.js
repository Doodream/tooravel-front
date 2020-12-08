import React from 'react';
import {Box, Button, Divider, TextField, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import styles from './Login.style.js'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(styles);

export default function Login(){
    const classes = useStyles();

    return (
        <Box className={classes.login}>
            <Box className={classes.loginSection}>
                <Box className={classes.loginSection2}>
                    <Button href='/login' className={classes.loginFacebook}>FaceBook으로 간편하게 로그인</Button>
                    <Divider  className={classes.loginDivider}></Divider>
                    <TextField className={classes.loginInput} label='Email' variant='outlined' />
                    <TextField className={classes.loginInput} label='Password' variant='outlined' />
                    <Link className={classes.loginFinder}>비밀번호를 잃어버리셨나요?</Link>
                    <Button className={classes.loginSummit}>로그인</Button>
                    <Divider  className={classes.loginDivider}></Divider>
                    <Box className={classes.loginSignup}>
                        <Typography variant='h8'>아직 Tooravel의 회원이 아니신가요? 지금 바로 가입하세요~</Typography>
                        <Button href='/login'>가입하기</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}