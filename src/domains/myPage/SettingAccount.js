import React from 'react';
import { Box, List } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import styles from './SettingAccount.style.js';
import { Typography } from '@material-ui/core';
import { ListItem } from '@material-ui/core';


const useStyles = makeStyles(styles);

export default function SettingAccount() {
    const classes = useStyles();
    return (
        <Box className={classes.settingAccount}>
            <Box className={classes.settingAccountSection}>
                뭐지
            </Box>
        </Box>

    )
}