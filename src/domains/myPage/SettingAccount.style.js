const SettingAccountStyle = {
    settingAccount: {
        display: 'flex',
        justifyContent: 'center',
        background: '#EFEFEF',
        paddingTop: 77.25
    },
    settingAccountSection: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        border: '1px solid rgba(0, 0, 0, 0.3)',
        background: 'white',
    },
    settingAccountList: {
        display: 'flex',
        width: '300px',
        flexDirection: 'column',
        '&>:nth-child(3)': {
            display: 'flex',
            '& a': {
                paddingLeft: '20px',
                textDecoration: 'none',
                color: 'black',
                fontSize: 15,

            },
            '& a:hover': {
                textDecoration: 'none',
            }
        },
        '&>:nth-child(2)': {
            display: 'flex',
            '& a': {
                paddingLeft: '20px',
                textDecoration: 'none',
                color: 'black',
                fontSize: 15,
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
            paddingLeft: '15px',
            textDecoration: 'none',
            color: 'tomato',
            fontSize: 15,

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
    },
    settingAccountUsetImage: {
        paddingLeft: '15px',
        '& img': {
            borderRadius: '50%',
            height: '80px',
            widht: '80px',
        }

    }



}

export default SettingAccountStyle;