import React, { useRef, useState } from 'react';
import {Box, List,ListItem} from '@material-ui/core';
import {Link, } from 'react-router-dom';
import {makeStyles} from "@material-ui/core/styles";
import styles from './AboutMenu.style.js';


const useStyles=makeStyles(styles);

export default function AboutMenu(){
    const [isHover, setIsHover] = useState(false);
    
    const handleHover = (event) =>{
        let hoverItem = event.target;
        if(isHover){
            setIsHover(false);
            hoverItem.style.borderBottom = 'none';
        }else{
            setIsHover(true);
            hoverItem.style.borderBottom = '1px solid #F0583A';
        }
    }


    const classes=useStyles();
    return (
        <Box className={classes.menu}>
            <List className={classes.menuSection}>
                <ListItem 
                    className={classes.menuItem}
                    onMouseEnter={(e)=>handleHover(e)}
                    onMouseLeave={(e)=>handleHover(e)}
                    ><Link>Tooravel 소개</Link></ListItem>
                <ListItem 
                    className={classes.menuItem}
                    onMouseEnter={(e)=>handleHover(e)}
                    onMouseLeave={(e)=>handleHover(e)}
                    ><Link>제휴문의</Link></ListItem>
                <ListItem 
                    className={classes.menuItem}
                    onMouseEnter={(e)=>handleHover(e)}
                    onMouseLeave={(e)=>handleHover(e)}
                    ><Link>찾아오기</Link></ListItem>
            </List>
        </Box>
    )
}