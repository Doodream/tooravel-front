const SlideSectionStyle = {
    imageSection: {
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
        top: '30%',
        left: '30%',
        display: 'flex',
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
