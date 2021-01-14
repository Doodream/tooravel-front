import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Box, Button, Divider, TextField, Typography } from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';

import Page from '../../../components/Layout/Page';

import { useForm } from 'react-hook-form';
import AuthContext from '../../../contexts/Auth/AuthContext';

import styles from '../login/Login.style.js';

const useStyles = makeStyles(styles);

export default function Signup({ history }) {
    const classes = useStyles();

    const emailFormCheck = useRef(null);
    const emailValue = useRef(null);
    const passwordFormCheck = useRef(null);
    const passwordValue = useRef(null);
    const reEnterPasswordFormCheck = useRef(null);

    const [emailEntered, setEmailEntered] = useState('');
    const [isEmailValid, setIsEmailValid] = useState(false);
    const [passwordEntered, setPasswordEntered] = useState('');
    const [isPasswordValid, setIsPasswordValid] = useState(false);
    const [isReEnterPasswordValid, setIsReEnterPasswordValid] = useState(false);

    const { signUp, isAuthenticated } = React.useContext(AuthContext)

    const { handleSubmit } = useForm({
        reValidateMode: 'onBlur'
    });

    React.useEffect(() => {
        if (isAuthenticated) {
            alert('로그인 상태입니다.')
            history.push('/')
        }
    }, []);

    // 이메일 형식 검사, 비밀번호 형식 검사
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
    const validateReEnterPassword = (passwordReEntered) => {
        if (passwordReEntered === passwordEntered) {
            setIsReEnterPasswordValid(true);
        } else {
            setIsReEnterPasswordValid(false);
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

        if (!isReEnterPasswordValid) {
            reEnterPasswordFormCheck.current.style.color = 'red';
        } else {
            reEnterPasswordFormCheck.current.style.color = 'white';
        }

    }

    return (
        <Page>
            <Box className={classes.login}>
                <Box className={classes.loginSection}>
                    <Box className={classes.loginSectionInner}>
                        <Link href='/account/signup'>
                            <a className={classes.loginFacebook}>
                                <Button >FaceBook으로 간편하게 가입하기</Button>
                            </a>
                        </Link>
                        <Divider className={classes.loginDivider}></Divider>
                        <form onSubmit={handleSubmit(signUp)}>
                            <TextField
                                name='email'
                                className={classes.loginInput}
                                onChange={(e) => { validateEmail(e.target.value) }}
                                label='Email : abc@gmail.com'
                                autoComplete='email'
                                variant='outlined' type='email' />
                            <Typography className={classes.loginInputErrmsg} ref={emailFormCheck}> 이메일을 형식에 맞게 입력해주세요 </Typography>
                            <TextField className={classes.loginInput, classes.loginPassword}
                                name='password'
                                ref={passwordValue}
                                label='Password : 숫자 문자 특수 문자 8 ~ 15 자리 이상'
                                onChange={(e) => { validatePassword(e.target.value) }}
                                variant='outlined'
                                type='password' />
                            <Typography className={classes.loginInputErrmsg} ref={passwordFormCheck}> 비밀번호를 형식에 맞게 입력해주세요 </Typography>
                            <TextField className={classes.loginInput, classes.loginPassword}
                                name='password_confirm'
                                ref={passwordValue}
                                label='Re-enter Password'
                                onChange={(e) => { validateReEnterPassword(e.target.value) }}
                                variant='outlined'
                                type='password' />
                            <Typography className={classes.loginInputErrmsg} ref={reEnterPasswordFormCheck}> 같은 비밀번호를 입력해주세요 </Typography>
                            <Button
                                className={classes.loginSummitButton}
                                onClick={formCheck}
                                type='submit'>가입하기
                            </Button>
                        </form>
                        <Typography className={classes.loginGuideMsg}>이메일 또는 Facebook으로 가입시,
                            <a>이용약관</a>에 동의 한 것으로 간주합니다.
                        </Typography>
                        <Divider className={classes.loginDivider}></Divider>
                        <Box className={classes.loginSignup}>
                            <Typography variant='h8'>이미 Tooravel의 회원이신가요?</Typography>
                            {/* button href를 넣으면 css가 달라짐 inspect 하면서 볼 것 */}
                            <Link href='/'><a><Button>로그인</Button></a></Link>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Page>
    )
}