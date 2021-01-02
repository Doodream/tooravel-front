

const PageProductStyle = {
    product: {
        paddingTop: 77.25,
        width: '80%',
        display: 'flex',
    },
    productMain: {
        width: '60%',
        marginRight: '30px',
    },
    productImage: {
        padding: '10px 0',
        '& img': {
            width: '100%',
            borderRadius: '10px',
        }
    },
    productTitle: {
        fontSize: '30px',
        padding: '10px 0',
        fontWeight: '600'
    },
    productRatingReview: {
        padding: '10px 0',
        display: 'flex',
        alignItems: 'center',
        '& fieldset': {
            margin: 0,
            padding: 0,
        }

    },
    productRatingStar: {
        '& span': {
            fontSize: 20
        }
    },
    productSubtitle: {
        '& div': {
            display: 'flex',
            alignItems: 'center',
        }
    }

}

export default PageProductStyle;