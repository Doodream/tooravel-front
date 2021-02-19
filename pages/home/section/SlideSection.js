import React from 'react';
import { Box, Typography } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import styles from './SlideSection.style.js';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const useStyles = makeStyles(styles);
const images = [
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2Fbupwxt%2FbtqX0pOG9Lv%2FsBprZTmpeq9OCxiBKZ4rL1%2Fimg.png',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FulV2L%2FbtqXZIAVGjZ%2FUrtKogocp1Kp75BRm1MB51%2Fimg.png',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FcION4x%2FbtqXY09EG4d%2FydUtN6I44oWoJRMQq4lry0%2Fimg.png',
    'https://img1.daumcdn.net/thumb/R1280x0/?scode=mtistory2&fname=https%3A%2F%2Fblog.kakaocdn.net%2Fdn%2FNDxkU%2FbtqXSnL1CeI%2F0Kfr8kYSfrlkTkIyWqlEh1%2Fimg.png',
];

export default function SlideSection() {
    const classes = useStyles();
    var sliderSettings = {
        infinite: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 3000,
    }
    return (
        <Box className={classes.slideSection}>
            <Slider {...sliderSettings}>
                {
                    images.map((image, index) => {
                        if (image) {
                            return (
                                <Box key={index} className={classes.imageSection}>
                                    <img className='backImage' src={image} alt='배경이미지'></img>
                                </Box>
                            )
                        }
                    })
                }
            </Slider>
            <Box className={classes.title}>
                <Typography variant='h3'>세상의 모든 자유여행 상품 비교</Typography>
                <Typography variant='h4'>더 쉽게, 더 즐겁게 떠나는 자유여행</Typography>
            </Box>
        </Box>
    )
}