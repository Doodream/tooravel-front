import React from 'react';
import { Box, Divider, List } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import styles from './SettingAccount.style.js';
import { Typography } from '@material-ui/core';
import { ListItem, Link } from '@material-ui/core';


const useStyles = makeStyles(styles);

export default function SettingAccount() {
    const classes = useStyles();
    return (
        <Box className={classes.settingAccount}>
            <Box className={classes.settingAccountSection}>
                <List className={classes.settingAccountList}>
                    <ListItem className={classes.settingAccountSelectItem}>
                        <Link>계정설정</Link>
                    </ListItem>
                    <ListItem></ListItem>
                    <ListItem>
                        <Link>위시리스트</Link>
                    </ListItem>
                    <ListItem>
                        <Link>로그아웃</Link>
                    </ListItem>
                </List>
                <List className={classes.settingAccountMain}>
                    <ListItem className={classes.settingAccountTitle}>
                        계정설정
                    </ListItem>
                    <ListItem className={classes.settingAccountUsetImage}>
                        <img src="https://www.flaticon.com/svg/static/icons/svg/1221/1221751.svg" alt="계정 이미지"></img>
                    </ListItem>
                    <ListItem>

                    </ListItem>
                    <ListItem>

                    </ListItem>
                    <ListItem>

                    </ListItem>
                    <ListItem>

                    </ListItem>
                </List>
            </Box>
        </Box>

    )
}