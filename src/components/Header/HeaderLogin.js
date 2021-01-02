import React, { useRef, useState } from 'react';
import { Link } from 'react-router-dom';
import { Box, Typography, List, ListItem, Divider } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';

import styles from './Header.style.js';


const useStyles = makeStyles(styles);

export default function HeaderLogin() {
    const classes = useStyles();
    const hoverList = useRef(null);
    const [ishoverList, setIshoverList] = useState(false);

    const hoverListStatus = () => {
        if (ishoverList === false) {
            setIshoverList(true);
            //console.log(ishoverList);
            hoverList.current.style.visibility = 'visible';
        } else {
            setIshoverList(false);
            //console.log(ishoverList);
            hoverList.current.style.visibility = 'hidden';
        }
    }

    return (
        <Box className={classes.header}>
            <Box className={classes.headerLogo}>
                <Link to='/'><img src="https://www.tooravel.net/static/common/img/text_logo_200.png" alt="투레벨 로고"></img></Link>
            </Box>
            <Box className={classes.headerAccount}>
                <Link to='/booking/confirm'><Typography variant="h6">예약확인</Typography></Link>
                <Box className={classes.headerDivider}></Box>
                {/* 나의 계정에서 설정할 이미지 */}
                <Link
                    className={classes.headerUserImage}
                    onClick={() => hoverListStatus()}>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/1221/1221751.svg" alt="계정 이미지"></img>
                </Link>
            </Box>
            <List
                className={classes.headerList}
                ref={hoverList}>
                <ListItem button>
                    <Link to='/mypage/settingAccount/myInfo'>
                        <PermIdentityOutlinedIcon />
                        <Typography variant='h5'>내 정보</Typography>
                    </Link>
                </ListItem>
                <Divider />
                <ListItem button>
                    <Link to='/mypage/settingAccount/wishList'>
                        <FavoriteBorderOutlinedIcon />
                        <Typography variant='h5'>위시리스트</Typography>
                    </Link>
                </ListItem>
                <Divider />
                <ListItem button>
                    <Link to='/'>
                        <PowerSettingsNewOutlinedIcon />
                        <Typography variant='h5'>로그아웃</Typography>
                    </Link>
                </ListItem>
            </List>

        </Box>
    )
}
