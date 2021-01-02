import React from 'react';
import { Box, List, TextField, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import { Typography } from '@material-ui/core';
import { ListItem } from '@material-ui/core';

import styles from './AboutContact.style.js';

const useStyles = makeStyles(styles);

export default function AboutContact() {
    const classes = useStyles();
    return (
        <Box className={classes.contact}>
            <List className={classes.contactSection}>
                <ListItem className={classes.contactTitle}>
                    <Typography variant='h4'>환영 합니다 :)</Typography>
                    <Typography variant='h7'>커피 한 잔 하러 오세요 ^^</Typography>
                </ListItem>
                <ListItem>
                    <div>
                        <h5>주소</h5>
                        <p>서울특별시 동대문구 망우로12길 49-1 지하1층 B102호</p>
                        <p><abbr title="Phone">P</abbr> : 02-2138-0020</p>
                        <p><abbr title="Email">E</abbr> : tooravel@gmail.com</p>
                        <p><abbr title="Hours">H</abbr> : 24 Hours, Anytime</p>
                    </div>
                </ListItem>
                <ListItem>
                    <Box>
                        <img src='' alt='네이버 지도' />
                    </Box>
                </ListItem>
            </List>
        </Box>
    )
}