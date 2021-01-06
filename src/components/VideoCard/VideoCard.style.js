const VideoCardStyle = {
    videoCard: {
        display: 'flex',
        width: '100%',
        height: '100%',
    },
    videoCardImage: {
        position: 'relative',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoCardThumbnail: {
        width: '100%',
        height: '100%',
        marginTop: 0,
        marginBottom: 0,
        border: 'none',
    },
    videoCardLogo: {
        position: 'absolute',
        left: -8,
        display: 'flex',
        width: '100%',
        border: 'none',
        '& img': {
            border: 'none',
        }
    },
    videoModal: {
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    videoCardContent: {
        textTransform: 'none',
        textAlign: 'start',
        paddingTop: 0,
        '&>:nth-child(1)': {
            fontSize: '13px'
        },
        '&>:nth-child(2)': {
            fontSize: '12px',
            color: 'rgba(0,0,0,0.5)',
        },
        '&>:nth-child(3)': {
            fontSize: '14px',
            fontWeight: 800,

        }
    }

}
export default VideoCardStyle;