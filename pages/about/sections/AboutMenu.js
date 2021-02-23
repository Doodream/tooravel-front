import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { Box, List, ListItem } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import styles from '../../../src/views/about/sections/AboutMenu.style.js';

const useStyles = makeStyles(styles);

export default function AboutMenu({ location }) {

    const classes = useStyles();

    const hoverEnter = (event) => {
        let hoverItem = event.target;
        hoverItem.style.borderBottom = '2px solid #F0583A';
    }
    const hoverLeave = (event) => {
        let hoverItem = event.target;
        hoverItem.style.borderBottom = 'none';
    }
    return (
        <Box className={classes.menu}>
            <List className={classes.menuSection}>
                <ListItem
                    className={classes.menuItem}
                    onMouseEnter={(e) => hoverEnter(e)}
                    onMouseLeave={(e) => hoverLeave(e)}
                ><Link href='/about/intro'><a>Tooravel 소개</a></Link></ListItem>
                <ListItem
                    className={classes.menuItem}
                    onMouseEnter={(e) => hoverEnter(e)}
                    onMouseLeave={(e) => hoverLeave(e)}
                ><Link href='/about/partnershipInquiry'><a>제휴문의</a></Link></ListItem>
                <ListItem
                    className={classes.menuItem}
                    onMouseEnter={(e) => hoverEnter(e)}
                    onMouseLeave={(e) => hoverLeave(e)}
                ><Link href='/about/contact'><a>찾아오기</a></Link></ListItem>
            </List>
        </Box>
    )
}