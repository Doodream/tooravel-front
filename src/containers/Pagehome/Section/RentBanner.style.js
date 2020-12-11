const RentBannerStyle = {
    rentBanner:{
        display:'flex',
        justifyContent: 'center',
        position:"relative",
        margin: '30px 0',
    },
    rentBannerImage:{

        width: '80%',
        height: '300px',
        
        '& img':{
            width: '100%',
            height: '100%',
            borderRadius: '5px',
        }
    },
    rentBannerTitle:{
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
    rentBannerButton:{
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
