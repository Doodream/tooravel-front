const FooterStyle = {
    footer:{
        display: 'flex',
        justifyContent: 'center',
        position: 'relative',
        bottom: 0,
        height: 473,
        width: '100%',
        background: '#5E5E5E',
    },
    footer__section:{
        width: '80%',
        height: '100%',
        display: 'flex',
        alignItems: 'center',
        flexDirection: 'column',
    },
    footer__menu:{
        display: 'flex',
        width: '100%',
        justifyContent: 'center',
    },
    footer__menu_list:{
        flexGrow: '1',
        justifyContent: 'center',
        flexDirection: 'column',
        '& a':{
            display: 'flex',
            textDecoration: 'none',
            color: 'white',
            textAlign: 'center',
            padding: 10,
        }
    },
    footer__menu_title:{
        textAlign: 'center',
        color: 'white',
    },
    footer__menu_divider:{
        background: 'white',  
    },
    footer__snsList:{
        justifyContent: 'center',
        '& a':{
            margin: 15, 
        }
    },
    footer__info:{
        display: 'flex',
        flexDirection: 'column',
        
    },
    footer__info_text:{
        color: 'white',
        marginTop: 5,
    }
   
}
export default FooterStyle;