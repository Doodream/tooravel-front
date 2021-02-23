import React from 'react';
import { makeStyles } from "@material-ui/core/styles";

import { Box, Typography, Card, CardContent } from '@material-ui/core';
import PropTypes from 'prop-types';
import Rating from '@material-ui/lab/Rating';
import styles from '../../../src/views/product/components/ReviewComment.style.js';

const useStyles = makeStyles(styles);

export default function ReviewComment({ userName, userImage, date, rating, comment }) {
    const classes = useStyles();

    return (
        <Box className={classes.productUserReview}>
            <Card className={classes.productUserReviewCard}>
                <CardContent className={classes.productUserImage}>
                    <img src={userImage} alt="계정 이미지"></img>
                </CardContent>
                <CardContent className={classes.productUserReviewContent}>
                    <Box>
                        <Typography variant='h5'>{userName}</Typography>
                        <Typography>{date}</Typography>
                    </Box>
                    <Box className={classes.productUserRating}>
                        <Box component="fieldset" mb={3} borderColor="transparent">
                            <Rating name="read-only" value={rating} readOnly />
                        </Box>
                    </Box>
                    <Box>
                        <Typography>{comment}</Typography>
                    </Box>
                </CardContent>
            </Card>
            <Box className={classes.productDivider}></Box>
        </Box>
    )
}

ReviewComment.propTypes = {
    userName: PropTypes.string.isRequired,
    userImage: PropTypes.string.isRequired,
    data: PropTypes.string.isRequired,
    rating: PropTypes.number.isRequired,
    comment: PropTypes.string.isRequired,
}