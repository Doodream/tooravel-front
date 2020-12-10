import React, { useRef } from 'react';
import {Box, Button, Divider, TextField, Typography} from '@material-ui/core';
import {makeStyles} from '@material-ui/core/styles';
import styles from './Login.style.js'
import { Link } from 'react-router-dom';

const useStyles = makeStyles(styles);

export default function Login(){
    const classes = useStyles();

    const emailFormCheck = useRef(null);
    const emailValue = useRef(null);
    const passwordFormCheck = useRef(null);
    const passwordValue = useRef(null);

    // 이메일 형식 검사, 비밀번호 형식 검사
    const formCheck = () => {
        if(emailValue.current.value === '');
            emailFormCheck.current.style.color = 'red';
        if(passwordValue.current.value === '');
            passwordFormCheck.current.style.color = 'red';
    }

    return (
        <Box className={classes.login}>
            <Box className={classes.loginSection}>
                <Box className={classes.loginSection2}>
                    <Button className={classes.loginFacebook} href='/login' >FaceBook으로 간편하게 로그인</Button>
                    <Divider  className={classes.loginDivider}></Divider>
                    <TextField 
                        className={classes.loginInput} 
                        ref={emailValue} 
                        label='Email' 
                        variant='outlined' type='email' 
                        autoComplete='email'/>
                    <Typography className={classes.loginInputErrmsg} ref={emailFormCheck}> 이메일을 형식에 맞게 입력해주세요 </Typography>
                    <TextField className={classes.loginInput, classes.loginPassword} 
                        ref={passwordValue} 
                        label='Password' 
                        variant='outlined' 
                        type='password'/>
                    <Typography className={classes.loginInputErrmsg} ref={passwordFormCheck}> 비밀번호를 입력해주세요 </Typography>
                    <Link className={classes.loginFinder}>비밀번호를 잃어버리셨나요?</Link>
                    <Button 
                        className={classes.loginSummit} 
                        onClick={formCheck}
                        type='submit'
                        >로그인</Button>
                    <Divider className={classes.loginDivider}></Divider>
                    <Box className={classes.loginSignup}>
                        <Typography variant='h8'>아직 Tooravel의 회원이 아니신가요? 지금 바로 가입하세요~</Typography>
                        {/* button href를 넣으면 css가 달라짐 inspect 하면서 볼 것 */}
                        <Button href='/signup'>가입하기</Button>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}