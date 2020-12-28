import React, { useEffect, useState } from 'react';
import { Box, List, ListItem } from '@material-ui/core';
import { Link, } from 'react-router-dom';
import { makeStyles } from "@material-ui/core/styles";
import styles from './AboutMenu.style.js';


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
                ><Link to='/about/intro'>Tooravel 소개</Link></ListItem>
                <ListItem
                    className={classes.menuItem}
                    onMouseEnter={(e) => hoverEnter(e)}
                    onMouseLeave={(e) => hoverLeave(e)}
                ><Link to='/about/partnershipInquiry'>제휴문의</Link></ListItem>
                <ListItem
                    className={classes.menuItem}
                    onMouseEnter={(e) => hoverEnter(e)}
                    onMouseLeave={(e) => hoverLeave(e)}
                ><Link to='/about/contact'>찾아오기</Link></ListItem>
            </List>
        </Box>
    )
}