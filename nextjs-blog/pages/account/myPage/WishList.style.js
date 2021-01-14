const WishListStyle = {
    settingAccount: {
        display: 'flex',
        justifyContent: 'center',
        background: '#EFEFEF',
        paddingTop: 77.25
    },
    settingAccountSection: {
        margin: '80px 0',
        display: 'flex',
        justifyContent: 'center',

        border: '1px solid rgba(0, 0, 0, 0.3)',
        background: 'white',
    },
    settingAccountList: {
        display: 'flex',
        width: '300px',
        flexDirection: 'column',
        '&>:nth-child(1)': {
            display: 'flex',
            '& a': {
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '20px',
                textDecoration: 'none',
                color: 'black',
                fontSize: 15,
                fontWeight: '500'
            },
            '& a:hover': {
                textDecoration: 'none',
            }
        },
        '&>:nth-child(3)': {
            display: 'flex',
            '& a': {
                paddingTop: '10px',
                paddingBottom: '10px',
                paddingLeft: '20px',
                textDecoration: 'none',
                color: 'black',
                fontSize: 15,
                fontWeight: '500'
            },
            '& a:hover': {
                textDecoration: 'none',
            }
        },

    },
    settingAccountSelectItem: {
        display: 'flex',
        borderLeft: '5px solid tomato',
        '& a': {
            paddingTop: '10px',
            paddingBottom: '10px',
            paddingLeft: '15px',
            textDecoration: 'none',
            color: 'tomato',
            fontSize: 15,
            fontWeight: '500'
        },
        '& a:hover': {
            textDecoration: 'none',
        }
    },
    settingAccountMain: {
        width: '850px',
        borderLeft: '1px solid rgba(0, 0, 0, 0.3)',
    },
    settingAccountTitle: {
        height: '80px',
        paddingLeft: '15px',
        color: 'black',
        fontSize: 15,
        fontWeight: '500'
    },
    settingAccountListDivider: {
        width: '95%',
        margin: 'auto',
        borderBottom: '1px solid rgba(0, 0, 0, 0.3)'
    }
    ,
    settingAccountUsetImage: {
        padding: '50px',
        '& img': {
            borderRadius: '50%',
            height: '80px',
            widht: '80px',
        }
    },
    settingAccountUserInfo: {
        display: 'flex',
        alignItems: 'start',
        flexDirection: 'column',
        '& p': {
            fontWeight: '500',
        },
    },
    formControl: {
        width: 80
    },
    settingAccountSaveButton: {
        width: '80px',
        color: 'white',
        fontSize: '20px',
        textAlign: 'center',
        borderRadius: '5px',
        background: 'tomato',
    }




}

export default WishListStyle;