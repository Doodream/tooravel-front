const FooterStyle = {
    footer: {
        justifyContent: 'center',
        position: 'relative',
        bottom: 0,
        height: 500,
        width: '100%',
        background: '#5E5E5E',
    },
    footerSection: {
        width: '80%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    footerMenu: {
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
    },
    footerMenuList: {
        flexGrow: '1',
        justifyContent: 'center',
        flexDirection: 'column',
        '& a': {
            display: 'flex',
            textDecoration: 'none',
            color: 'white',
            textAlign: 'center',
            padding: 10,
        }
    },
    footerMenuTitle: {
        textAlign: 'center',
        color: 'white',
    },
    footerMenuDivider: {
        background: 'white',
    },
    footerSnsList: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        '& svg': {
            height: 30,
            width: 30,
            color: 'white',
        },
        '& a': {
            margin: 15,
            textDecoration: 'none',
        },
        '& h3': {
            margin: 0,
            fontSize: 30,
            color: 'white',
        }
    },
    footerInfo: {
        display: 'flex',
        flexDirection: 'column',

    },
    footerInfoText: {
        color: 'white',
        marginTop: 5,
    }

}
export default FooterStyle;