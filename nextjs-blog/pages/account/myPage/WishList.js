import React, { useState } from 'react';
import { Box, Divider, List, TextField, FormControl, InputLabel, Select, MenuItem, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import styles from './WishList.style.js';
import { Typography } from '@material-ui/core';
import { ListItem, Link } from '@material-ui/core';

const useStyles = makeStyles(styles);

export default function WishList() {
    const classes = useStyles();

    return (
        <Box className={classes.settingAccount}>
            <Box className={classes.settingAccountSection}>
                <List className={classes.settingAccountList}>
                    <ListItem>
                        <Link>계정설정</Link>
                    </ListItem>
                    <ListItem className={classes.settingAccountSelectItem}>
                        <Link>위시리스트</Link>
                    </ListItem>
                    <ListItem>
                        <Link>로그아웃</Link>
                    </ListItem>
                </List>
                <List className={classes.settingAccountMain}>
                    <ListItem className={classes.settingAccountTitle}>
                        위시리스트
                    </ListItem>
                    <ListItem className={classes.settingAccountListDivider} />
                </List>
            </Box>
        </Box>
    )
}