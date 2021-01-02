const RentBannerStyle = {
    rentBanner: {
        display: 'flex',
        justifyContent: 'center',
        position: "relative",
        margin: '40px 0',
    },
    rentBannerImage: {

        width: '80%',
        height: '300px',

        '& img': {
            width: '100%',
            height: '100%',
            borderRadius: '5px',
        }
    },
    rentBannerTitle: {
        position: "absolute",
        top: '13%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        textAlign: 'center',
        flexDirection: 'column',
        color: 'white',
        '&>:nth-child(1)': {
            fontWeight: '600'
        },
        '&>:nth-child(2)': {
            marginTop: '10px',
            fontWeight: '900',
        }

    },
    rentBannerButton: {
        padding: '10px 30px',
        position: 'absolute',
        bottom: '10%',
        left: '50%',
        transform: 'translateX(-50%)',
        display: 'flex',
        textAlign: 'center',
        color: 'white',
        background: '#E84D3C',
        borderRadius: '20px',
        '& p': {
            fontWeight: '800',
            fontSize: '20px',

        }
    }
}
export default RentBannerStyle;