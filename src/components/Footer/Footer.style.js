const FooterStyle = {
    footer: {
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        bottom: 0,
        height: 473,
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
        justifyContent: 'center',
        '& a': {
            margin: 15,
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