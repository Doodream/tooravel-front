const SlideSectionStyle = {
    slideSection: {
        position: 'relative',
    },
    imageSection: {
        paddingTop: 81,
        position: 'relative',
        display: 'flex',
        width: '100%',
        height: '490px',
        '& img': {
            width: '100%',
            height: '100%',
        }
    },
    title: {
        position: 'absolute',
        top: 0,
        width: '100%',
        height: '100%',
        display: 'flex',
        justifyContent: 'center',
        textAlign: 'center',
        flexDirection: 'column',
        color: 'white',
        '& h3': {
            fontWeight: '900',
        },
        '& h4': {
            fontWeight: '600',
            marginTop: '30px',
        }
    }
}
export default SlideSectionStyle;
