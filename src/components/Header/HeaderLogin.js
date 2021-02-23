import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Box, Typography, List, ListItem, Divider, Grow, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';
import AuthContext from '../../../contexts/Auth/AuthContext'


import styles from './Header.style.js';

const useStyles = makeStyles(styles);

export default function HeaderLogin() {
    const { authUser, logout, isAuthenticated, homeRedirect } = React.useContext(AuthContext);
    const classes = useStyles();
    const [ishoverList, setIshoverList] = useState(false);

    const hoverListStatus = () => {
        console.log(ishoverList);
        setIshoverList((prev) => !prev);
    }
    const gohome = () => {
        alert("로그인을 해주세요.")
        homeRedirect();
    }
    return (
        isAuthenticated ?
            <Box className={classes.header}>
                <Box className={classes.headerLogo}>
                    <Link href='/'>
                        <a className={classes.headerLogo}>
                            <img src="https://tooravel.s3.ap-northeast-2.amazonaws.com/media/company/small/TOORAVEL.jpg" alt="투레벨 로고"></img>
                            <h3> Tooravel </h3>
                        </a>
                    </Link>
                </Box>
                <Box className={classes.headerAccount}>

                    <a><Typography variant="h6">마이페이지</Typography></a>

                    <Box className={classes.headerDivider}></Box>
                    {/* 나의 계정에서 설정할 이미지 */}
                    <Button
                        className={classes.headerUserImage}
                        onClick={() => hoverListStatus()}>
                        <img src={authUser.image} alt="계정 이미지"></img>
                    </Button>
                </Box>
                <Grow in={ishoverList}>
                    <List className={classes.headerList}>
                        <ListItem button>
                            <Link href='/account/myPage/myinfo'>
                                <a>
                                    <PermIdentityOutlinedIcon />
                                    <Typography variant='h5'>내 정보</Typography>
                                </a>
                            </Link>
                        </ListItem>
                        <Divider />
                        <ListItem button onClick={logout}>
                            <a>
                                <PowerSettingsNewOutlinedIcon />
                                <Typography variant='h5'>로그아웃</Typography>
                            </a>
                        </ListItem>
                    </List>
                </Grow>
            </Box> : gohome()
    )
}
