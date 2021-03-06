const SettingAccountStyle = {
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
        '&>:nth-child(2)': {
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
    settingAccountUserImage: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'end',
        paddingTop: 50,
        '& label': {
            cursor: 'pointer',
        },
        '& img': {
            borderRadius: '50%',
            height: '180px',
            width: '180px',
            marginBottom: 10,
        },
        '& input': {
            margin: '10px 0',
            position: 'absolute',
            width: 1,
            height: 1,
            padding: 0,
            margin: -1,
            overflow: 'hidden',
            clip: 'rect(0, 0, 0, 0)',
            border: 0
        },
        '& button': {
            margin: '10px 0'
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
        width: 200
    },
    settingAccountSaveButton: {
        width: '120px',
        color: 'white',
        fontSize: '17px',
        textAlign: 'center',
        borderRadius: '5px',
        background: 'tomato',
    }




}

export default SettingAccountStyle;