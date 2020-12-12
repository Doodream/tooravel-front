const AboutIntroStyle = {
    intro:{
        display:'flex',
        justifyContent: 'center',
    },
    introSection:{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        width: '80%',
    },
    introTitle:{
        display:'flex',
        justifyContent:'center',
        alignItems:'center',
        width: '100%',
        height: '180px',
        '& p':{
            fontWeight: '600',
            fontSize: 30,

        }
    },
    introItem:{
        display:'flex',
        justifyContent:'center',
        margin: '30px 0',
        height: '390px',
        width: '100%',
    },
    introItemImage:{
        display:'flex',
        flexGrow: 1,
        width: '100%',
        '& img':{
            width: '100%',
        }
    },
    introItemExplain:{
        padding: '0 30px',
        width: '100%',
        flexGrow: 1,
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        color: '#333333',
        '& h5':{
            fontSize: '25px',
            marginBottom: '20px',
        },
        '& h7':{
            fontSize: '15px',
        },
    }
}
export default AboutIntroStyle;