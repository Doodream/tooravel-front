import React from 'react';
import Link from 'next/link'
import { Box, Container, Typography, List, Divider } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import styles from './Footer.style.js';

const useStyles = makeStyles(styles);

export default function Footer() {
    const classes = useStyles();
    return (
        <Box className={classes.footer}>
            <Container className={classes.footerSection}>
                <List className={classes.footerMenu}>
                    <Box className={classes.footerMenuList}>
                        <Typography className={classes.footerMenuTitle} variant='h6'>About</Typography>
                        <Divider className={classes.footerMenuDivider}></Divider>
                        <Link href='/about/intro'><a>Tooravel 소개</a></Link>
                    </Box>
                    <Box className={classes.footerMenuList}>
                        <Typography className={classes.footerMenuTitle} variant='h6'>Partnerships</Typography>
                        <Divider className={classes.footerMenuDivider}></Divider>
                        <Link href='/about/partnershipInquiry'><a>제휴문의</a></Link>
                    </Box>
                    <Box className={classes.footerMenuList}>
                        <Typography className={classes.footerMenuTitle} variant='h6'>Terms of use</Typography>
                        <Divider className={classes.footerMenuDivider}></Divider>
                        <Link href='/tou/tos'><a>서비스 이용약관</a></Link>
                        <Link href='/tou/privacy'><a>개인정보 취급방침</a></Link>
                        <Link href='/tou/rentRule'><a>대여서비스 취급방침</a></Link>
                    </Box>
                    <Box className={classes.footerMenuList}>
                        <Typography className={classes.footerMenuTitle} variant='h6'>Contact</Typography>
                        <Divider className={classes.footerMenuDivider}></Divider>
                        <Link href='/about/contact'><a>찾아오기</a></Link>
                        <a href='mailto:tooravel@gmail.com'>tooravel@gmail.com</a>
                        <a>운영시간 평일 10:00 ~ 19:00</a>
                    </Box>
                </List>
                <List className={classes.footerSnsList}>
                    <a href='https://www.facebook.com/tooravel/' target='_blank'><img src='https://www.tooravel.net/static/common/img/icon_face.png' alt='페이스북'></img></a>
                    <a href='https://www.instagram.com/tooravel/' target='_blank'><img src='https://www.tooravel.net/static/common/img/icon_insta.png' alt='인스타'></img></a>
                    <a href='https://blog.naver.com/tooravel' target='_blank'><img src='https://www.tooravel.net/static/common/img/icon_naver.png' alt='네이버'></img></a>
                </List>
                <List className={classes.footerInfo}>
                    <Typography className={classes.footerInfoText} >상호명 : 투레벨(Tooravel)  |  대표 : 성주엽</Typography>
                    <Typography className={classes.footerInfoText} >사업자등록번호 : 580-01-00783</Typography>
                    <Typography className={classes.footerInfoText} >통신판매업신고번호 : 제 2017-경기안산-0894 호   |  사업자정보확인</Typography>
                    <Typography className={classes.footerInfoText} >주소 : 서울시 동대문구 망우로12길 49-1 지하1층 B102</Typography>
                    <Typography className={classes.footerInfoText} >TEL : 02-2138-0020  |  FAX : 0504-377-1956  |  카카오톡플러스 : @tooravel</Typography>
                    <Typography className={classes.footerInfoText} >COPYRIGHT (c) 2017 ALL RIGHT RESERVED 투레벨(Tooravel)</Typography>
                    <Typography> </Typography>
                    <Typography className={classes.footerInfoText} >투레벨은 통신판매중개자이며 통신판매의 당사자가 아닙니다.<br></br>따라서 투레벨은 상품·거래정보 및 거래에 대하여 책임을 지지 않습니다.</Typography>
                </List>
            </Container>
        </Box>
    )
}