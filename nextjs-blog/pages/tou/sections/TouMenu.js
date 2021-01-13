import React from 'react';
import Link from 'next/link';
import { Box, List, ListItem } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";

import styles from './TouMenu.style.js';

const useStyles = makeStyles(styles);

export default function TosMenu({ location }) {

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
                ><Link href='/tou/tos'><a>서비스 이용약관</a></Link></ListItem>
                <ListItem
                    className={classes.menuItem}
                    onMouseEnter={(e) => hoverEnter(e)}
                    onMouseLeave={(e) => hoverLeave(e)}
                ><Link href='/tou/privacy'><a>개인정보 취급방침</a></Link></ListItem>
                <ListItem
                    className={classes.menuItem}
                    onMouseEnter={(e) => hoverEnter(e)}
                    onMouseLeave={(e) => hoverLeave(e)}
                ><Link href='/tou/rent-rule'><a>대여서비스 이용약관</a></Link></ListItem>
            </List>
        </Box>
    )
}