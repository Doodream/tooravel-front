const LoginStyle = {
    login: {
        display: 'flex',
        justifyContent: 'center',
        paddingTop: 77.25,
        background: '#EFEFEF',
    },
    loginSection: {
        display: 'flex',
        justifyContent: 'center',
        margin: '50px 0',
        width: '65%',
        background: 'white',
    },
    loginSectionInner: {
        display: 'flex',
        flexDirection: 'column',
        width: '50%',
    },
    loginFacebook: {
        width: '100%',
        color: 'white',
        fontSize: '20px',
        textAlign: 'center',
        borderRadius: '5px',
        background: '#476DA3',
        marginTop: '50px',
        marginBottom: '20px',
    },
    loginDivider: {
        width: '100%',
        border: '0.01px solid #EFEFEF',
    },
    loginInput: {
        margin: '50px 0 20px 0',
        width: '100%',
    },
    loginInputErrmsg: {
        color: 'white',
    },
    loginFinder: {
        margin: '20px 0',
        color: 'black',
        textDecoration: 'none',
    },
    loginSummitButton: {
        width: '100%',
        color: 'white',
        fontSize: '20px',
        textAlign: 'center',
        borderRadius: '5px',
        background: '#F0583A',
        marginBottom: '20px',
    },
    loginSignup: {
        margin: '20px 0',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        background: 'white',
        '&>:nth-child(1)': {
            opacity: '0.5'
        },
        // & button 으로 하면 css 몇개 안먹음
        '&>:nth-child(2)': {
            width: '100px',
            color: 'white',
            fontSize: '20px',
            textAlign: 'center',
            borderRadius: '5px',
            background: '#5E5E5E',
        }
    },
    loginPassword: {
        margin: '20px 0 20px 0',
        width: '100%',
    },
    loginGuideMsg: {
        fontSize: '13px',
        color: 'black',
        '& a': {
            fontSize: '15px',
            color: '#F0583A',
            textDecoration: 'none',
            fontWeight: '600',
        }
    }


}
export default LoginStyle;
