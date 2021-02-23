const AddToCartStyle = {
    cart: {
        display: 'flex',
        //border: '1px solid rgba(0,0,0,0.4)',
        justifyContent: 'space-around',
        alignItems: 'center',
        padding: 10,
        '& div': {
            margin: '0 5px'
        }
    },
    productImage: {
        width: '15%',
        '& img': {
            width: 50,
            height: 50,
            borderRadius: '20%',
        }
    },
    productTitle: {
        width: '30%'
    },
    productCount: {
        display: 'flex',
        width: '25%',
    },
    productCountButton: {
        margin: '0 10px',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        '& button': {
            cursor: 'pointer',
            margin: 0,
            padding: 0,
            width: 20,
            height: 15,
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            background: 'tomato',
            '& svg': {
                color: 'white',
                width: 15,
                height: 15
            }
        }
    },
    productCountPlusButton: {
        borderRadius: '20% 20% 0 0'
    },
    productCountMinusButton: {
        borderRadius: '0 0 20% 20%',
    },
    productPrice: {
        width: '20%'
    }
    ,
    productRemoveButton: {
        width: '5%',
        '& button': {
            width: '100%',
            cursor: 'pointer',
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            border: 'none',
            background: '#F5F5F5',
            '& svg': {
                color: 'tomato',
                width: 30,
                height: 30
            }
        }
    }

}
export default AddToCartStyle;