import React from 'react';
import { Box, List, TextField, Button } from '@material-ui/core';
import { makeStyles } from "@material-ui/core/styles";
import styles from './AboutPartnershipInquiry.style.js';
import { Typography } from '@material-ui/core';
import { ListItem } from '@material-ui/core';


const useStyles = makeStyles(styles);

export default function AboutPartnershipInquiry() {
    const classes = useStyles();
    return (
        <Box className={classes.inquiry}>
            <List className={classes.inquirySection}>
                <ListItem className={classes.inquiryTitle}>
                    <Typography variant='h4'>제휴 문의를 보내주세요</Typography>
                    <Typography variant='h7'>문의주신 내용을 2~3 영업일 이내에 답변드리겠습니다.</Typography>
                </ListItem>
                <ListItem className={classes.inquiryForm}>
                    <List className={classes.inquiryInput}>
                        <ListItem className={classes.inquiryIdentify}>
                            <TextField
                                label='Name'
                                variant='outlined'
                                type='text'
                                autoComplete='name'
                            />
                            <TextField
                                label='Email'
                                variant='outlined'
                                type='email'
                                autoComplete='email'
                            />
                            <TextField
                                label='Tel'
                                variant='outlined'
                                type='tel'
                                autoComplete='tel'
                            />
                        </ListItem>
                        <ListItem className={classes.inquiryContent}>
                            <TextField
                                variant='outlined'
                                multiline
                                type='text'
                                rows={9}
                                defaultValue='간단한 소개도 부탁드립니다.'
                            />
                        </ListItem>
                    </List>
                    <Button>문의 하기</Button>
                </ListItem>
            </List>
        </Box>
    )
}