const ReviewCommentStyle = {
    productUserReview: {
        width: '100%',
        display: 'flex',
        marginBottom: 10,
    },
    productUserReviewCard: {
        display: 'flex',
    },
    productUserImage: {
        '& img': {
            width: 70,
            height: 70,
            borderRadius: '50%',
            border: 'none',
        }
    },
    productUserReviewContent: {
        width: '100vw',
        '&>:nth-child(1)': {
            display: 'flex',
            alignItems: 'center',
            '& h5': {
                fontSize: 15,
                fontWeight: 800,
            },
            '& p': {
                fontSize: 13,
                fontWeight: 600,
                color: 'rgba(0, 0, 0, 0.3)',
                padding: '0 15px',
            }
        },
    },
    productUserRating: {
        padding: '0',
        display: 'flex',
        alignItems: 'center',
        '& fieldset': {
            margin: 0,
            padding: 0,
            border: 'none',
            '& svg': {
                width: 20,
                height: 20,
            },
        }
    },
    productUserReviewTitle: {
        margin: '20px 0',
    },

}

export default ReviewCommentStyle;