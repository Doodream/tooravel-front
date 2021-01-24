const PageProductStyle = {
    section: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        width: '80%',
        margin: '0 auto',
    },
    product: {
        paddingTop: 77.25,
        width: '100%',
        display: 'flex',
        justifyContent: 'space-between',
        paddingBottom: 77.25,
    },
    productMain: {
        width: '60%',
        marginRight: '30px',
        '& h3': {
            fontSize: 30,
            fontWeight: '800',
            padding: '10px 0',

        },
        '& h5': {
            fontSize: 25,
            fontWeight: '500',
            padding: '10px 0',
        },
        '& img': {
            marginTop: 20,
            marginBottom: 20,
            display: 'block',
            marginLeft: 'auto',
            marginRight: 'auto',
            border: '0.2px solid rgba(0,0,0, 0.1)',
            borderRadius: '3px',
        }
    },
    productGuideBook: {
        width: 300,
        height: 400,
    }
    ,
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
        '& p': {
            fontSize: 20,
            padding: '10px 0',
        }
    },
    productSubtitle: {
        '& p': {
            fontSize: 22,
            color: 'tomato',
            fontWeight: '600',
        },
        '& svg': {
            color: 'tomato',

        },
        '& div': {
            display: 'flex',
            alignItems: 'center',
        }
    },
    productTooravelLogoTitle: {
        display: 'flex',
        alignItems: 'center',
        '& img': {
            margin: 0,
            marginRight: 10,
            width: 30,
            height: 30,
            border: 'none',
        }
    },
    productDivider: {
        border: '0.5px solid rgba(0,0,0, 0.1)',
    },
    text: {
        fontSize: 16,
        lineHeight: '2em',
        '& dt': {
            fontSize: 18,
            fontWeight: 600,
        }
    },
    productViewMoreButton: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
        '& button': {
            color: 'tomato',
            '& svg': {
                color: 'tomato',
            }
        }

    },
    productReview: {
        '&>:nth-child(3)': {
            width: '100%',
            background: 'white',
        },
        '&>:nth-child(4)': {
            width: '100%',
            color: 'white',
            fontSize: '20px',
            textAlign: 'center',
            borderRadius: '5px',
            background: '#F0583A',
            margin: '20px 0',
        }
    },
    productUserReview: {
        display: 'flex',
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
    productBooking: {
        zIndex: -100,
        padding: 0,
        width: '100%',
        position: 'fixed',
        top: 105,
        left: 0,
        right: 0,
    },
    productBookingCard: {
        width: '30%',
        marginLeft: 'auto',
        display: 'flex',
        flexDirection: 'column',
        background: '#F5F5F5',
        '&>:nth-child(1)': {
            display: 'flex',
            alignItems: 'start',
            '& h3': {
                fontSize: 30,
                fontWeight: 600,
                '& del': {
                    fontWeight: 400,
                    fontSize: 20,
                    color: 'rgba(0, 0, 0, 0.3)'
                }
            }
        },
        '&>:nth-child(3)': {
            display: 'flex',
            flexDirection: 'column',
            justifyContent: 'center',
            '&>:nth-child(1)': {
                paddingTop: 10,
                width: '90%',
                '& p': {
                    color: 'tomato',

                }
            },
        }
    },
    productReviewButton: {
        width: '100%',
        color: 'white',
        fontSize: '20px',
        textAlign: 'center',
        borderRadius: '5px',
        background: '#F0583A',
        margin: '20px 0',
    },
    slider: {
        '& div': {
            width: '90%',
            margin: '0px auto',
            display: 'flex',
            justifyContent: 'center',
        }
    },
    productSlider: {
        display: 'flex',
        justifyContent: 'center',
        boxSizing: 'border-box',
    },
    productSlideImage: {
        cursor: 'pointer',
        position: 'relative',
        display: 'flex',
        margin: '0px',
        padding: '10px 0',
        '& img': {
            margin: 0,
            width: '50%',
            height: '70%',
            border: 'none',
        }
    },
    productSlideImageWrap: {
        width: '50%',
        height: '100%',
        position: 'absolute',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        textAlign: 'center',
        '& p': {
            textShadow: '1px 3px 3px black',
            fontSize: 20,
            fontWeight: 800,
            color: 'white'
        },
        '& button': {
            height: '100%',
            '& svg': {
                filter: 'drop-shadow( 3px 3px 2px rgba(0, 0, 0, 0.7))',
                color: 'white',
                height: 70,
                width: 70,
            }
        }
    },
    productTip: {
        margin: '40px 0',
    },
    productTipTitle: {
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        '& h5': {
            fontSize: 25,
            fontWeight: '500',
            padding: '10px 0',
        },
        '& a': {
            display: 'flex',
            alignItems: 'center',
            textDecoration: 'none',
            color: 'tomato',
        }
    },
    productTipVideo: {
        display: 'flex',
        flexWrap: 'wrap',
        width: '100%',
        alignItems: 'start',
        '& div': {
            flex: 1
        }
    }

}

export default PageProductStyle;