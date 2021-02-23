const PageVideoClipStyle = {
    productTip: {
        display: 'flex',
        justifyContent: 'center',
        width: '100wh',
        padding: 77.25,
        background: 'white',
    },
    section: {
        width: '80%',
        background: 'white',
        textAlign: 'center',
    },
    videos: {
        flexFlow: 'row wrap',
        display: 'flex',
        justifyContent: 'center',

        //width: '300px',
        '& div': {
            flexBasis: 400,
        }
    }
}
export default PageVideoClipStyle;
