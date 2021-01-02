import React from 'react';

import Page from '../../components/Page/Page';

import { makeStyles } from "@material-ui/core/styles";
import styles from './PageProduct.style.js';
import { Container, Box, Typography } from '@material-ui/core';
import Rating from '@material-ui/lab/Rating';
import KeyboardArrowRightIcon from '@material-ui/icons/KeyboardArrowRight';

const useStyles = makeStyles(styles);

export default function PageProduct() {
    const classes = useStyles();
    return (
        <Page>
            <Container className={classes.product}>
                <Box className={classes.productMain}>
                    <Box className={classes.productImage}>
                        <img src='https://tooravel.s3.ap-northeast-2.amazonaws.com/product/original/GOPRO5.jpg' alt='고프로 히어로'></img>
                    </Box>
                    <Typography className={classes.productTitle} variant='h3'>
                        (액션캠) 고프로 히어로
                    </Typography>
                    <Box className={classes.productRatingReview}>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Rating className={classes.productRatingStar} name="read-only" value={5} readOnly />
                        </Box>
                        <span>평점 4.8</span>
                    </Box>
                    <Box className={classes.productSubtitle}>
                        <Typography>여행지에서 고프로와 함께 여행지에서의 새로운 나를 발견해보세요!</Typography>
                        <Typography>고프로 히어로 7 구성품</Typography>
                        <div>
                            <KeyboardArrowRightIcon /><Typography>하루 7,900원~11,800원 (최대 68% 할인)</Typography>
                        </div>
                    </Box>
                    <Typography variant='h3'>핵심 포인트</Typography>
                    <p class="text">
                        투레벨에서 제공하는 최저가 고프로 대여 서비스!!<br /><br />1. 여행자 혜택! <br />항공시간을 증빙 하시면 수령방법 상관없이 딱 공항출발/공항도착 시간만큼 계산해드려요! <br />당일 공항 직수령 또는 전날 무료 택배로 받아보세요.<br /><br />2. 입문자도 쉽게!<br />고객님이 원하는 상황에 맞게 액세서리를 추천해드리고 바로 사용하실 수 있도록 안내 도와드립니다.<br />그리고 투레벨에서 자체 제작한 입문용 가이드북을 e-book으로 드리고 있습니다.<br />휴대폰에 저장해서 언제 어디서든 사용법을 확인해보세요:)<br /><br />3. 최저가 하루 5,900원!<br />대여일수에 따라 하루 최저 5,900원에 고프로 히어로6 블랙을, 하루 최저 7,900원에 고프로 히어로7 블랙을 대여할 수 있어요.<br /><br />4. 충실한 기본 구성품과 다양한 정품 액세서리!<br />배터리 2개와 듀얼충전기, 128GB 메모리, SD카드 리더기가 기본 포함이고 다양하게 준비된 고프로 전용 액세서리도 고객님 상황에 맞게 선택할 수 있습니다.<br /><br />5. 편한 수령&amp;반납 방법<br />택배를 이용해서 자택까지 무료 배송해드리고, 다시 자택에서 택배로 착불로 접수해주시면 됩니다.<br />평일/휴일 상관없이 택배는 대여일 전날까지 보내드립니다 :)<br />또, 투레벨에서 제공하는 '인천공항 수령반납'도 있으니 편하게 이용해주세요~!!
                    </p>
                </Box>

                <form>
                    <Box>
                        <Typography variant='h3'>7900원</Typography>
                        <Typography variant='h5'>25000원</Typography>
                    </Box>
                </form>
            </Container>
        </Page>
    )
} 