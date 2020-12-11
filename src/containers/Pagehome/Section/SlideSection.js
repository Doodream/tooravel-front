import React, { useEffect, useState } from 'react';
import {Box, Typography} from '@material-ui/core';
import {makeStyles} from "@material-ui/core/styles";
import styles from './SlideSection.style.js';


const useStyles=makeStyles(styles);
const images=[
    'https://i.pinimg.com/564x/12/1d/0a/121d0a67f61b86e5d3094e099c5de939.jpg',
    'https://t1.daumcdn.net/cfile/tistory/131A95204B36CDC76B',
    'https://t1.daumcdn.net/cfile/tistory/196457224B36CDDE67?original',
];

export default function SlideSection(){
    const classes=useStyles();
    const [count, setCount]=useState(0);
    useEffect(()=>{
        setTimeout(()=>{
            if(count===images.length-1) {
                setCount(0);
            }else{
                setCount(count+1 );
            }
        },3000);
    })

    return (
        <Box>
            <Box className={classes.imageSection}>
                <img className='backImage' src={images[count]} alt='배경이미지'></img>
            </Box>
            <Box className={classes.title}>
                <Typography variant='h3'>세상의 모든 자유여행 상품 비교</Typography>
                <Typography variant='h4'>더 쉽게, 더 즐겁게 떠나는 자유여행</Typography>
            </Box>
        </Box>
    )
}