import React from 'react';
import { Box, List } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import styles from './AboutIntro.style.js';
import { Typography } from '@material-ui/core';
import { ListItem } from '@material-ui/core';


const useStyles = makeStyles(styles);

export default function AboutIntro() {
    const classes = useStyles();
    return (
        <Box className={classes.intro}>
            <List className={classes.introSection}>
                <ListItem className={classes.introTitle}>
                    <Typography>내맘대로 내뜻대로, 더 쉽게 더 즐겁게 떠나는 여행!</Typography>
                </ListItem>
                <ListItem className={classes.introItem}>
                    <Box className={classes.introItemImage}>
                        <img src='https://www.travelnbike.com/news/photo/201903/77604_141293_4837.png' alt='여행사진'></img>
                    </Box>
                    <Box className={classes.introItemExplain}>
                        <Typography variant='h5'>세상의 모든 경험!</Typography>
                        <Typography>투레벨은(Tooravel)은 Together Travel, 함께 여행하자는 의미를 담고 있습니다. 자유여행자들이 원하는 다양한 경험을 즐길 수 있도록, 엄선한 상품들과 액티비티를 쉽게 찾고 예약할 수 있도록 돕는 플랫폼이 되려고 해요.</Typography>
                    </Box>
                </ListItem>
                <ListItem className={classes.introItem}>
                    <Box className={classes.introItemExplain}>
                        <Typography variant='h5'>정말 좋은 상품을 말도 안되는 가격에!</Typography>
                        <Typography >아무리 인기 많은 투어, 액티비티라도 공석이 생기게 마련이죠. 투레벨이 야심차게 준비하고 있는 아이디어. 여행지에서 무얼 할까 고민 중이라면 바로 지금 라스트미닛 초특가에 예약해 보세요</Typography>
                    </Box>
                    <Box className={classes.introItemImage}>
                        <img src='https://image.freepik.com/free-photo/shopping-tag-low-price_165073-787.jpg' alt='가격사진'></img>
                    </Box>
                </ListItem>
                <ListItem className={classes.introItem}>
                    <Box className={classes.introItemImage}>
                        <img src='https://www.fodors.com/wp-content/uploads/2019/08/shutterstock_1054148702.jpg' alt='소프트웨어 여행사진'></img>
                    </Box>
                    <Box className={classes.introItemExplain}>
                        <Typography variant='h5'>소프트웨어와 여행</Typography>
                        <Typography >소프트웨어 기술과 여행이 조합한다면 여행의 가치를 올릴 있는게 너무 많은 걸 알게 됐어요. 저희도 꾸준히, 하나하나 차근차근 이뤄가는 모습 보여드릴게요.</Typography>
                    </Box>
                </ListItem>
            </List>
        </Box>
    )
}