import React, { useState } from 'react';
import { Box, Divider, List, TextField, FormControl, InputLabel, Select, MenuItem, Button, Typography, ListItem } from '@material-ui/core';
import Page from '../../../../components/Layout/Page';
import { makeStyles } from "@material-ui/core/styles";
import styles from './WishList.style.js';

const useStyles = makeStyles(styles);

export default function WishList() {
    const classes = useStyles();

    return (
        <Page>
            <Box className={classes.settingAccount}>
                <Box className={classes.settingAccountSection}>
                    <List className={classes.settingAccountList}>
                        <ListItem>
                            <a>계정설정</a>
                        </ListItem>
                        <ListItem className={classes.settingAccountSelectItem}>
                            <a>위시리스트</a>
                        </ListItem>
                        <ListItem>
                            <a>로그아웃</a>
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
        </Page>
    )
}