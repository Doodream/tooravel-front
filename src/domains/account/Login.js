import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Button, Divider, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Page from 'containers/Page/Page';

import styles from './Login.style.js'

const useStyles = makeStyles(styles);

export default function Login({ history }) {
    const classes = useStyles();

    const emailFormCheck = useRef(null);
    const emailValue = useRef(null);
    const passwordFormCheck = useRef(null);
    const passwordValue = useRef(null);

    const [emailEntered, setEmailEntered] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [passwordEntered, setPasswordEntered] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);

    const validateEmail = (emailEntered) => {
        const emailRegex = /^[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*@[0-9a-zA-Z]([-_\.]?[0-9a-zA-Z])*\.[a-zA-Z]{2,3}$/i;

        if (emailEntered.match(emailRegex)) {
            setEmailEntered(emailEntered);
            setIsEmailValid(true);
        } else {
            setEmailEntered(emailEntered);
            setIsEmailValid(false);
        }
    }
    const validatePassword = (passwordEntered) => {
        // 특수문자 / 문자 / 숫자포함 8 ~ 15자리
        const passwordRegex = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;

        if (passwordEntered.match(passwordRegex)) {
            setPasswordEntered(passwordEntered);
            setIsPasswordValid(true);
        } else {
            setPasswordEntered(passwordEntered);
            setIsPasswordValid(false);
        }
    }
    // 이메일 형식 검사, 비밀번호 형식 검사
    const formCheck = () => {
        if (!isEmailValid) {
            emailFormCheck.current.style.color = 'red';
        }
        else {
            emailFormCheck.current.style.color = 'white';
        }

        if (!isPasswordValid) {
            passwordFormCheck.current.style.color = 'red';
        }
        else {
            passwordFormCheck.current.style.color = 'white';
        }
    }

    return (
        <Page>
            <Box className={classes.login}>
                <Box className={classes.loginSection}>
                    <Box className={classes.loginSectionInner}>
                        <Button
                            className={classes.loginFacebook}
                            onClick={() => { history.push('/login') }} >FaceBook으로 간편하게 로그인</Button>
                        <Divider className={classes.loginDivider}></Divider>
                        <TextField
                            className={classes.loginInput}
                            ref={emailValue}
                            onChange={(e) => { validateEmail(e.target.value) }}
                            label='Email : abc@gmail.com'
                            autoComplete='email'
                            variant='outlined' type='email'
                        />
                        <Typography className={classes.loginInputErrmsg} ref={emailFormCheck}> 이메일을 형식에 맞게 입력해주세요 </Typography>
                        <TextField className={classes.loginInput, classes.loginPassword}
                            ref={passwordValue}
                            onChange={(e) => { validatePassword(e.target.value) }}
                            label='Password : 숫자 문자 특수 문자 8 ~ 15 자리 이상'
                            variant='outlined'
                            type='password' />
                        <Typography className={classes.loginInputErrmsg} ref={passwordFormCheck}> 비밀번호를 입력해주세요 </Typography>
                        <Link className={classes.loginFinder}>비밀번호를 잃어버리셨나요?</Link>
                        <Button
                            className={classes.loginSummitButton}
                            onClick={formCheck}
                            type='submit'
                        >로그인</Button>
                        <Divider className={classes.loginDivider}></Divider>
                        <Box className={classes.loginSignup}>
                            <Typography variant='h8'>아직 Tooravel의 회원이 아니신가요? 지금 바로 가입하세요~</Typography>
                            {/* button href를 넣으면 css가 달라짐 inspect 하면서 볼 것 */}
                            <Button onClick={() => {
                                history.push('/signup')
                            }}>가입하기</Button>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Page>
    )
}