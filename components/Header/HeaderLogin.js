import React, { useRef, useState } from 'react';
import Link from 'next/link';
import { Box, Typography, List, ListItem, Divider, Grow, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import PermIdentityOutlinedIcon from '@material-ui/icons/PermIdentityOutlined';
import FavoriteBorderOutlinedIcon from '@material-ui/icons/FavoriteBorderOutlined';
import PowerSettingsNewOutlinedIcon from '@material-ui/icons/PowerSettingsNewOutlined';

import styles from './Header.style.js';

const useStyles = makeStyles(styles);

export default function HeaderLogin() {
    const classes = useStyles();
    const [ishoverList, setIshoverList] = useState(false);

    const hoverListStatus = () => {
        console.log(ishoverList);
        setIshoverList((prev) => !prev);
    }

    return (
        <Box className={classes.header}>
            <Box className={classes.headerLogo}>
                <Link href='/'>
                    <a><img src="https://www.tooravel.net/static/common/img/text_logo_200.png" alt="투레벨 로고"></img></a>
                </Link>
            </Box>
            <Box className={classes.headerAccount}>
                <Link href='/booking/confirm'>
                    <a><Typography variant="h6">예약확인</Typography></a>
                </Link>
                <Box className={classes.headerDivider}></Box>
                {/* 나의 계정에서 설정할 이미지 */}
                <Button
                    className={classes.headerUserImage}
                    onClick={() => hoverListStatus()}>
                    <img src="https://www.flaticon.com/svg/static/icons/svg/1221/1221751.svg" alt="계정 이미지"></img>
                </Button>
            </Box>
            <Grow in={ishoverList}>
                <List className={classes.headerList}>
                    <ListItem button>
                        <Link href='/account/mypage/myinfo'>
                            <a>
                                <PermIdentityOutlinedIcon />
                                <Typography variant='h5'>내 정보</Typography>
                            </a>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Link href='/account/mypage/wishlist'>
                            <a>
                                <FavoriteBorderOutlinedIcon />
                                <Typography variant='h5'>위시리스트</Typography>
                            </a>
                        </Link>
                    </ListItem>
                    <Divider />
                    <ListItem button>
                        <Link href='/'>
                            <a>
                                <PowerSettingsNewOutlinedIcon />
                                <Typography variant='h5'>로그아웃</Typography>
                            </a>
                        </Link>
                    </ListItem>
                </List>
            </Grow>

        </Box>
    )
}
