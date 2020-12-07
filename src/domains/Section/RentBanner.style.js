const RentBannerStyle = {
    rentBanner:{
        display:'flex',
        justifyContent: 'center',
        position:"relative",
    },
    rentBanner__image:{
        
        width: '80%',
        height: '300px',
        marginTop: 30,
        '& img':{
            width: '100%',
            height: '100%',
            borderRadius: '5px',
        }
    },
    rentBanner__title:{
        position:"absolute",
        top: '13%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        color: 'white',
        '& h3':{
            marginTop: '10px',
        }
    },
    rentBanner__button:{
        position:"absolute",
        bottom: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        textAlign: 'center',
        color: 'white',
        background: '#E84D3C',
        borderRadius: 30    
    }
}
export default RentBannerStyle;
